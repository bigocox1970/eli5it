import Footer from "@/components/Footer";
import { GraduationCap } from "lucide-react";

const PrivacyPolicy = () => (
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
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-600">
        <p>
          <em>Last updated: June 22, 2024</em>
        </p>
        <p>
          Welcome to eli5it.app. We are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our application.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The
          information we may collect on the Service includes:
        </p>
        <ul>
          <li>
            <strong>Waitlist Information:</strong> We collect your email address
            when you voluntarily sign up for our waitlist.
          </li>
          <li>
            <strong>Usage Data:</strong> We may automatically collect usage data
            (such as your IP address, browser type, and operating system) when
            you access the Service.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Notify you when the service is available.</li>
          <li>Improve our website and services.</li>
          <li>Monitor and analyze usage and trends.</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy; 