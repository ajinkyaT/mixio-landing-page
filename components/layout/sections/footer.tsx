import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">Mixio Labs</h3>
            </Link>
            <p className="mt-4 opacity-60">
              Building Tomorrow's AI Solutions Today
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Solutions</h3>
            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                AI Agents
              </Link>
            </div>
            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                RAG Systems
              </Link>
            </div>
            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Voice AI
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="#team" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Careers
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Case Studies
              </Link>
            </div>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Connect</h3>
            <div>
              <Link 
                href="https://www.linkedin.com/in/ajinkya-takawale/" 
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                LinkedIn
              </Link>
            </div>
            <div>
              <Link 
                href="https://github.com/ajinkyaT" 
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                GitHub
              </Link>
            </div>
            <div>
              <Link href="mailto:ajinkya.takawale97@gmail.com" className="opacity-60 hover:opacity-100">
                Email
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Mixio Labs. All rights reserved.</p>
          <p className="mt-1">
            Locations: Pune • Bengaluru • Remote Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};
