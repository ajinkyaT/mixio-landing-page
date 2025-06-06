import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import HeroLanding from "@/components/layout/sections/hero-new";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { BrandHighlightedTitle } from "@/components/ui/brand-highlighted-title";
import { LampContainer } from "@/components/ui/lamp";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ProcessSection } from "@/components/layout/sections/process-section";

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
      {/* <HeroSection /> */}
      <HeroLanding />
      <ServicesSection />
      <div className="container flex flex-col items-center justify-center text-center py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose <BrandHighlightedTitle>Mixio Labs</BrandHighlightedTitle>?
        </h2>
      </div>
      <BenefitsSection />
      <FeaturesSection />

      <ProcessSection />

      {/* <TeamSection /> */}
      {/* <TestimonialSection /> */}
      <ContactSection />
      <FAQSection />

      {/* CTA Section */}
      <section id="cta" className="relative overflow-hidden mt-10">
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-b from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl md:text-6xl !leading-[1.15] font-bold tracking-tight text-transparent mt-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              Partner with Mixio Labs to unlock the full potential of artificial
              intelligence. Let's build innovative solutions that drive growth
              and efficiency.
            </p>
            <div className="mt-8">
              <Link
                href="#contact"
                className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-background bg-primary hover:bg-primary/90`}
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2 -mr-1" />
              </Link>
            </div>
          </div>
        </LampContainer>
      </section>

      <FooterSection />
    </>
  );
}
