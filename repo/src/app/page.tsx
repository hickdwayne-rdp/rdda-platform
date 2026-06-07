import { PageContainer } from "@/components/layout/PageContainer";
import { PageShell } from "@/components/layout/PageShell";
import { HomeApproachSection } from "@/components/sections/HomeApproachSection";
import { HomeHeroSection } from "@/components/sections/HomeHeroSection";
import { HomeServiceAreasSection } from "@/components/sections/HomeServiceAreasSection";
import { HomeWhoRddaSupportsSection } from "@/components/sections/HomeWhoRddaSupportsSection";

export default function Home() {
  return (
    <PageShell>
      <main
        className="min-h-screen px-6 py-8 sm:px-10 lg:px-16"
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <PageContainer>
          <HomeHeroSection />
          <HomeServiceAreasSection />
                  <HomeWhoRddaSupportsSection />
<HomeApproachSection />
        </PageContainer>
      </main>
    </PageShell>
  );
}

