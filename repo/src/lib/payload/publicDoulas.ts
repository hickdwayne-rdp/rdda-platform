export type PublicDoulaProfile = {
  name: string
  businessName?: string
  bio?: string
  imageAlt: string
  imageSrc?: string
}

type PayloadMedia = {
  altText?: string
  url?: string
}

type PayloadDoulaProfile = {
  name?: string
  businessName?: string
  bio?: string
  headshot?: PayloadMedia | string | null
}

type PayloadCollectionResponse<T> = {
  docs?: T[]
}

const getPayloadBaseUrl = () =>
  process.env.PAYLOAD_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SITE_URL || ''

const normalizeMediaUrl = (url: string | undefined) => {
  if (!url) {
    return undefined
  }

  if (url.startsWith('/')) {
    return url
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (siteUrl && url.startsWith(siteUrl)) {
    return url.replace(siteUrl, '')
  }

  return undefined
}

const getHeadshot = (headshot: PayloadDoulaProfile['headshot']) => {
  if (!headshot || typeof headshot === 'string') {
    return {
      imageAlt: '',
      imageSrc: undefined,
    }
  }

  return {
    imageAlt: headshot.altText || '',
    imageSrc: normalizeMediaUrl(headshot.url),
  }
}

export const getPublishedDoulaProfiles = async (): Promise<PublicDoulaProfile[]> => {
  const baseUrl = getPayloadBaseUrl()

  if (!baseUrl) {
    return []
  }

  const url = new URL('/api/doulaProfiles', baseUrl)

  url.searchParams.set('where[publishedStatus][equals]', 'published')
  url.searchParams.set('where[activeStatus][equals]', 'active')
  url.searchParams.set('sort', '-featuredStatus,name')
  url.searchParams.set('depth', '1')
  url.searchParams.set('limit', '100')

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 300,
      },
    })

    if (!response.ok) {
      return []
    }

    const data = (await response.json()) as PayloadCollectionResponse<PayloadDoulaProfile>

    return (
      data.docs
        ?.filter((profile) => profile.name)
        .map((profile) => {
          const headshot = getHeadshot(profile.headshot)

          return {
            name: profile.name || '',
            businessName: profile.businessName,
            bio: profile.bio,
            imageAlt: headshot.imageAlt || `Portrait of ${profile.name}`,
            imageSrc: headshot.imageSrc,
          }
        }) || []
    )
  } catch {
    return []
  }
}
