
import React from "react";
import { ChartPie } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PsychographicProfiles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Customer Profile 1 */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Customer A</CardTitle>
            <span className="text-xs bg-brand-orange/20 text-brand-orange px-2 py-1 rounded-full">High Value</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Motivation Chart Placeholder */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-medium mb-2 flex items-center">
                <ChartPie className="h-4 w-4 mr-1" /> Emotional Drivers
              </h5>
              <div className="h-32 bg-white rounded border border-gray-100 flex items-center justify-center">
                <div className="w-full px-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Value-focused</span>
                    <span className="text-xs font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-2">
                    <span className="text-xs">Quality-focused</span>
                    <span className="text-xs font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-2">
                    <span className="text-xs">Status-focused</span>
                    <span className="text-xs font-medium">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Channel Preferences */}
            <div>
              <h5 className="text-sm font-medium mb-2">Channel Performance</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Email</span>
                  <span className="font-medium">+12%</span>
                </div>
                <div className="bg-brand-orange/10 p-2 rounded flex items-center justify-between">
                  <span>SMS</span>
                  <span className="font-medium text-brand-orange">+38%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Push</span>
                  <span className="font-medium">+7%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Social</span>
                  <span className="font-medium">+5%</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <h5 className="text-sm font-medium mb-2">AI Insights</h5>
              <ul className="text-xs space-y-1">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-1">•</span>
                  <span>Responds best to limited-time offers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-1">•</span>
                  <span>Most active between 7-9pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-1">•</span>
                  <span>High sensitivity to social proof</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Customer Profile 2 */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Customer B</CardTitle>
            <span className="text-xs bg-brand-pink/20 text-brand-pink px-2 py-1 rounded-full">Frequent Buyer</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Motivation Chart Placeholder */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-medium mb-2 flex items-center">
                <ChartPie className="h-4 w-4 mr-1" /> Emotional Drivers
              </h5>
              <div className="h-32 bg-white rounded border border-gray-100 flex items-center justify-center">
                <div className="w-full px-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Value-focused</span>
                    <span className="text-xs font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-pink h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-2">
                    <span className="text-xs">Quality-focused</span>
                    <span className="text-xs font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-pink h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-2">
                    <span className="text-xs">Status-focused</span>
                    <span className="text-xs font-medium">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-pink h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Channel Preferences */}
            <div>
              <h5 className="text-sm font-medium mb-2">Channel Performance</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-brand-pink/10 p-2 rounded flex items-center justify-between">
                  <span>Email</span>
                  <span className="font-medium text-brand-pink">+42%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>SMS</span>
                  <span className="font-medium">+8%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Push</span>
                  <span className="font-medium">+15%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Social</span>
                  <span className="font-medium">+11%</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <h5 className="text-sm font-medium mb-2">AI Insights</h5>
              <ul className="text-xs space-y-1">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-1">•</span>
                  <span>Prefers premium product recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-1">•</span>
                  <span>Most active in mornings (6-8am)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-1">•</span>
                  <span>Responds to exclusivity messaging</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Customer Profile 3 */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Customer C</CardTitle>
            <span className="text-xs bg-brand-yellow/20 text-yellow-800 px-2 py-1 rounded-full">New Customer</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Motivation Chart Placeholder */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="text-sm font-medium mb-2 flex items-center">
                <ChartPie className="h-4 w-4 mr-1" /> Emotional Drivers
              </h5>
              <div className="h-32 bg-white rounded border border-gray-100 flex items-center justify-center">
                <div className="w-full px-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs">Value-focused</span>
                    <span className="text-xs font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-2">
                    <span className="text-xs">Quality-focused</span>
                    <span className="text-xs font-medium">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-2">
                    <span className="text-xs">Status-focused</span>
                    <span className="text-xs font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Channel Preferences */}
            <div>
              <h5 className="text-sm font-medium mb-2">Channel Performance</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Email</span>
                  <span className="font-medium">+5%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>SMS</span>
                  <span className="font-medium">+22%</span>
                </div>
                <div className="bg-brand-yellow/10 p-2 rounded flex items-center justify-between">
                  <span>Push</span>
                  <span className="font-medium text-yellow-800">+35%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded flex items-center justify-between">
                  <span>Social</span>
                  <span className="font-medium">+18%</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <h5 className="text-sm font-medium mb-2">AI Insights</h5>
              <ul className="text-xs space-y-1">
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-1">•</span>
                  <span>Research-oriented, compares options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-1">•</span>
                  <span>Active on weekends, evenings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-yellow mr-1">•</span>
                  <span>Responsive to educational content</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PsychographicProfiles;
