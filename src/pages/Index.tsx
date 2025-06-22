import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Upload, MessageCircle, Zap, Users, BookOpen, Star, ArrowRight, Play, Mail, Menu } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <>
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
        </div>
      </section>
    </>
  );
};

export default Index;
