import { ArrowRight, Database, Cloud, Mail, MessageSquare, Bell, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IntegrationEcosystem = () => {
  const integrationCategories = [
    {
      name: "Data Warehouses",
      icon: Database,
      items: ["Snowflake", "BigQuery", "Redshift"]
    },
    {
      name: "CRM & Marketing",
      icon: Cloud,
      items: ["Salesforce", "Hubspot", "MoEngage", "WebEngage", "Clevertap"]
    },
    {
      name: "Communication",
      icon: MessageSquare,
      items: ["Twilio", "WhatsApp", "Email", "Push", "SMS"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Integrates Seamlessly with Your Existing Stack
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughtnudge connects natively to your enterprise ecosystem — without adding new complexity.
            </p>
          </div>
          
          {/* Integration Grid */}
          <div className="space-y-8 mb-12">
            {integrationCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Category Icon & Name */}
                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {category.name}
                      </h3>
                    </div>
                    
                    {/* Integration Items */}
                    <div className="flex-1 flex flex-wrap gap-3">
                      {category.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="px-4 py-2 bg-muted rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
                        >
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Visual Connection Diagram */}
          <div className="relative py-12 mb-12 animate-fade-in [animation-delay:450ms]">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {/* Left: Data Sources */}
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center shadow-md">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center shadow-md">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              
              {/* Center: Thoughtnudge */}
              <div className="flex flex-col items-center flex-1 mx-8">
                <div className="w-32 h-32 rounded-2xl bg-primary flex items-center justify-center shadow-xl animate-neural-pulse">
                  <span className="text-2xl font-bold text-primary-foreground">TN</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">Thoughtnudge</p>
              </div>
              
              {/* Right: Channels */}
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center shadow-md">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center shadow-md">
                  <Bell className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" style={{ opacity: 0.2 }}>
                <line x1="20%" y1="30%" x2="45%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" />
                <line x1="20%" y1="70%" x2="45%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" />
                <line x1="55%" y1="50%" x2="80%" y2="30%" stroke="hsl(var(--primary))" strokeWidth="2" />
                <line x1="55%" y1="50%" x2="80%" y2="70%" stroke="hsl(var(--primary))" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center animate-fade-in [animation-delay:600ms]">
            <Button 
              size="lg" 
              variant="outline"
              className="px-8"
              asChild
            >
              <Link to="/integrations">
                See Integration Options
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationEcosystem;
