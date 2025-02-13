import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of AI solutions does Mixio Labs specialize in?",
    answer: "We specialize in building AI agents, RAG (Retrieval Augmented Generation) systems, multimodal AI solutions, and privacy-preserving AI models. Our expertise spans across various domains including voice AI, document processing, and custom AI development.",
    value: "item-1",
  },
  {
    question: "How long does it typically take to develop an AI solution?",
    answer: "Development timelines vary based on project complexity. We follow a rapid prototyping approach, typically delivering initial prototypes within 2-4 weeks. Full production-ready solutions can take 2-3 months, depending on requirements and integration needs.",
    value: "item-2",
  },
  {
    question: "Do you offer self-hosted AI solutions for data privacy?",
    answer: "Yes, we specialize in developing self-hosted AI solutions that keep your data secure and compliant. Our privacy-first approach ensures that sensitive information never leaves your infrastructure while maintaining high performance and reliability.",
    value: "item-3",
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various industries including healthcare, legal tech, sales intelligence, and enterprise solutions. Our experience includes projects in customer experience, business intelligence, and creative technology sectors.",
    value: "item-4",
  },
  {
    question: "What is your development process like?",
    answer: "Our process involves four key stages: Discovery (understanding your vision), Design (architecture planning), Development (rapid prototyping and iterative refinement), and Delivery (testing, deployment, and knowledge transfer). We maintain clear communication throughout the process.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
