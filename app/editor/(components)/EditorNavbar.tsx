import { Button } from "@/components/ui/button";
import { Cloud, Forward, Redo, Rewind, Undo } from "lucide-react";
import Link from "next/link";
import React from "react";

function EditorNavbar() {
  return (
    <nav className="
     grid grid-cols-2 gap-3">
      <div className=" flex justify-between items-center  ">
        <div className=" flex items-center">
          <Button variant="ghost">Project name</Button>
          <Button variant="ghost">
            <Cloud />
            Log in to save progress
          </Button>
        </div>

        <div className="  justify-end flex items-center border-r px-2">
         <Button size="sm" variant="ghost"><Undo /></Button>  <Button size="sm" variant="ghost"><Redo /></Button>
        </div>
      </div>

      <div className=" flex items-center">
        <div className=" mr-3 text-sm">
          <span>Save your project for later-</span><Link className=" underline text-blue-400" href="/sign-in">Sign up</Link> or{" "}
          <Link className=" underline text-blue-400" href="/sign-up">Log in</Link>
        </div>

        <Button className=" mr-3">Upgrade</Button>
        <Button>Done</Button>
      </div>
    </nav>
  );
}

export default EditorNavbar;
