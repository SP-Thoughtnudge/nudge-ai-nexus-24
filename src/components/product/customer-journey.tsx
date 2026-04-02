
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomerJourney = () => {
  const [activeTab, setActiveTab] = useState("cart-abandonment");
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="cart-abandonment">Cart Abandonment</TabsTrigger>
            <TabsTrigger value="hotel-upsell">Hotel Booking Upsell</TabsTrigger>
            <TabsTrigger value="subscription-upgrade">Subscription Upgrade</TabsTrigger>
          </TabsList>
        </div>
        
        {/* Cart Abandonment Journey */}
        <TabsContent value="cart-abandonment" className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-500">Day 1-3: This customer left items in their cart but was price-sensitive</p>
          </div>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Step 1: Website Visit */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer browses products</h4>
                <p className="text-gray-600">Adds items to cart, explores shipping options, but exits without completing purchase</p>
                <p className="text-sm text-brand-orange mt-2">Day 1, 2:15 PM</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Data Collection</h5>
                      <p className="text-sm text-gray-600">AI captures browsing pattern, product interest, price comparison behavior, and cart total</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Insight:</strong> Customer exhibits price sensitivity signals (spent time on shipping costs, compared similar items)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2: AI Decision */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">First Engagement Decision</h5>
                      <p className="text-sm text-gray-600">AI evaluates optimal response: delay email by 3 hours, emphasize free shipping offer versus immediate discount</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Price sensitivity signals suggest value-focused messaging will resonate best
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">AI personalizes recovery approach</h4>
                <p className="text-gray-600">Chooses email with free shipping offer, timed for 5:30 PM when customer is likely to be available</p>
                <p className="text-sm text-brand-pink mt-2">Day 1, 5:30 PM</p>
              </div>
            </div>
            
            {/* Step 3: Email Sent */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer receives email</h4>
                <p className="text-gray-600">Opens email, clicks through to site, browses cart again but doesn't purchase</p>
                <p className="text-sm text-brand-orange mt-2">Day 1, 6:10 PM</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Email</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Value-Focused Messaging</h5>
                      <p className="text-sm text-gray-600">Email emphasized free shipping with subtle urgency ("Limited time offer") based on price sensitivity signals</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4: Another AI Decision */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Follow-Up Decision</h5>
                      <p className="text-sm text-gray-600">After site revisit without purchase, AI determines a stronger incentive is needed with a channel switch</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> High interest (revisited site) + continued hesitation signals = needs stronger conversion trigger
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">AI adjusts strategy with SMS</h4>
                <p className="text-gray-600">Sends limited-time 10% discount via SMS next morning, with personalized product mention</p>
                <p className="text-sm text-brand-pink mt-2">Day 2, 10:15 AM</p>
              </div>
            </div>
            
            {/* Step 5: Conversion */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer completes purchase</h4>
                <p className="text-gray-600">Uses discount code from SMS to complete purchase with additional item</p>
                <p className="text-sm text-brand-orange mt-2">Day 2, 12:30 PM</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-brand-orange rounded-full h-10 w-10 absolute left-1/2 transform -translate-x-1/2">
                <span className="text-white">✓</span>
              </div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/20 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">Learning</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">AI Updates Customer Profile</h5>
                      <p className="text-sm text-gray-600">Records successful conversion path and price sensitivity threshold</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Learned:</strong> Customer responds to SMS better than email, threshold discount of 10% effective, responds to limited-time offers
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Hotel Booking Upsell Journey */}
        <TabsContent value="hotel-upsell" className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-500">Days 1-7: This customer booked a hotel room and was receptive to experience-focused upsells</p>
          </div>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Step 1: Hotel Booking */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer books standard room</h4>
                <p className="text-gray-600">Books a 3-night stay at a resort hotel for an upcoming vacation</p>
                <p className="text-sm text-brand-orange mt-2">Day 1</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Profile Analysis</h5>
                      <p className="text-sm text-gray-600">AI analyzes booking details, past trip history, and browsing patterns before booking</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Insight:</strong> Customer shows pattern of experience-seeking behavior, views of amenities pages, and luxury property interest
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2: AI Initial Upsell */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Initial Upsell Decision</h5>
                      <p className="text-sm text-gray-600">AI selects a room upgrade offer over spa package based on profile analysis</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Customer history shows higher value placed on accommodations than activities
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">Customer receives upgrade email</h4>
                <p className="text-gray-600">Email highlighting room upgrade with balcony view at a special rate sent to the customer</p>
                <p className="text-sm text-brand-pink mt-2">Day 2</p>
              </div>
            </div>
            
            {/* Step 3: Customer Response */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">No response to upgrade offer</h4>
                <p className="text-gray-600">Customer opens email but doesn't click through or take action</p>
                <p className="text-sm text-brand-orange mt-2">Day 3</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Behavior Analysis</h5>
                      <p className="text-sm text-gray-600">AI notices customer browsing destination activities after viewing but not acting on upgrade offer</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4: AI Strategy Shift */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Strategy Pivot</h5>
                      <p className="text-sm text-gray-600">AI shifts focus from accommodations to experiences based on latest browsing behavior</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Recent browsing suggests higher interest in activities than originally predicted by historical data
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">AI sends experience package</h4>
                <p className="text-gray-600">SMS with exclusive sunset cruise & dinner experience sent with limited availability messaging</p>
                <p className="text-sm text-brand-pink mt-2">Day 4</p>
              </div>
            </div>
            
            {/* Step 5: Conversion */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer books experience package</h4>
                <p className="text-gray-600">Reserves the exclusive experience plus adds a spa treatment</p>
                <p className="text-sm text-brand-orange mt-2">Day 5</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-brand-orange rounded-full h-10 w-10 absolute left-1/2 transform -translate-x-1/2">
                <span className="text-white">✓</span>
              </div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/20 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">Learning</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">AI Updates Profile</h5>
                      <p className="text-sm text-gray-600">Refines customer profile with new experience preference data and channel effectiveness</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Learned:</strong> Customer prioritizes unique experiences over accommodations, responds better to SMS than email for time-sensitive offers
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Subscription Upgrade Journey */}
        <TabsContent value="subscription-upgrade" className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-500">Days 1-21: This customer with a basic subscription needed multiple touchpoints to upgrade</p>
          </div>
          <div className="relative">
            {/* Journey Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Step 1: Initial Usage Pattern */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Heavy usage of basic plan</h4>
                <p className="text-gray-600">Customer consistently reaches usage limits on their basic subscription plan</p>
                <p className="text-sm text-brand-orange mt-2">Days 1-7</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-orange absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Usage Analysis</h5>
                      <p className="text-sm text-gray-600">AI detects recurring pattern of limit-reaching behavior and feature exploration</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Insight:</strong> Customer consistently uses 100% of allocation and attempts to access premium features
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2: Initial AI Outreach */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">First Upgrade Attempt</h5>
                      <p className="text-sm text-gray-600">AI tests feature-focused messaging highlighting the specific premium features customer has attempted to access</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Usage pattern suggests customer values specific features rather than overall capacity
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">In-app message delivered</h4>
                <p className="text-gray-600">Feature-focused upgrade message appears when customer reaches usage limit</p>
                <p className="text-sm text-brand-pink mt-2">Day 8</p>
              </div>
            </div>
            
            {/* Step 3: Limited Response */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer views but doesn't upgrade</h4>
                <p className="text-gray-600">Clicks to view upgrade options but doesn't complete upgrade</p>
                <p className="text-sm text-brand-orange mt-2">Day 8</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-gray-500">Signal</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Price Sensitivity Check</h5>
                      <p className="text-sm text-gray-600">AI notes customer spent time viewing pricing details and comparison charts</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4: Second AI Attempt */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Value-Driven Approach</h5>
                      <p className="text-sm text-gray-600">AI shifts to ROI-focused messaging with a limited-time discount offer</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Previous behavior suggests price is a barrier despite feature interest; needs incentive
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <h4 className="text-lg font-semibold text-brand-black">Email with special offer</h4>
                <p className="text-gray-600">Value-comparison email with 20% first-month discount and ROI calculator sent</p>
                <p className="text-sm text-brand-pink mt-2">Day 14</p>
              </div>
            </div>
            
            {/* Step 5: Third AI Attempt */}
            <div className="flex flex-col md:flex-row items-start md:items-center mb-16 relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Limited engagement with email</h4>
                <p className="text-gray-600">Opens but minimal interaction with ROI calculator</p>
                <p className="text-sm text-brand-orange mt-2">Day 15</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-white rounded-full h-10 w-10 border-2 border-brand-pink absolute left-1/2 transform -translate-x-1/2"></div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">AI decision</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">Peer Comparison Strategy</h5>
                      <p className="text-sm text-gray-600">AI tests social proof approach with personalized testimonial and case study</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Why this decision?</strong> Value-based approach gained attention but needs additional motivation; testing if social validation helps
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 6: Conversion */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              <div className="md:w-1/2 pr-8 md:text-right mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-brand-black">Customer upgrades subscription</h4>
                <p className="text-gray-600">Completes upgrade to premium tier using discount code</p>
                <p className="text-sm text-brand-orange mt-2">Day 21</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10 bg-brand-orange rounded-full h-10 w-10 absolute left-1/2 transform -translate-x-1/2">
                <span className="text-white">✓</span>
              </div>
              
              <div className="md:w-1/2 pl-0 md:pl-8">
                <Card>
                  <CardContent className="p-4 flex">
                    <div className="bg-brand-orange/20 w-16 h-16 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xs text-brand-orange">Learning</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-black">AI Updates Customer Profile</h5>
                      <p className="text-sm text-gray-600">Records multi-touch conversion path and response to social proof</p>
                      <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                        <strong>Learned:</strong> Customer requires multi-channel approach, responds to peer validation + pricing incentives, and has a 14-21 day consideration window
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500 italic">These are example journeys. The AI creates unique paths for each customer based on individual behavior and preferences.</p>
        <p className="text-sm text-gray-400 mt-2">Each journey shows how AI agents continuously adapt strategies based on real-time customer responses.</p>
      </div>
    </div>
  );
};

export default CustomerJourney;

