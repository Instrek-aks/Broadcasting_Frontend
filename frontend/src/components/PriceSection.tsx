import { motion } from "framer-motion";
import { Check, Radio, Tv } from "lucide-react";
import { Button } from "../components/ui/button";

const plans = [
  {
    name: "Tv+Internet",
    price: 30,
    speed: "50 Mbps",
    installation: "1,500 Tk",
    vat: "5%",
    featured: false,
    features: [
      "Internet with a 50 Mbps",
      "Connect multiple users at once",
      "WiFi router & prevention",
      "Unlimited devices users",
    ],
  },
  {
    name: "Tv+Mobile",
    price: 40,
    speed: "100 Mbps",
    installation: "1,500 Tk",
    vat: "5%",
    featured: true,
    features: [
      "Internet with a 100 Mbps",
      "Connect multiple users at once",
      "WiFi router & prevention",
      "Unlimited devices users",
    ],
  },
  {
    name: "Satellite+Phone",
    price: 60,
    speed: "200 Mbps",
    installation: "1,500 Tk",
    vat: "5%",
    featured: false,
    features: [
      "Internet with a 200 Mbps",
      "Connect multiple users at once",
      "WiFi router & prevention",
      "Unlimited devices users",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-[#f1f5f9]/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#f59e0b] font-semibold uppercase tracking-wider text-sm">
            Our Pricing Plan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mt-4">
            Our Pricing{" "}
            <span className="text-[#f59e0b] underline decoration-accent decoration-2 underline-offset-8">
              Plan
            </span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? "bg-[#3b82f6] text-[#ffffff]"
                  : "bg-card border border-border"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-[#ffffff]/70" : "text-[#64748b]"
                    }`}
                  >
                    mo/
                  </span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span
                    className={`text-2xl ${
                      plan.featured ? "text-[#ffffff]" : "text-[#ffffff]"
                    }`}
                  >
                    $
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.featured ? "secondary" : "outline"}
                className={`w-full mb-8 ${
                  plan.featured
                    ? "bg-black text-blue-500 hover:bg-[#ffffff]/90"
                    : "bg-black border-foreground/20 hover:bg-foreground/5"
                }`}
              >
                Get Started
              </Button>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 ${
                        plan.featured ? "text-black" : "text-blue-500"
                      }`}
                    />
                    <span
                      className={
                        plan.featured ? "text-[#ffffff]/90" : "text-black"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Plan Info */}
              <div
                className={`border-t pt-6 ${
                  plan.featured
                    ? "border-primary-foreground/20"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        plan.featured
                          ? "bg-[#3b82f6]-foreground/10"
                          : "bg-[#f1f5f9]"
                      }`}
                    >
                      <Radio
                        className={`w-5 h-5 ${
                          plan.featured ? "text-[#ffffff]" : "text-primary"
                        }`}
                      />
                    </div>
                    <div
                      className={`p-2 rounded-lg ${
                        plan.featured
                          ? "bg-[#3b82f6]-foreground/10"
                          : "bg-[#f1f5f9]"
                      }`}
                    >
                      <Tv
                        className={`w-5 h-5 ${
                          plan.featured ? "text-[#ffffff]" : "text-primary"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-xs ${
                        plan.featured ? "text-[#ffffff]/70" : "text-[#64748b]"
                      }`}
                    >
                      Installation Charge: {plan.installation}
                    </p>
                    <p
                      className={`font-bold text-lg ${
                        plan.featured ? "text-[#ffffff]" : "text-[#ffffff]"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <p
                      className={`text-xs ${
                        plan.featured ? "text-[#ffffff]/70" : "text-[#64748b]"
                      }`}
                    >
                      VAT Included{" "}
                      <span className="text-[#f59e0b]">{plan.vat}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
