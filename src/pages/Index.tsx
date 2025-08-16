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
            <div className="text-xl font-bold tracking-tight font-monument">
              CoSINe<sup className="text-sm text-cosine-sage">+</sup>
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
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wider bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent font-monument"
          style={{ letterSpacing: "0.1em", textShadow: "0 0 30px rgba(255,255,255,0.3)" }}
        >
          We Power Systems, So You Can Power Your People
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Automation at the right angle — transforming interference into clarity, so your team can move with focus and momentum.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6">
            Book Demo
          </Button>
          <a href="#demo" className="text-lg px-8 py-6 flex items-center text-cosine-sage hover:underline">
            See It in Action
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-24">
        <ServiceCircuit autoDemo />
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
