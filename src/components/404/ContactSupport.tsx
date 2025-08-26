import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactSupport = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleChatClick = () => {
    // Simulate opening chat
    console.log("Opening chat...");
  };

  const handleEmailClick = () => {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <section className="py-16 px-4 bg-background-elevated">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4 tracking-tight">
            Need help?
          </h2>
          <p className="text-lg text-text-secondary">
            Our team can point you to the right page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={handleChatClick}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with us
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            onClick={handleEmailClick}
            className="flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Email support
          </Button>
        </div>

        {messageSent && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-xl border border-secondary/30">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Message sent successfully!</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSupport;