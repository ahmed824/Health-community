import Link from "next/link";
import Button from "../../ui/Button";

export default function FeaturesText() {
  return (
    <div className="text-center md:text-left mt-16 md:mt-0">
      <h2 className="text-[18px] capitalize text-primary font-bold mb-[30px] ">
        health community co.
      </h2>
      <h3 className="text-[52px] font-bold text-primary max-w-2xl md:mx-0 capitalize leading-[1.2] mb-4">connecting and empowering health community </h3>
      <p className="text-lg text-[#617A78] max-w-2xl mx-auto capitalize md:mx-0">
        It is a long established fact that a reader will be distracted the
        readable content of a page when looking.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-start">
        <Button variant="outline" asChild size="lg">
          <Link href="/articles">explore community</Link>
        </Button>
      </div>
    </div>
  );
}
