import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    key: "basic",
    name: "Basic",
    price: "$99",
    features: ["Inspection", "Basic duct cleaning", "Report"],
  },
  {
    key: "standard",
    name: "Standard",
    price: "$199",
    features: ["Deep duct cleaning", "Vent cleaning", "Sanitization"],
  },
  {
    key: "premium",
    name: "Premium",
    price: "$299",
    features: ["Whole-home deep clean", "Dryer vent cleaning", "Deodorizing & sanitization"],
  },
];

const Pricing = () => {
  const selectPlan = (plan: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("plan", plan);
    const newUrl = `${window.location.pathname}?${params.toString()}#contact`;
    window.history.replaceState({}, "", newUrl);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your needs. You can customize services in the contact form.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <Card key={plan.key} className="animate-fade-up border-border bg-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-baseline justify-between">
                  <span>{plan.name}</span>
                  <span className="text-primary font-bold">{plan.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 list-disc list-inside text-muted-foreground">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button variant="cta" className="w-full" onClick={() => selectPlan(plan.name)}>
                  Select {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
