import Button from "../../ui/Button";  
import Link from "next/link";

export default function HeroMainContent() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-[14px] md:text-[18px] font-semibold capitalize tracking-tight mb-6 text-primary">
        health community co.
      </h1>
      <h2 className="text-primary text-[62px] font-[700] capitalize mb-8 max-w-2xl mx-auto">
        connecting and empowering health community
      </h2>
      <p className="font-normal text-[18px] leading-[28.8px] tracking-normal max-w-2xl mx-auto my-3 text-center capitalize text-[#617A78]">
        It is a long established fact that a reader will be distracted the
        readable content of a page when looking.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" asChild size="lg">
          <Link href="/articles">explore community</Link>
        </Button>
      </div>
    </div>
  );
} 