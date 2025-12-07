import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CertificationsPreview } from "@/components/home/CertificationsPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <CertificationsPreview />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
