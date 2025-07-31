import Orb from  "../../Orb/Orb"
export default function HeroBackgroundDecoration() {
  return (
    <div className="absolute inset-0 -z-10">
   
      <div className="w-full h-full top-2 relative">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  );
}
 