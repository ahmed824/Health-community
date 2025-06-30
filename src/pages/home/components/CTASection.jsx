import Button from "../../../../components/ui/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of members who are already improving their health and wellness.
          </p>
          <Button asChild size="lg">
            <Link href="/register">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 