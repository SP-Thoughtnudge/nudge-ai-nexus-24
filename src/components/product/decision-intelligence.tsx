
import React from "react";
import { ArrowRight, Phone, MessageSquare, Mail } from "lucide-react";

const DecisionIntelligence = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-lg font-semibold text-brand-black mb-4">The Challenge:</h4>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <Phone className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h5 className="font-medium">Customer Disconnects from Call</h5>
              <p className="text-sm text-gray-600">AI agent was on a call with customer who hung up mid-conversation</p>
            </div>
          </div>
          
          <div className="pl-12">
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm font-medium">What next?</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Call back immediately?</li>
                <li>• Wait and call later?</li>
                <li>• Switch to SMS or email?</li>
                <li>• What message would work best?</li>
                <li>• When is the optimal time?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-brand-black mb-4">The Thoughtnudge Solution:</h4>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-start">
            <div className="mt-1">
              <div className="h-8 w-8 rounded-full bg-brand-orange/20 flex items-center justify-center mb-8">
                <span className="text-sm font-medium text-brand-orange">1</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-brand-orange/20 flex items-center justify-center mb-8">
                <span className="text-sm font-medium text-brand-orange">2</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <span className="text-sm font-medium text-brand-orange">3</span>
              </div>
            </div>
            
            <div className="ml-4 space-y-6">
              <div>
                <h5 className="font-medium">Data Analysis</h5>
                <p className="text-sm text-gray-600">AI analyzes customer history, behavior patterns, and current context</p>
              </div>
              
              <div>
                <h5 className="font-medium">Decision Making</h5>
                <p className="text-sm text-gray-600">Based on psychographic profile, AI determines customer prefers written communication for complex topics</p>
              </div>
              
              <div className="bg-brand-orange/10 p-3 rounded">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-orange mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Action Taken</h5>
                    <p className="text-sm text-gray-600">Send follow-up email with educational content addressing likely concerns, wait 24 hours before calling again</p>
                    <div className="mt-2 p-2 bg-white rounded-sm text-xs">
                      <strong>Why this decision:</strong> Customer data shows 68% higher response rate to educational emails vs immediate callbacks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionIntelligence;
