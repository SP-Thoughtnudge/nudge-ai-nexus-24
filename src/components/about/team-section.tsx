
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

const TeamSection = () => {
  const founders = [
    {
      name: "Himanshu Chauhan",
      role: "Co-founder & CEO",
      bio: "Before founding Thoughtnudge, Himanshu spent over a decade on the front lines of technology, leading product and strategy at both established leaders like Ericsson and high-growth startups like Uniphore. This unique blend of enterprise scale and startup agility shapes his vision for the company: to use his insights from ISB, Hyderabad to solve the fundamental growth challenges that every B2C business faces. He is obsessed with finding a better way for brands and customers to connect in the digital world.",
      image: "/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/himanshuchauhan04/"
    },
    {
      name: "Sthitapragnya Kalita",
      role: "Co-founder & CTO",
      bio: "A hands-on technologist and AI expert, Sthitapragnya honed his skills building large-scale machine learning systems at Amazon. As CTO, he is the architect of our core technology, focused on the complex challenge of translating the nuances of behavioral science into a powerful, adaptive intelligence engine. He holds degrees from two of India's most prestigious institutions, IIT (BHU) and ISB, Hyderabad, giving him a rare perspective that spans both deep technology and business strategy.",
      image: "/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/sthitapragnya-kalita-21890b18/"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            The Architects of Autonomous Growth
          </h2>
          <p className="text-xl text-gray-600">
            Building immense credibility through powerful combination of business vision and deep tech expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-brand-black">{founder.name}</h3>
                  <p className="text-brand-pink font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-4">{founder.bio}</p>
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-brand-pink transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5 mr-2" />
                    <span>LinkedIn Profile</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
