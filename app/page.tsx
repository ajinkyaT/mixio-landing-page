import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { StepsSection } from "@/components/layout/sections/steps";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Mixio Pro - AI Marketing Tool",
  description: "Create stunning marketing content with AI",
  openGraph: {
    type: "website",
    url: "https://mixio.pro",
    title: "Mixio Pro - AI Marketing Tool",
    description: "Create stunning marketing content with AI",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Mixio Pro - AI Marketing Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://mixio.pro",
    title: "Mixio Pro - AI Marketing Tool",
    description: "Create stunning marketing content with AI",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <div className="container flex flex-col items-center justify-center text-center py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          The <span className="text-primary">Only AI Tool</span> for Marketing You will Ever Need
        </h2>
      </div>
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      {/* <FeaturesSection />
      <ServicesSection /> */}
      <TestimonialSection />
      <TeamSection />
      {/* <CommunitySection /> */}
      <PricingSection />
      <ContactSection /> # change adress in India
      <FAQSection /> # change FAQ questions
      <FooterSection />
    </>
  );
}
