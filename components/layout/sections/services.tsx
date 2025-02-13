import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  featured?: boolean;
}

const serviceList: ServiceProps[] = [
  {
    title: "Agentic Workflows",
    description:
      "Build intelligent AI agents that can autonomously handle complex tasks and workflows in your business processes.",
    featured: true,
  },
  {
    title: "Multimodal AI",
    description:
      "Leverage cutting-edge AI models for processing and generating images, video, and audio content with state-of-the-art accuracy.",
    featured: true,
  },
  {
    title: "RAG Systems",
    description: 
      "Implement advanced Retrieval Augmented Generation systems for accurate, context-aware AI responses using your proprietary data.",
    featured: true,
  },
  {
    title: "Data Extraction",
    description: 
      "Extract structured data from unstructured sources like PDFs, documents, and images using our advanced AI processing pipeline.",
    featured: false,
  },
  {
    title: "Privacy-First AI",
    description: 
      "Deploy self-hosted AI models that keep your data secure and compliant while delivering powerful AI capabilities.",
    featured: true,
  },
  {
    title: "End-to-End Development",
    description: 
      "From rapid prototyping to production deployment, we handle the complete lifecycle of your AI solution.",
    featured: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Our Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        AI Solutions We Offer
      </h2>
      <h3 className="md:w-3/4 mx-auto text-xl text-center text-muted-foreground mb-8">
        We specialize in building cutting-edge AI solutions that help businesses innovate and scale. 
        Our expertise spans across various AI domains and technologies.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {serviceList.map(({ title, description, featured }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
            </CardHeader>
            {featured && (
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-3"
              >
                Featured
              </Badge>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
