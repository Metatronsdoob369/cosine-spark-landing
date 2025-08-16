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
        <div className="text-xl font-bold text-center">CoSINe+</div>
        <Button className="bg-[#9aeba3] text-black hover:bg-[#8dd999]">Book Demo</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          More Automation. No More Manual Work.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Intelligence-Driven Automation that replaces Interference with Focus
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6 bg-[#9aeba3] text-black hover:bg-[#8dd999]">
            Book Demo
          </Button>
          <p className="text-sm text-muted-foreground">See it working</p>
          <Button 
            variant="outline" 
            onClick={playPodcast}
            className="flex items-center gap-2 mt-4 text-center"
          >
            <Play size={16} />
            How people are explaining it
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Website Attendant</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="text-center">Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Email Handler</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="text-center">Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Review Responder</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="text-center">Details</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Transparent Pricing Structure. You+Problem= Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl">$500/Month Minimum. Includes all three core services.</p>
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
          <li>Home Services Contractors</li>
          <li>Financial Advisors</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to automate your workflow?</h2>
        <p className="text-xl text-muted-foreground mb-8">New Strategies to discover Existing Leads.</p>
        
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
                className="w-full text-lg px-8 py-6 bg-[#9aeba3] text-black hover:bg-[#8dd999]"
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
          Enterprise-grade automation for professional services powered by mathematical business optimization.
        </p>
        <p className="text-muted-foreground">© 2024 CoSINe+. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
