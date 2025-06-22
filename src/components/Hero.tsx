
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Users, Star, Mail } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200">
            <Sparkles className="w-3 h-3 mr-1" />
            Limited Beta - Join the Waitlist!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Learn{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anything
            </span>
            <br />
            At Your Level
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload documents, create flashcards, generate mock exams, and get explanations from 
            <span className="font-semibold text-blue-600"> "Explain Like I'm 5" </span>
            to university-level complexity. The one tool you can't go through uni without.
          </p>

          {/* Email Collection Form */}
          <div className="max-w-md mx-auto mb-8">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">🎉 You're on the list! We'll notify you when we launch.</p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg">
              See How It Works
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>2,500+ students on waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Early testers love it!</span>
            </div>
            <div className="text-center sm:text-left">
              <span>Coming to 500+ universities</span>
            </div>
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="ml-4 text-white font-medium">eli5it.app - Making Learning Simple</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Understanding Quantum Physics</h3>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-700">
                    <span className="font-medium">ELI5 Level:</span> Think of atoms like tiny LEGO blocks. 
                    Quantum physics is about how these super-tiny blocks behave in really weird ways - 
                    like being in two places at once! 🧱✨
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complexity Level: ELI5 → University
                </label>
                <div className="w-full bg-gray-200 rounded-full h-3 relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full w-1/4 relative">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-md"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>ELI5</span>
                  <span>High School</span>
                  <span>University</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
            <span className="text-sm font-medium">Upload any document!</span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white p-3 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
            <span className="text-sm font-medium">Create flashcards!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
