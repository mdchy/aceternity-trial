import React from "react";
import { Cover } from "@/components/ui/cover";

export default function SpeedSection() {
  return (
    <div>
      <h1 className="min-h-[40vh] text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-10 relative z-20 py-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Increse you system wide response time <br /> and <Cover>performance speed</Cover>
      </h1>
    </div>
  );
}
