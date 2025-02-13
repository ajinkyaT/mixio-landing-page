import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  description: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://storage.googleapis.com/mixio_public_assets/Ajinkya_ppic.jpeg",
      firstName: "Ajinkya",
      lastName: "Takawale",
      positions: ["Co-Founder", "AI Research Engineer"],
      description: [
        "AI Research Engineer",
        "Worked in Japan for 5 years",
        "B.Tech IIT Kharagpur"
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ajinkya-takawale/"
        }
      ]
    },
    {
      imageUrl: "https://storage.googleapis.com/mixio_public_assets/kaustubh_ppic.jpeg",
      firstName: "Kaustubh",
      lastName: "Agrawal",
      positions: ["Co-Founder", "Full Stack Engineer"],
      description: [
        "Full Stack Engineer",
        "Early Stage Startups",
        "B.Tech IIT Kharagpur"
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kaustubh-agrawal/"
        }
      ]
    }
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "X":
        return <XIcon />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Our Team
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Meet the Founders
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          College roommates with a decade-long partnership, bringing together deep AI expertise 
          and full-stack development experience to build tomorrow&apos;s AI solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, description, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col overflow-hidden group/hoverimg w-full"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={500}
                    height={500}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover/hoverimg:scale-110"
                  />
                </div>
              </CardHeader>

              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-bold mb-2">
                  {firstName} {lastName}
                </CardTitle>

                <div className="space-y-2 mb-4">
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className="text-sm font-medium text-primary"
                    >
                      {position}
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  {description.map((desc, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {desc}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-4">
                  {socialNetworks.map(({ name, url }, index) => (
                    <Link
                      key={index}
                      href={url}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary"
                    >
                      {socialIcon(name)}
                    </Link>
                  ))}
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
