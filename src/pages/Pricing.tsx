import Footer from "@/components/Footer";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PricingPage = () => {
  const features = [
    "Unlimited document uploads",
    "AI-powered ELI5 explanations",
    "Adjustable complexity slider",
    "Automatic flashcard generation",
    "Smart revision notes",
    "Mock exam creation",
    "24/7 access to your study aid",
  ];

  return (
    <div className="bg-gray-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                eli5it.app
              </span>
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started for free during our beta. No credit card required.
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Current Beta Plan */}
          <Card className="w-full max-w-md shadow-lg border-2 border-green-500">
            <CardHeader className="text-center bg-green-50 rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold text-green-800">Limited Free Beta</CardTitle>
              <CardDescription className="text-green-600">Available Now</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900">Free</span>
                <span className="text-gray-500"> / forever</span>
              </div>
              <p className="text-center text-gray-600 mb-8">
                Help us shape the future of learning. All features are free to use during our beta period.
              </p>
              <Button size="lg" className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                Join the Waitlist
              </Button>
            </CardContent>
          </Card>
          
          {/* Future Launch Plan */}
          <Card className="w-full max-w-md shadow-lg opacity-70">
            <CardHeader className="text-center bg-gray-100 rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold text-gray-800">Launch Plan</CardTitle>
              <CardDescription className="text-gray-500">Coming Soon</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900">£9.99</span>
                <span className="text-gray-500"> / month</span>
              </div>
              <p className="text-center text-gray-600 mb-8">
                Billed annually after a 7-day free trial. Unlock your full potential.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full" disabled>
                Get Notified
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage; 