import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]">
      <Logo />

      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
            Contact Us 
          <ArrowRight className="ml-0.5 h-4 w-4"/>
        </Button>

        <Button variant="ghost" size="sm">
          <a href="https://github.com/shreylakhtaria" target="_blank" rel="noopener noreferrer">
            Shrey Lakhtaira 
          </a>
        </Button>
        
        <Button variant="ghost" size="sm">
          <a href="https://github.com/Princelad" target = "_blank" rel="noopener noreferrer">
          Prince Lad
          </a>
  
        </Button>
      </div>
    </footer>
  );
};
