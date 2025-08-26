import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    title: "Our Services",
    description: "Explore our end-to-end consulting.",
    icon: Building2,
    href: "/services",
  },
  {
    title: "Industries",
    description: "See solutions by industry.",
    icon: Users,
    href: "/industries",
  },
  {
    title: "Case Studies", 
    description: "Read real results & insights.",
    icon: FileText,
    href: "/case-studies",
  },
  {
    title: "Support",
    description: "Reach our support team.",
    icon: HelpCircle,
    href: "/support",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mb-4 tracking-tight">
            Popular destinations
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Not sure where to go? These are our most visited pages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;
            return (
              <div
                key={destination.title}
                className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-glow-primary/50">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                  {destination.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <Link 
                  to={destination.href}
                  className="absolute inset-0 rounded-2xl"
                  aria-label={`Visit ${destination.title}`}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/sitemap">
              View full sitemap
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;