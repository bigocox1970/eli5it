
import { Card, CardContent } from "@/components/ui/card";
import { Upload, MessageCircle, Lightbulb, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Your Materials",
      description: "Drop your PDFs, Word docs, or paste text. Our AI reads everything instantly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: MessageCircle,
      title: "Ask Any Question",
      description: "Type your question naturally. No need for special commands or technical language.",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      icon: Lightbulb,
      title: "Get Perfect Explanations",
      description: "Receive answers tailored to your level - from simple analogies to detailed analysis.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform how you learn and understand complex topics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 mx-auto mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Step {step.step}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Visual Example */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See It In Action
            </h3>
            <p className="text-gray-600">
              Watch how eli5it.app adapts explanations to your level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold text-sm">5</span>
                </div>
                <span className="font-medium text-gray-700">ELI5 Level</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Photosynthesis is like plants eating sunlight! They use the sun's energy 
                to make their own food, just like how you need food to grow big and strong. 
                The green parts of plants are like tiny kitchens! 🌱☀️"
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-sm">U</span>
                </div>
                <span className="font-medium text-gray-700">University Level</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Photosynthesis involves two main stages: light-dependent reactions in the 
                thylakoids convert photon energy to ATP/NADPH, while the Calvin cycle in 
                the stroma uses these products to fix CO₂ into glucose via RuBisCO catalysis."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
