import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
          <Card className="p-8">
            <div className="h-40 flex items-center justify-center text-muted-foreground">
              Service 1 Placeholder
            </div>
          </Card>
          <Card className="p-8">
            <div className="h-40 flex items-center justify-center text-muted-foreground">
              Service 2 Placeholder
            </div>
          </Card>
          <Card className="p-8">
            <div className="h-40 flex items-center justify-center text-muted-foreground">
              Service 3 Placeholder
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center">
            <div className="h-60 flex items-center justify-center text-muted-foreground">
              Pricing Placeholder
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by leading businesses</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
          <li>Manufacturing</li>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Technology</li>
          <li>Retail</li>
          <li>Education</li>
          <li>Government</li>
          <li>Logistics</li>
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
