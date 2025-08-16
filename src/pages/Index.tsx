i// Corrected Code for CoSINe+ Landing Page

// Import necessary components and hooks
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";

// This interface defines the structure of our form data
interface FormData {
  name: string;
  businessType: string;
  phone: string;
  painPoint: string;
}

// NOTE: Custom CSS is required for the specific gradient hover and background image effect.
// Place this in your global CSS file (e.g., globals.css).
/*
  .btn-primary-hover:hover {
    background-image: linear-gradient(to right, #8e9f97, #4a4a4a);
    color: white; // Make text readable on the dark gradient
  }

  .network-bg {
    position: relative; // Needed for the pseudo-element
    z-index: 1;
  }

  .network-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/path/to/your/network-image.png'); // <-- IMPORTANT: UPDATE THIS IMAGE PATH
    background-size: cover;
    background-position: center;
    opacity: 0.1; // Subtle opacity
    z-index: -1; // Places it behind the content
  }
*/

const Index = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Using a simple placeholder for the logo as discussed */}
          <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">C+</span>
          </div>
          <div className="text-xl font-bold">CoSINe+</div>
        </div>
        {/* CORRECTED: Applies the custom hover class */}
        <Button className="bg-[#909f96] text-black btn-primary-hover">Contact Us</Button>
      </header>

      {/* Hero Section */}
      {/* CORRECTED: Added the network-bg class for the background image */}
      <section className="container mx-auto px-4 py-20 text-center network-bg">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
          We Handle Systems, So You Can Handle People
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Issues Left Behind, by Determining the Right Angle.
        </p>
        <div className="flex flex-col items-center gap-4">
          {/* CORRECTED: Applies the custom hover class */}
          <Button size="lg" className="text-lg px-8 py-6 bg-[#909f96] text-black btn-primary-hover">
            Book Demo
          </Button>
          {/* CORRECTED: Updated sub-text to the full risk-reversal phrase */}
          <p className="text-sm text-muted-foreground">See it working in 15 minutes</p>
          {/* REMOVED: Deleted the unrequested "Podcast" button */}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="website-watcher">
              <AccordionTrigger className="text-left">Website Watcher</AccordionTrigger>
              {/* CORRECTED: Restored original, concise description */}
              <AccordionContent>
                Monitor forms, inquiries, and new leads automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="email-handler">
              <AccordionTrigger className="text-left">Email Handler</AccordionTrigger>
              <AccordionContent>
                Auto-respond to the emails you hate dealing with.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="review-responder">
              <AccordionTrigger className="text-left">Review Responder</AccordionTrigger>
              <AccordionContent>
                Auto-handle Google reviews, social comments, and lead follow-ups.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              {/* CORRECTED: Restored original, simple title */}
              <CardTitle>Simple, All-Inclusive Pricing</CardTitle>
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
        <p className="text-xl text-muted-foreground mb-8">Stop losing leads while you sleep.</p>
        
        <div className="max-w-lg mx-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <p className="text-xl text-green-400 mb-4">Thank you! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name", { required: "Name is required" })} className="mt-1"/>
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Input id="businessType" {...register("businessType", { required: "Business type is required" })} className="mt-1"/>
                {errors.businessType && <p className="mt-1 text-sm text-red-400">{errors.businessType.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" {...register("phone", { required: "Phone number is required" })} className="mt-1"/>
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="painPoint">Current Pain Point</Label>
                <Textarea id="painPoint" {...register("painPoint", { required: "Please describe your pain point" })} className="mt-1" rows={3}/>
                {errors.painPoint && <p className="mt-1 text-sm text-red-400">{errors.painPoint.message}</p>}
              </div>
              
              {/* CORRECTED: Applies the custom hover class */}
              <Button type="submit" size="lg" className="w-full text-lg px-8 py-6 bg-[#909f96] text-black btn-primary-hover">
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
