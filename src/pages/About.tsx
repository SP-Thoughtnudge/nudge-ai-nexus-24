
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import StorySection from "@/components/about/story-section";
import ValuesSection from "@/components/about/values-section";
import TeamSection from "@/components/about/team-section";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 leading-tight">
                We're on a Mission to Make Digital Interactions More Human.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                The digital world is noisy. We believe the solution isn't more messages, but more intelligence. At Thoughtnudge, we're creating a new paradigm for growth, built on a deep, evolving understanding of every individual customer.
              </p>
            </div>
          </div>
        </section>

        <StorySection />
        <TeamSection />
        <ValuesSection />

        {/* Join Our Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Help Us Build the Future of Growth
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're looking for ambitious and curious minds to join us on our mission. If you're excited by the challenge of building a new category and solving complex problems with AI, we'd love to hear from you.
              </p>
              <Button variant="pink" size="lg">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
