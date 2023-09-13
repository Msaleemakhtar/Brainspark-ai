"use client"

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {useRouter} from "next/navigation"

const tools = [
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-pink-300",
    bgcolor: "bg-violet-500/10",
  },

  {
    label: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
    bgcolor: "bg-pinl-700/10",
  },
  {
    label: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
    bgcolor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    href: "/music",
    icon: MusicIcon,
    color: "text-emerald-300",
    bgcolor: "bg-emerald-300/10",
  },
  {
    label: "Code Generation",
    href: "/code",
    icon: CodeIcon,
    color: "text-green-500",
    bgcolor: "bg-green-500/10",
  },
];

export default function DashboardPage() {

  const router = useRouter();
  return (
    <div>
      {/* Main heading */}

      <div className="pb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Unleash the Transformative Force of AI
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg font-light text-center">
          Dive into a World of Limitless Possibilities with AI – Witness the
          Might of AI
        </p>
      </div>

      {/* sub-part Icons */}

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
          onClick = {() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 cursor-pointer hover:shadow-md flex items-center justify-between transition"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-lg", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className = "font-semibold">
                {tool.label}
              </div>
            </div>

          <ArrowRight className = "w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  );
}
