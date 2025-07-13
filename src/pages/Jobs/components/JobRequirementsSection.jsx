import dynamic from "next/dynamic";
import Link from "next/link";

const Button = dynamic(() => import("../../../../components/ui/Button"), {
  loading: () => <div className="h-10 bg-gray-200 animate-pulse rounded"></div>,
});

export default function JobRequirementsSection() {
  const requirements = [
    "the first feature of the employee is written here in one line",
    "the first feature of the employee is written here in one line",
    "the first feature of the employee is written here in one line",
    "the first feature of the employee is written here in one line",
  ];

  return (
    <div className="flex-1 bg-[#EEF5F4] rounded-md h-fit p-8 flex flex-col gap-4">
      <h3 className="text-xl font-bold capitalize text-primary mb-2">
        required qualifications
      </h3>
      <ul className="space-y-2">
        {requirements.map((requirement, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-3 w-1 h-1 rounded-full bg-[#617A78] inline-block flex-shrink-0"></span>
            <span className="text-[#617A78]">{requirement}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 mb-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-[#076A60] text-white"
          asChild
        >
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            apply now
          </Link>
        </Button>
      </div>
    </div>
  );
} 