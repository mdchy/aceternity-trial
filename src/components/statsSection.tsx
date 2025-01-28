// import Image from "next/image";
import React from "react";
import { Timeline, EvervaultCardDemo } from "@/components/ui/timeline";

export default function StatsSection() {
  const data = [
    {
      title: "Transactions (cash/online)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The total amount that has been transacted through our tech.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <EvervaultCardDemo />
            <EvervaultCardDemo />

          </div>
        </div>
      ),
    },
    {
      title: "Order processed",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The total number of orders processed through our tech.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <EvervaultCardDemo />
            <EvervaultCardDemo />
          </div>
        </div>
      ),
    },
    {
      title: "Operating Businesses",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Number of businesses running off of our tech.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <EvervaultCardDemo />
            <EvervaultCardDemo />
          </div>
        </div>
      ),
    },
    {
      title: "Apps and Websties Built",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            A total account of apps and websites to build that are serving our clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <EvervaultCardDemo />
            <EvervaultCardDemo />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
