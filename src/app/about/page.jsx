import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us - Jacob Tech Info",
  description: "Learn more about the team behind Jacob Tech Info.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
            We build digital <span className="text-primary">experiences</span>.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Jacob Tech Info, our mission is to empower developers, designers, and businesses by sharing industry-leading insights on modern web development and design.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full">View Services</Button>
            <Button variant="outline" size="lg" className="rounded-full">Meet the Team</Button>
          </div>
        </div>
        <div className="flex-1 relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <Image src="/p1.jpeg" alt="About Jacob Tech" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
