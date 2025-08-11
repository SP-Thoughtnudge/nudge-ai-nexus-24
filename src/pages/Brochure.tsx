import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, Mail, CheckCircle, Target, TrendingUp, Shield, Users, Clock, Zap } from "lucide-react";
import jsPDF from 'jspdf';
import { updateSEOTags } from "@/lib/seo";

const Brochure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEOTags({
      title: "Insurance Renewal Agent Brochure | Thoughtnudge",
      description: "Download the Thoughtnudge insurance renewal agent brochure to see how AI boosts renewals and CLTV.",
      url: "https://www.thoughtnudge.com/brochure",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  const handleDownloadPDF = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      // Page 1
      // Logo
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('ThoughtNudge', pageWidth - margin - 30, margin);
      
      // Main headline
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(220, 38, 127); // Brand pink
      const headline1 = pdf.splitTextToSize('Drive Renewal. Maximize Lifetime Value. Convert the Hesitants.', contentWidth);
      pdf.text(headline1, margin, 40);
      
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text('AI RENEWAL AGENT FOR INSURANCE', margin, 60);
      
      // The Problem section
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('The Problem', margin, 80);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      const problemText = 'Insurers lose millions every year due to churn and missed renewals. Despite having rich customer data, most follow-up efforts are still manual, rules-based, or outsourced — leading to:';
      const problemLines = pdf.splitTextToSize(problemText, contentWidth);
      pdf.text(problemLines, margin, 90);
      
      // Problem bullets
      const bullets = [
        '• Robotic, low-conversion outreach',
        '• High operational costs and inefficiencies',
        '• Poor personalization and timing mismatches',
        '• No learning or improvement over time',
        '• Minimal visibility into what\'s actually working'
      ];
      
      let yPos = 110;
      bullets.forEach(bullet => {
        pdf.text(bullet, margin + 5, yPos);
        yPos += 8;
      });
      
      // The Solution section
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('The ThoughtNudge Solution', margin, yPos + 15);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      const solutionText = 'We deploy a self-learning AI agent that autonomously nudges each policyholder toward renewal — with the right message, tone, offer, channel, and timing. Built on reinforcement learning and behavioral science, the agent continuously learns what works for each customer and improves performance over time.';
      const solutionLines = pdf.splitTextToSize(solutionText, contentWidth);
      pdf.text(solutionLines, margin, yPos + 25);
      
      // What the Agent Does
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('What the Agent Does:', margin, yPos + 55);
      
      const agentFeatures = [
        '• Learns from behavioral and policy data',
        '• Optimizes what to say, when, and how — in real time',
        '• Continuously experiments, learns, and improves',
        '• Works across email, WhatsApp, SMS, and voice',
        '• Requires no manual workflows or campaign setup',
        '• Seamlessly integrates with your CRM and communication stack'
      ];
      
      let agentYPos = yPos + 65;
      pdf.setFont('helvetica', 'normal');
      agentFeatures.forEach(feature => {
        pdf.text(feature, margin + 5, agentYPos);
        agentYPos += 8;
      });
      
      // Page 2
      pdf.addPage();
      
      // Logo on page 2
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('ThoughtNudge', pageWidth - margin - 30, margin);
      
      // The Impact section
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('The Impact', margin, 40);
      
      // Impact table
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Metric', margin, 55);
      pdf.text('Typical Result', margin + 80, 55);
      
      pdf.setFont('helvetica', 'normal');
      const impactData = [
        ['Policy renewal uplift', '+8–15%'],
        ['Manual intervention', '↓ up to 70%'],
        ['Manual workflows', 'Eliminated'],
        ['Time to deploy', '~ 2 weeks'],
        ['Bonus', 'Insights to boost CLTV across lifecycle']
      ];
      
      let tableY = 65;
      impactData.forEach(row => {
        pdf.text(row[0], margin, tableY);
        pdf.text(row[1], margin + 80, tableY);
        tableY += 10;
      });
      
      // Why It Works
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Why It Works', margin, tableY + 15);
      
      const whyItWorks = [
        '✓ AI that doesn\'t just analyze — it acts',
        '✓ Outcome-first, not tool-first',
        '✓ Learns per customer, not just per segment',
        '✓ Autonomous agents > rule-based journeys',
        '✓ Integrates with your stack — no rip and replace',
        '✓ Transparent decisioning, full observability'
      ];
      
      let whyY = tableY + 25;
      pdf.setFont('helvetica', 'normal');
      whyItWorks.forEach(item => {
        pdf.text(item, margin, whyY);
        whyY += 8;
      });
      
      // Use Cases & Security
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Ideal Use Cases', margin, whyY + 15);
      pdf.text('Security & Compliance', margin + 90, whyY + 15);
      
      pdf.setFont('helvetica', 'normal');
      pdf.text('• Policy Renewals (Term, Health, Life, Auto)', margin, whyY + 25);
      pdf.text('• Upsell/Cross-sell to higher plans', margin, whyY + 33);
      
      pdf.text('• End-to-end encryption', margin + 90, whyY + 25);
      pdf.text('• SOC 2 and GDPR-aligned', margin + 90, whyY + 33);
      pdf.text('• Full audit logs', margin + 90, whyY + 41);
      
      // CTA
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Let\'s Run a Pilot', margin, whyY + 60);
      
      pdf.setFont('helvetica', 'normal');
      pdf.text('Test on a 20,000-policy segment with results-based pricing.', margin, whyY + 70);
      pdf.text('Ready for the transformation?', margin, whyY + 85);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Contact us at hello@thoughtnudge.com', margin, whyY + 95);
      
      // Save the PDF
      pdf.save('ThoughtNudge-Insurance-Renewal-Brochure.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const handleSharePDF = () => {
    // Generate PDF and create shareable link
    handleDownloadPDF();
    alert("PDF has been downloaded. You can now share the downloaded file.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Fixed Logo in Top Right Corner - Print optimized */}
      <div className="fixed top-4 right-4 z-50 bg-white p-2 rounded-lg shadow-sm print:absolute print:top-2 print:right-2 print:shadow-none">
        <img 
          src="/lovable-uploads/f5d6eb02-99ba-4e78-bcb1-02c5b195c9b7.png" 
          alt="ThoughtNudge Logo" 
          className="h-8 w-auto print:h-6"
        />
      </div>

      <main className="flex-grow print:text-sm">
        {/* Header Section - Page 1 */}
        <section className="py-12 md:py-16 bg-white print:py-8 print:page-break-after-always print:min-h-[90vh]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-2/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-brand-pink/10 text-brand-pink text-sm font-medium px-3 py-1 rounded-full">Insurance</span>
                    <div className="flex gap-3">
                      <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button onClick={handleSharePDF} variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Share PDF
                      </Button>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black">
                    <span className="text-brand-pink">Drive Renewal. Maximize Lifetime Value. Convert the Hesitants.</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black">
                    AI RENEWAL AGENT FOR INSURANCE
                  </h2>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                  <img 
                    src="/lovable-uploads/6123fdf1-d4b8-4faf-b42b-01ff3ef8c6b1.png" 
                    alt="AI Agent Illustration" 
                    className="w-full max-w-sm h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-8 bg-white print:py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-400">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 flex items-center">
                  <Target className="h-8 w-8 text-red-500 mr-3" />
                  The Problem
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Insurers lose millions every year due to churn and missed renewals.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Despite having rich customer data, most follow-up efforts are still manual, rules-based, or outsourced — leading to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <p className="text-gray-700">Robotic, low-conversion outreach</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <p className="text-gray-700">High operational costs and inefficiencies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <p className="text-gray-700">Poor personalization and timing mismatches</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <p className="text-gray-700">No learning or improvement over time</p>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <p className="text-gray-700">Minimal visibility into what's actually working</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section - Page 2 */}
        <section className="py-8 bg-gray-50 relative print:bg-white print:py-4 print:page-break-before-always">
          {/* Logo in top right for second page */}
          <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm print:shadow-none">
            <img 
              src="/lovable-uploads/f5d6eb02-99ba-4e78-bcb1-02c5b195c9b7.png" 
              alt="ThoughtNudge Logo" 
              className="h-8 w-auto print:h-6"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 flex items-center">
                  <Zap className="h-8 w-8 text-brand-pink mr-3" />
                  The ThoughtNudge Solution
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We deploy a <strong>self-learning AI agent</strong> that autonomously nudges each policyholder toward renewal — with the right message, tone, offer, channel, and timing.
                </p>
                <p className="text-gray-700 mb-6">
                  Built on reinforcement learning and behavioral science, the agent continuously learns what works for each customer and improves performance over time.
                </p>
                
                {/* Agent Capabilities */}
                <div className="bg-brand-pink/5 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                    <span className="text-2xl mr-2">🔍</span>
                    What the Agent Does:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-pink mt-0.5" />
                      <span>Learns from behavioral and policy data</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-pink mt-0.5" />
                      <span>Optimizes what to say, when, and how — in real time</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-pink mt-0.5" />
                      <span>Continuously experiments, learns, and improves</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-pink mt-0.5" />
                      <span>Works across email, WhatsApp, SMS, and voice</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-pink mt-0.5" />
                      <span>Requires no manual workflows or campaign setup</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-pink mt-0.5" />
                      <span>Seamlessly integrates with your CRM and communication stack</span>
                    </div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="my-8">
                  <img 
                    src="/lovable-uploads/d20048b9-627e-42af-9034-d893f184e5a2.png" 
                    alt="AI Personalization Illustration" 
                    className="w-full rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-8 bg-white print:py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8 flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                📈 The Impact
              </h2>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-bold text-brand-black">Metric</div>
                    <div className="font-bold text-brand-black">Typical Result</div>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="px-6 py-4 grid grid-cols-2 gap-4">
                    <div>Policy renewal uplift</div>
                    <div className="font-bold text-green-600">+8–15%</div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-2 gap-4">
                    <div>Manual intervention</div>
                    <div className="font-bold text-blue-600">↓ up to 70%</div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-2 gap-4">
                    <div>Manual workflows</div>
                    <div className="font-bold text-red-600">Eliminated</div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-2 gap-4">
                    <div>Time to deploy</div>
                    <div className="font-bold text-brand-orange">~ 2 weeks</div>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-2 gap-4">
                    <div>Bonus</div>
                    <div className="font-bold text-brand-pink">Insights to boost CLTV across lifecycle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-8 bg-gray-50 print:bg-white print:py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">
                🏆 Why It Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-pink mb-3" />
                  <h3 className="font-bold mb-2">AI that doesn't just analyze — it acts</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-pink mb-3" />
                  <h3 className="font-bold mb-2">Outcome-first, not tool-first</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-pink mb-3" />
                  <h3 className="font-bold mb-2">Learns per customer, not just per segment</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-pink mb-3" />
                  <h3 className="font-bold mb-2">Autonomous agents {'>'}  rule-based journeys</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-pink mb-3" />
                  <h3 className="font-bold mb-2">Integrates with your stack — no rip and replace</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-brand-pink mb-3" />
                  <h3 className="font-bold mb-2">Transparent decisioning, full observability</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases & Security Section */}
        <section className="py-8 bg-white print:py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Use Cases */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-6">
                    🎯 Ideal Use Cases
                  </h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-brand-pink pl-4">
                      <h3 className="font-bold text-lg">Policy Renewals</h3>
                      <p className="text-gray-600">Term, Health, Life, Auto</p>
                    </div>
                    <div className="border-l-4 border-brand-orange pl-4">
                      <h3 className="font-bold text-lg">Upsell/Cross-sell</h3>
                      <p className="text-gray-600">Move to higher plans or bundles</p>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-6">
                    🔐 Built for Trust: Security, Compliance & Control
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">End-to-end encryption (in-transit & at-rest)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Policy-level access control with audit logs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">All AI decisions are observable and explainable</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm">SOC 2 and GDPR-aligned data practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-gradient-to-br from-brand-black to-gray-800 text-white print:bg-white print:text-black print:py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                🚀 Let's Run a Pilot
              </h2>
              <p className="text-xl mb-8">
                Test on a 20,000-policy segment with results-based pricing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>No lock-in</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Full observability</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Measurable uplift in weeks</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">🤝 AI with Accountability</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 mt-1" />
                    <span>Work directly with the founder on AI strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-1" />
                    <span>Dedicated success team for support & optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 mt-1" />
                    <span>Priority assistance for pilots and enterprise rollouts</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  Ready for the transformation?
                </p>
                <p className="text-xl font-bold">
                  We are reachable at <a href="mailto:hello@thoughtnudge.com" className="text-brand-pink underline">hello@thoughtnudge.com</a>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button variant="pink" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                  <Button onClick={handleDownloadPDF} variant="outline" size="lg" className="bg-white text-brand-black hover:bg-gray-100">
                    <Download className="h-5 w-5 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:page-break-after-always {
            page-break-after: always;
          }
          .print\\:page-break-before-always {
            page-break-before: always;
          }
          .print\\:min-h-\\[90vh\\] {
            min-height: 90vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Brochure;
