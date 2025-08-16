import { ServiceCircuit } from "@/components/ServiceCircuit";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Play } from "lucide-react";

interface FormData {
  name: string;
  businessType: string;
  phone: string;
  painPoint: string;
}

const Index = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const playPodcast = () => {
    // Placeholder for podcast functionality
    console.log('Playing podcast snippet...');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="text-xl font-bold tracking-tight font-monument flex items-center">
              <span className="text-white">CoSINe</span>
              <sup 
                className="text-lg font-bold ml-1"
                style={{
                  background: "linear-gradient(145deg, #de7b3b, #c46428, #de7b3b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 8px rgba(222,123,59,0.6)",
                  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))"
                }}
              >
                +
              </sup>
            </div>
            <span className="text-[12px] tracking-[0.2em] uppercase text-cosine-sage">
              Systems with a Sine of Life
            </span>
          </div>
        </div>
        <Button className="bg-[#909f96] text-black hover:bg-[#8e9f97] btn-primary-hover">Contact Us</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wider font-monument"
          style={{ 
            letterSpacing: "0.1em",
            background: "linear-gradient(135deg, #c0c0c0 0%, #ffffff 25%, #e8e8e8 50%, #ffffff 75%, #a8a8a8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(255,255,255,0.2)",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          }}
        >
          We Power Systems, So You Can Power Your People
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Automation at the right angle — transforming interference into clarity, so your team can move with focus and momentum.
        </p>
        <div className="flex justify-center mb-8">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-cosine-sage text-black font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              background: "linear-gradient(145deg, #909f96, #7a8a80)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(145deg, #9aeba3, #85d690)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.textShadow = "0 1px 3px rgba(0,0,0,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(145deg, #909f96, #7a8a80)";
              e.currentTarget.style.color = "black";
              e.currentTarget.style.textShadow = "0 1px 2px rgba(0,0,0,0.3)";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            Book Demo
          </Button>
        </div>
        
        {/* AI Powered Section */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-white font-monument text-lg">Custom Built Intelligent</span>
          {/* AI Sparkle Icon */}
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cosine-mint">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              <path d="M19 5L19.5 7L21 7.5L19.5 8L19 10L18.5 8L17 7.5L18.5 7L19 5Z" fill="currentColor"/>
              <path d="M5 15L5.5 17L7 17.5L5.5 18L5 20L4.5 18L3 17.5L4.5 17L5 15Z" fill="currentColor"/>
            </svg>
            {/* Sparkle animation */}
            <div className="absolute inset-0 animate-pulse">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white opacity-30">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <span className="text-white font-monument text-lg">Powered Nodes</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-24">
        <ServiceCircuit />
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle style={{fontFamily: 'JetBrains Mono, monospace'}}>Transparent Structure. Exponential Value.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl">From $500/month — includes all three core services.</p>
              <p className="text-sm text-muted-foreground mt-2">Add-ons scale with your workflow, not against it.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by High-Performance Professionals</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
          <li>Medical Practices</li>
          <li>Law Firms</li>
          <li>Home Service Contractors</li>
          <li>Financial Advisors</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'JetBrains Mono, monospace'}}>Ready to Automate with Precision?</h2>
        <p className="text-xl text-muted-foreground mb-8">New strategies. Existing leads rediscovered.<br />Let's find the right angle for your workflow.</p>
        
        <div className="max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <p className="text-xl text-green-400 mb-4">Thank you! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Input
                  id="businessType"
                  {...register("businessType", { required: "Business type is required" })}
                  className="mt-1"
                />
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-400">{errors.businessType.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", { required: "Phone number is required" })}
                  className="mt-1"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="painPoint">Current Pain Point</Label>
                <Textarea
                  id="painPoint"
                  {...register("painPoint", { required: "Please describe your pain point" })}
                  className="mt-1"
                  rows={3}
                />
                {errors.painPoint && (
                  <p className="mt-1 text-sm text-red-400">{errors.painPoint.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg px-8 py-6 bg-[#909f96] text-black hover:bg-[#8e9f97] btn-primary-hover"
              >
                Book Demo
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">
          Precision automation for high-performance professionals. Systems engineered for clarity, not complexity.
        </p>
        <p className="text-muted-foreground">© 2024 CoSINe+. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
