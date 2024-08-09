"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documnet & plans Unified at one place Welcome To
        <span className="underline">BrainWave</span>
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        BrainWave is the connnected worksapce Where <br />
        Better , Faster Work happen.
      </h3>
      <Button>
        Enter Brainwave
        <ArrowRight className="h-4 w-4 ml-2 " />
      </Button>
    </div>
  );
};
