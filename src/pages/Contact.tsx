import { useState } from 'react';
import Footer from "@/components/Footer";
import { GraduationCap } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast({
        title: "Oh no! Something went wrong.",
        description: "We couldn't send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Have a question or feedback? We'd love to hear from you.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1" disabled={isLoading}/>
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1" disabled={isLoading}/>
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="mt-1" disabled={isLoading}/>
                </div>
                <div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600" disabled={isLoading}>
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                </div>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 