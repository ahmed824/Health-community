export default function HeroBackgroundDecoration() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/2 left-1/2 w-102 h-102 bg-primary/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
    </div>
  );
} 