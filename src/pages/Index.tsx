import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold">CoSINe+</div>
        <Button>Book Demo</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          More Automation. No More Manual Work.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          Intelligence-Driven Automation that replaces Interference with Focus
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Book Demo
        </Button>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Website Attendant</CardTitle>
              <CardDescription>
                Monitor Structure, Efficiency, Engage Visitors or Reply to Inquiries.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Email Handler</CardTitle>
              <CardDescription>
                Auto-respond to the emails you hate dealing with.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Review Responder</CardTitle>
              <CardDescription>
                Auto-handle Google reviews, social comments, and lead follow-ups.
              </CardDescription>
            </CardHeader>
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
        <h2 className="text-4xl font-bold mb-8">Ready to automate your workflow?</h2>
        <Button size="lg" className="text-lg px-8 py-6">
          Book Demo
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-border">
        <p className="text-muted-foreground">© 2024 CoSINe+. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
