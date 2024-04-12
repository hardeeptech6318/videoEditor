import { Button } from "@/components/ui/button";
import { Cloud, Forward, Redo, Rewind, Undo } from "lucide-react";
import Link from "next/link";
import React from "react";

function EditorNavbar() {
  return (
    <nav className="
     flex justify-between">
      <div className=" flex justify-between items-center flex-shrink  ">
        <div className="  items-center hidden lg:flex">
          <Button variant="ghost">Project name</Button>
          <Button variant="ghost"  className="text-wrap">
            <Cloud />
            Log in to save progress
          </Button>
        </div>

        <div className="  justify-end flex items-center border-r px-2">
         <Button size="sm" variant="ghost"><Undo /></Button>  <Button size="sm" variant="ghost"><Redo /></Button>
        </div>
      </div>

      <div className=" flex items-center justify-end">
        <div className=" mr-3 text-sm hidden lg:flex items-center gap-1">
          <span className=" hidden xl:block">Save your project for later-</span><Link className=" underline text-blue-400" href="/sign-in">Sign up</Link> or{" "}
          <Link className=" underline text-blue-400" href="/sign-up">Log in</Link>
        </div>

        <Button className=" hidden lg:block mr-3">Upgrade</Button>
        <Button>Done</Button>
      </div>
    </nav>
  );
}

export default EditorNavbar;
