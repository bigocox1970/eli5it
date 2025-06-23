import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Users, Star, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setIsSubmitted(true);
      setEmail("");
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
    <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 leading-tight font-bungee">
            The No1 AI Study app
          </h1>
          
          <div className="mb-12 mt-10">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              "The one tool you can't go through uni without."
            </p>
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="relative max-w-5xl mx-auto mb-12">
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

        <div className="text-center">
          {/* Email Collection Form */}
          <div className="max-w-lg mx-auto mb-8">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 py-4 px-4 text-lg"
                  required
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold animate-pulse"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Join Waitlist
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">🎉 You're on the list! We'll notify you when we launch.</p>
              </div>
            )}
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your personal AI study aid. Upload documents, get ELI5 explanations, and automatically
            generate flashcards and mock exams to help you learn faster.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 mt-12">
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
      </div>
    </section>
  );
};

export default Hero;
