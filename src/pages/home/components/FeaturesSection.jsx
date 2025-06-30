export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Health Community?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to make informed health decisions and connect with like-minded individuals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Content",
              description: "Access articles and guides written by healthcare professionals and wellness experts.",
              icon: "📚"
            },
            {
              title: "Community Support",
              description: "Connect with others on similar health journeys and share experiences.",
              icon: "🤝"
            },
            {
              title: "Personalized Resources",
              description: "Get recommendations tailored to your health goals and preferences.",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 