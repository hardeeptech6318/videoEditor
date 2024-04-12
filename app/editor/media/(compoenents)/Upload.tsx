import UploadComponent from "@/components/UploadComponent";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Box,
  Link2,
  Paperclip,
  Text,
  UploadCloud,
  Video,
  Voicemail,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const options = [
  {
    id: 1,
    title: "Record",
    icon: <Video />,
    size: "large",
    flex: "flex-col",
  },
  {
    id: 2,
    title: "Text To Speech",
    icon: <Text />,
    size: "large",
    flex: "flex-col",
  },
  {
    id: 1,
    title: "Voice Clone",
    icon: <Voicemail />,
    size: "large",
    flex: "flex-col",
  },
  {
    id: 1,
    title: "Brand Kit",
    icon: <Paperclip />,
    size: "large",
    flex: "flex-col",
  },
  {
    id: 1,
    title: "Dropbox",
    icon: <Box />,
    size: "small",
    flex: "flex-row",
  },
  {
    id: 1,
    title: "Link",
    icon: <Link2 />,
    size: "small",
    flex: "flex-row",
  },
];

function Upload() {
  return (
    <div className=" grid grid-cols-12 gap-3 w-full">
      <UploadComponent />

      {options.map((e) => (
        <Link
          href="/"
          key={e.title}
          className={cn(
            " border flex justify-center items-center col-span-6 p-4 gap-1 rounded-xl hover:border-black",
            e.flex
          )}
        >
          <div>{e.icon}</div>
          <div className=" text-center text-sm">{e.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default Upload;
