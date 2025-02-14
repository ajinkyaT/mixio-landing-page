"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Mail, MessageSquare } from "lucide-react";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#E7554B" },
          dark: { "cal-brand": "#E7554B" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className=" gap-8 flex justify-center">
        <div className="mx-auto text-center">
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Contact Us
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Your AI Solution
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-5xl">
            Ready to transform your business with AI? Get in touch with our team
            to discuss your project requirements and explore how we can help you
            achieve your goals.
          </p>

          {/* <div className="space-y-4 mb-8">
            <Card className="bg-muted/60">
              <CardHeader className="space-y-1 flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-2.5 rounded-xl">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Project Discussion</CardTitle>
                  <CardDescription>
                    Schedule a call to discuss your AI project
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-muted/60">
              <CardHeader className="space-y-1 flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-2.5 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>
                    <a
                      href="mailto:contact@mixiolabs.com"
                      className="hover:text-primary"
                    >
                      contact@mixiolabs.com
                    </a>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-muted/60">
              <CardHeader className="space-y-1 flex flex-row items-center gap-4">
                <div className="bg-primary/20 p-2.5 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Quick Response</CardTitle>
                  <CardDescription>
                    We typically respond within 24 hours
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div> */}
        </div>
      </div>

      <Cal
        namespace="30min"
        calLink="mixio/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "auto" }}
      />
    </section>
  );
};
