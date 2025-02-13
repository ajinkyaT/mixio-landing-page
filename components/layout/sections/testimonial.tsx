"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "Sarah Chen",
    userName: "AI Product Lead",
    comment:
      "Mixio Labs delivered an exceptional RAG system that significantly improved our document processing accuracy. Their expertise in AI and attention to detail made the integration seamless.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=20",
    name: "Michael Patel",
    userName: "CTO, HealthTech Startup",
    comment:
      "The privacy-first approach of Mixio Labs was crucial for our healthcare AI implementation. They helped us build a secure, HIPAA-compliant solution without compromising on performance.",
    rating: 4.9,
  },
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "David Rodriguez",
    userName: "VP of Engineering",
    comment:
      "Working with Mixio Labs transformed our customer service with their AI agent solution. The rapid development and iterative approach helped us launch faster than expected.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=41",
    name: "Emma Thompson",
    userName: "Director of Innovation",
    comment:
      "The expertise of the Mixio Labs team in both AI and engineering is impressive. They not only built our AI solution but also ensured it integrated perfectly with our existing systems.",
    rating: 4.8,
  },
  {
    image: "https://i.pravatar.cc/150?img=50",
    name: "Alex Kumar",
    userName: "Head of Data Science",
    comment:
      "Mixio Labs helped us implement a complex multimodal AI system that handles both text and image data. Their solution significantly improved our processing efficiency.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Lisa Wang",
    userName: "Product Manager",
    comment:
      "The ongoing support from Mixio Labs has been outstanding. They continuously help us optimize our AI models and adapt to our evolving business needs.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Client Success Stories
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <Card className="bg-muted/60 dark:bg-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating)
                            ? "text-primary fill-primary"
                            : "text-muted stroke-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};
