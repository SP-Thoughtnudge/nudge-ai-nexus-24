
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600">
            We're building a world where businesses understand and respond to customers as individuals, 
            not segments or averages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-t-4 border-t-brand-orange">
            <CardContent className="p-6 md:p-8">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">Mission</h3>
              <p className="text-gray-600">
                To create autonomous AI systems that understand individual customers deeply, allowing 
                businesses to deliver truly personalized experiences at scale.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-brand-pink">
            <CardContent className="p-6 md:p-8">
              <div className="h-12 w-12 bg-brand-pink/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-brand-pink" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">Vision</h3>
              <p className="text-gray-600">
                A future where AI makes every customer interaction as personal and relevant as if your 
                business knew each customer intimately.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-brand-black">
            <CardContent className="p-6 md:p-8">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">Purpose</h3>
              <p className="text-gray-600">
                To empower businesses to build deeper, more meaningful relationships with customers through 
                AI that genuinely understands human preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
