import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Mixio Labs - AI Solutions Company",
  description: "Building Tomorrow's AI Solutions Today",
  openGraph: {
    type: "website",
    url: "https://mixio.pro",
    title: "Mixio Labs - AI Solutions Company",
    description: "Building Tomorrow's AI Solutions Today",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Mixio Labs - AI Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://mixio.pro",
    title: "Mixio Labs - AI Solutions Company",
    description: "Building Tomorrow's AI Solutions Today",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <div className="container flex flex-col items-center justify-center text-center py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose <span className="text-primary">Mixio Labs</span>?
        </h2>
      </div>
      <BenefitsSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
