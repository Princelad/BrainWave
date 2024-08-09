import { Button } from "@/components/ui/button";
import { exportTraceState } from "next/dist/trace";
import { Heading } from "./(marketing)/_components/Heading";
import { Heroes } from "./(marketing)/_components/Heros";
import { Fotter } from "./(marketing)/_components/Fotter";

const MarketingPage =  () => {

  return (
  <div className = " min-h-full flex flex-col">
  
    <div className = " flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
      
    <Heading/>
    <Heroes/> 
    <Fotter/> 
    </div>
   
  </div>
  
  )
}

export default MarketingPage;
