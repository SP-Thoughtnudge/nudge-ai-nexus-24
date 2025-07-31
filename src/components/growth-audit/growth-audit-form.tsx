import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { validateGrowthAuditForm, rateLimiter } from "@/lib/security";

const GrowthAuditForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check (5 submissions per 10 minutes per IP)
    const clientIP = 'anonymous'; // In production, get from headers
    if (!rateLimiter.isAllowed(clientIP, 5, 10 * 60 * 1000)) {
      alert('Too many submission attempts. Please wait before trying again.');
      return;
    }
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Extract form data
    const rawData = {
      email: formData.get('email') as string,
      firstName: formData.get('firstName') as string,
      company: formData.get('company') as string,
      jobTitle: formData.get('jobTitle') as string,
      website: formData.get('website') as string,
    };
    
    // Validate and sanitize using security utility
    const validation = validateGrowthAuditForm(rawData);
    
    if (!validation.isValid) {
      alert('Please correct the following errors:\n' + validation.errors.join('\n'));
      return;
    }
    
    // TODO: Send validated data to secure backend endpoint over HTTPS
    console.log("Growth audit form submitted with validated data:", validation.sanitizedData);
    alert('Thank you! We will contact you soon with your growth audit.');
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
              name="email"
              type="email"
              placeholder="your.email@company.com"
              required
              autoComplete="email"
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-brand-black">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              autoComplete="given-name"
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-brand-black">
              Company Name *
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company"
              required
              autoComplete="organization"
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-brand-black">
              Job Title
            </Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              type="text"
              placeholder="Head of Growth"
              autoComplete="organization-title"
              className="border-gray-200 focus:border-brand-pink focus:ring-brand-pink"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-brand-black">
              Company Website *
            </Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://yourcompany.com"
              required
              autoComplete="url"
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