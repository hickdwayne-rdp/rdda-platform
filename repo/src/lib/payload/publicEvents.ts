export type PublicEvent = {
  title: string
  slug?: string
  eventDate?: string
  startTime?: string
  endTime?: string
  location?: string
  description?: string
  host?: string
  cost?: string
  registrationLink?: string
  imageAlt?: string
  imageSrc?: string
}

type PayloadMedia = {
  altText?: string
  url?: string
}

type PayloadEvent = {
  title?: string
  slug?: string
  eventDate?: string
  startTime?: string
  endTime?: string
  location?: string
  description?: string
  host?: string
  cost?: string
  registrationLink?: string
  image?: PayloadMedia | string | null
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

const getEventImage = (image: PayloadEvent['image']) => {
  if (!image || typeof image === 'string') {
    return {
      imageAlt: '',
      imageSrc: undefined,
    }
  }

  return {
    imageAlt: image.altText || '',
    imageSrc: normalizeMediaUrl(image.url),
  }
}

export const getPublishedEvents = async (): Promise<PublicEvent[]> => {
  const baseUrl = getPayloadBaseUrl()

  if (!baseUrl) {
    return []
  }

  const url = new URL('/api/events', baseUrl)

  url.searchParams.set('where[status][equals]', 'published')
  url.searchParams.set('sort', 'eventDate')
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

    const data = (await response.json()) as PayloadCollectionResponse<PayloadEvent>

    return (
      data.docs
        ?.filter((event) => event.title)
        .map((event) => {
          const image = getEventImage(event.image)

          return {
            title: event.title || '',
            slug: event.slug,
            eventDate: event.eventDate,
            startTime: event.startTime,
            endTime: event.endTime,
            location: event.location,
            description: event.description,
            host: event.host,
            cost: event.cost,
            registrationLink: event.registrationLink,
            imageAlt: image.imageAlt || `Event image for ${event.title}`,
            imageSrc: image.imageSrc,
          }
        }) || []
    )
  } catch {
    return []
  }
}
