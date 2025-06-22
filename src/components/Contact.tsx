import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error('Something went wrong. Please try again.');
      
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
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">Have a question or feedback? We'd love to hear from you.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 bg-white/20 border-white/30 placeholder:text-gray-300" disabled={isLoading}/>
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 bg-white/20 border-white/30 placeholder:text-gray-300" disabled={isLoading}/>
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className="mt-1 bg-white/20 border-white/30 placeholder:text-gray-300" disabled={isLoading}/>
                </div>
                <div>
                    <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100" disabled={isLoading}>
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 