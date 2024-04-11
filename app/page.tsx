import Navbar from "@/components/herosection/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <section>
      <Navbar/>
      <div  className=" text-center mt-20">
          <h1 className=" text-7xl">Anyone can make a great video.<br/> That means you.</h1>
          <p className=" text-xl mt-6">Your audience prefers video. Wow them with VEED, the <br/> fastest and easiest way to make professional-quality videos.</p>
          <div className=" flex justify-center items-center gap-5 mt-6">
            {/* <Button color="">Start for free <ArrowRight/></Button> */}
            <Link href="/workspace" className="appearance-none transition group inline-grid grid-flow-col items-center justify-center gap-4 whitespace-nowrap rounded-full px-8 py-4 font-medium text-base md:text-lg group bg-blue-600 text-white hover:bg-blue-700">Start for free <ArrowRight className="transition duration-100 ease-in-out  group:hover:scale-x-100 group-hover:translate-x-1"/></Link>
            {/* <Button>try a Template <ArrowRight/> </Button> */}
            <Link href="/workspace/template" className="appearance-none transition group inline-grid grid-flow-col items-center justify-center gap-4 whitespace-nowrap rounded-full px-8 py-4 font-medium text-base md:text-lg group bg-transparent text-neutral-1000 hover:bg-neutral-100 border-2 border-neutral-1000">
              Try a Template <ArrowRight className="transition duration-100 ease-in-out  group:hover:scale-x-100 group-hover:translate-x-1"/>
            </Link>
          </div>
          <p className=" mt-5">*No credit card required</p>
      </div>
    </section>
  );
}
