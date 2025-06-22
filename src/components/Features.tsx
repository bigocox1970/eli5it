
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MessageCircle, Zap, BookOpen, Target, Brain, CreditCard, FileText, GraduationCap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Smart Document Upload",
      description: "Drop any PDF, Word doc, or text file. Our AI instantly understands and processes your materials.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Ask questions in plain English. Get answers that actually make sense, no jargon overload.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Complexity Slider",
      description: "From ELI5 to PhD level - adjust explanations to match your current understanding instantly.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: CreditCard,
      title: "AI Flashcards",
      description: "Automatically generate flashcards from your documents. Perfect for memorizing key concepts and terms.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Smart Revision Notes",
      description: "Create comprehensive revision notes that summarize the most important points from your materials.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Mock Exams",
      description: "Generate practice exams and quizzes based on your uploaded content to test your knowledge.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Deep Understanding",
      description: "Our AI doesn't just summarize - it explains concepts, connections, and context.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get explanations in seconds, not hours. Perfect for those late-night study sessions.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Study Companion",
      description: "Built for students, by students. Designed to be your ultimate academic sidekick.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From document analysis to flashcards, revision notes, and mock exams - 
            all powered by AI that adapts to your learning level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
