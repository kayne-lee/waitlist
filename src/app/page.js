"use client";
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail, CheckCircle, Users, Clock, Star, Zap } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!email || !name) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <CheckCircle className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">You're on the list!</h2>
            <p className="text-blue-100 mb-6">
              Thanks for joining our waitlist, {name}! We'll notify you as soon as we launch.
            </p>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-blue-200">
                🎉 You're waitlist member <span className="font-bold text-yellow-300">#1,247</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      {/* Hero Section */}
      <section className="text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rent Anything, <span className="text-yellow-300">Anywhere</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The future of peer-to-peer rentals is almost here. From power tools to party supplies, 
            discover thousands of items available for rent in your neighborhood.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Join the Waitlist</h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/90 border-0 text-gray-900 placeholder-gray-500 h-12 rounded-lg focus:ring-2 focus:ring-yellow-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/90 border-0 text-gray-900 placeholder-gray-500 h-12 rounded-lg focus:ring-2 focus:ring-yellow-300"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleSubmit}
                    disabled={isLoading || !email || !name}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold h-12 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                        Joining...
                      </div>
                    ) : (
                      'Get Early Access'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-blue-200 text-sm">People Waiting</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Star className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-200 text-sm">Categories Ready</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm">Support Planned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What's Coming
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're building the most comprehensive rental marketplace you've ever seen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Smart Search",
                description: "AI-powered search to find exactly what you need, when you need it"
              },
              {
                title: "Verified Users",
                description: "Every user is verified for safety and trust in your community"
              },
              {
                title: "Instant Booking",
                description: "Book items instantly with our streamlined reservation system"
              },
              {
                title: "Local Focus",
                description: "Find items in your neighborhood for convenient pickup and delivery"
              },
              {
                title: "Fair Pricing",
                description: "Transparent pricing with no hidden fees or surprise charges"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support for all your rental needs"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-blue-200">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm">
            By joining our waitlist, you'll be the first to know when we launch and get exclusive early access.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;