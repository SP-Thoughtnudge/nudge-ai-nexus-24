import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GrowthAuditForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Growth audit form submitted");
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold text-brand-black">
          Get Your Free Audit
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-brand-black">
              Work Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@company.com"
              required
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-brand-black">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-brand-black">
              Company Name *
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Your Company"
              required
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-brand-black">
              Job Title
            </Label>
            <Input
              id="jobTitle"
              type="text"
              placeholder="Head of Growth"
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-brand-black">
              Company Website *
            </Label>
            <Input
              id="website"
              type="url"
              placeholder="https://yourcompany.com"
              required
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <Button
            type="submit"
            variant="pink"
            size="lg"
            className="w-full"
          >
            Start My Growth Audit
          </Button>

          <p className="text-xs text-brand-gray text-center">
            We respect your privacy.{" "}
            <a href="#" className="text-brand-pink hover:underline">
              Read our policy here.
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default GrowthAuditForm;