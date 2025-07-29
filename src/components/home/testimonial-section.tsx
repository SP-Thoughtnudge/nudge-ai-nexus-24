
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Transformative Results
          </h2>
          <p className="text-xl text-gray-600">
            See how leading companies are achieving remarkable outcomes with ThoughtNudge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden shadow-lg border-0 transition-all duration-300 hover:shadow-xl">
            <div className="h-2 bg-brand-orange"></div>
            <CardContent className="p-8">
              <div className="mb-6">
                {/* Placeholder for company logo */}
                <div className="w-32 h-12 bg-gray-100 rounded"></div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "ThoughtNudge has revolutionized our customer engagement. We've seen a 93% increase in conversion rates and reduced campaign setup time by 60%."
              </blockquote>
              <div className="flex items-center">
                {/* Placeholder for testimonial avatar */}
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-brand-black">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">VP of Marketing, E-commerce Leader</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-brand-orange">93%</p>
                    <p className="text-sm text-gray-600">Conversion increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-orange">60%</p>
                    <p className="text-sm text-gray-600">Time saved</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg border-0 transition-all duration-300 hover:shadow-xl">
            <div className="h-2 bg-brand-pink"></div>
            <CardContent className="p-8">
              <div className="mb-6">
                {/* Placeholder for company logo */}
                <div className="w-32 h-12 bg-gray-100 rounded"></div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "The ability to make 1:1 decisions for each customer has transformed our business. Our retention rates are up 45% since implementing ThoughtNudge."
              </blockquote>
              <div className="flex items-center">
                {/* Placeholder for testimonial avatar */}
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-brand-black">Michael Chen</p>
                  <p className="text-gray-600 text-sm">CRO, Travel & Hospitality</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-brand-pink">45%</p>
                    <p className="text-sm text-gray-600">Retention increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-pink">3.2x</p>
                    <p className="text-sm text-gray-600">ROI improvement</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg border-0 transition-all duration-300 hover:shadow-xl">
            <div className="h-2 bg-brand-yellow"></div>
            <CardContent className="p-8">
              <div className="mb-6">
                {/* Placeholder for company logo */}
                <div className="w-32 h-12 bg-gray-100 rounded"></div>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "Our team can now focus on strategy instead of manual campaign optimization. ThoughtNudge delivers personalized experiences we couldn't achieve before."
              </blockquote>
              <div className="flex items-center">
                {/* Placeholder for testimonial avatar */}
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium text-brand-black">Alex Rivera</p>
                  <p className="text-gray-600 text-sm">Director of Growth, SaaS Platform</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-brand-yellow">72%</p>
                    <p className="text-sm text-gray-600">Engagement lift</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-brand-yellow">85%</p>
                    <p className="text-sm text-gray-600">Manual work reduced</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/case-studies" className="inline-flex items-center text-brand-orange hover:text-brand-orange/90 font-medium group">
            <span>See all customer stories</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
