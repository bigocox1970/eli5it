import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Pricing = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Something went wrong. Please try again.');

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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started for free during our beta. No credit card required.
          </p>
        </div>

        <div className="flex justify-center my-10">
          <ToggleGroup type="single" value={billingCycle} onValueChange={(value: "monthly" | "annually") => value && setBillingCycle(value)}>
            <ToggleGroupItem value="monthly" aria-label="Toggle monthly">
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem value="annually" aria-label="Toggle annually">
              Annually (Save 20%)
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-8">
          <Card className="w-full max-w-md shadow-lg border-2 border-green-500">
            <CardHeader className="text-center bg-green-50 rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold text-green-800">Limited Free Beta</CardTitle>
              <CardDescription className="text-green-600">Available Now</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-gray-900">Free</span>
                <span className="text-gray-500"> / Limited</span>
              </div>
              <p className="text-center text-gray-600 mb-8">
                Help us shape the future of learning. All features are free to use during our beta period.
              </p>
              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 py-4 px-4 text-lg"
                    required
                    disabled={isLoading}
                  />
                  <Button type="submit" className="bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 text-lg font-semibold" disabled={isLoading}>
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <><Mail className="w-5 h-5 mr-2" />Join</>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-800 font-medium">🎉 You're on the list!</p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="w-full max-w-md shadow-lg opacity-80">
            <CardHeader className="text-center bg-gray-100 rounded-t-lg p-6">
              <CardTitle className="text-2xl font-bold text-gray-800">Launch Plan</CardTitle>
              <CardDescription className="text-gray-500">Coming Soon</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                {billingCycle === "monthly" ? (
                  <>
                    <span className="text-5xl font-bold text-gray-900">£9.99</span>
                    <span className="text-gray-500"> / month</span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-bold text-gray-900">£7.99</span>
                    <span className="text-gray-500"> / month</span>
                  </>
                )}
              </div>
              <p className="text-center text-gray-600 mb-8">
                {billingCycle === "monthly" ? "Billed monthly. Cancel anytime." : "Billed as £95.99 annually. Cancel anytime."}
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
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            * Some features use a credit system. <a href="/terms#credits" className="underline hover:text-gray-700">Learn more</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 