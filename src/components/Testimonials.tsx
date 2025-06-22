import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Biology Major, Stanford",
      content: "This app literally saved my GPA. Complex biochemistry concepts that used to take hours to understand now click in minutes. The ELI5 feature is pure genius!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Engineering Student, MIT",
      content: "I went from struggling with thermodynamics to actually enjoying it. Being able to adjust complexity on the fly is a game-changer for my learning style.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Emma Rodriguez",
      role: "Psychology PhD, UCLA",
      content: "Even as a grad student, I use this daily. It helps me break down complex research papers and explain concepts to undergrads. Absolutely essential.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Pre-Med, Johns Hopkins",
      content: "Organic chemistry was my nightmare until eli5it. Now I can actually visualize what's happening at the molecular level. This is the future of learning.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Wang",
      role: "Computer Science, Berkeley",
      content: "Finally, an AI that explains algorithms in a way that makes sense! From bubble sort to machine learning - it adapts to exactly what I need to know.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Ahmed Hassan",
      role: "Physics Major, Caltech",
      content: "Quantum mechanics used to feel impossible. Now I can start with the basics and work up to the math. It's like having the world's best tutor 24/7.",
      rating: 5,
      avatar: "AH"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Students Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who've transformed their learning with eli5it.app
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-300 mb-4" />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
