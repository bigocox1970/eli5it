import Footer from "@/components/Footer";
import { GraduationCap } from "lucide-react";

const TermsOfService = () => (
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
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-lg text-gray-600">
        <p>
          <em>Last updated: June 22, 2024</em>
        </p>
        <p>
          Please read these Terms of Service ("Terms", "Terms of Service")
          carefully before using the eli5it.app application (the "Service")
          operated by us.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Conditions of Use</h2>
        <p>
          We will provide their services to you, which are subject to the
          conditions stated below in this document. Every time you visit this
          website, use its services or make a purchase, you accept the
          following conditions. This is why we urge you to read them carefully.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Privacy Policy</h2>
        <p>
          Before you continue using our website we advise you to read our
          <a href="/privacy" className="text-blue-600 hover:underline"> privacy policy</a> regarding our user data collection.
          It will help you better understand our practices.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsOfService; 