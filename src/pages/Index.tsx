import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Upload, MessageCircle, Zap, Users, BookOpen, Star, ArrowRight, Play, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCtaEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaEmail) return;

    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: ctaEmail }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setCtaSubmitted(true);
      setCtaEmail("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Oh no! Something went wrong.",
        description: "We couldn't add you to the waitlist. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                eli5it.app
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Limited Beta Access
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Among the First to Experience eli5it.app
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our exclusive beta program and get early access to the future of learning
          </p>
          
          {!ctaSubmitted ? (
            <form onSubmit={handleCtaEmailSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  className="flex-1 bg-white/90 border-white/20"
                  required
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Join Now
                    </>
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-white/20 border border-white/30 rounded-lg p-6 max-w-md mx-auto mb-8">
              <p className="text-white font-medium">🎉 Welcome to the beta program! Check your email for updates.</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
