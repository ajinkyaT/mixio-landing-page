import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator"; // Keep if used, reference doesn't use it directly but good for structure
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer" // Keep existing ID
      className="container relative border-t border-border pt-16 pb-8 md:py-24" // Combined classes, simplified padding
    >
      {/* Optional: Decorative element from reference, adapt if needed
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>
      */}

      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <div className="sm:col-span-2">
          <Link href="/" className="inline-flex items-center">
            <Logo />
            {/* <span className="ml-2 text-xl font-bold tracking-wide text-foreground">Mixio Labs</span> Logo component handles name */}
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-muted-foreground">
              Building Tomorrow&rsquo;s AI Solutions Today. We specialize in AI
              Agents, RAG Systems, and Voice AI to empower your business.
            </p>
            {/* Reference "Made by" can be project specific, omitting for now or can be added if Mixio has a "Made by X" policy */}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-foreground">
            Solutions
          </p>
          <Link
            href="#services"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            AI Agents
          </Link>
          <Link
            href="#services"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            RAG Systems
          </Link>
          <Link
            href="#services"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Voice AI
          </Link>
          <Link
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Features
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-foreground">
            Company
          </p>
          <Link
            href="#team"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            About Us
          </Link>
          {/* <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300">Blog</Link> */}
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Contact Us
          </Link>
          {/* <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors duration-300">Careers</Link> */}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-foreground">
            Resources
          </p>
          <Link
            href="#faq"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            FAQ
          </Link>
          {/* <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</Link> */}
          {/* <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">Terms & Conditions</Link> */}
          <p className="text-base font-bold tracking-wide text-foreground mt-4">
            Connect
          </p>
          <Link
            href="https://www.linkedin.com/in/ajinkya-takawale/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ajinkyaT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            GitHub
          </Link>
          <Link
            href="mailto:ajinkya.takawale97@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Email
          </Link>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-border/40 lg:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mixio Labs. All rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Terms & Conditions</Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
};
