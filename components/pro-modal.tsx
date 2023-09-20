"use client";
import {
    Check,
    CodeIcon,
    ImageIcon,
    MessageSquare,
    MusicIcon,
    VideoIcon,
    Zap,
  } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import{Card} from "@/components/ui/card"
import {cn} from "@/lib/utils"
import { Button } from "@/components/ui/button";

const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-pink-300",
      bgcolor: "bg-violet-500/10",
    },
  
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgcolor: "bg-pinl-700/10",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgcolor: "bg-orange-700/10",
    },
    {
      label: "Music Generation",
      icon: MusicIcon,
      color: "text-emerald-300",
      bgcolor: "bg-emerald-300/10",
    },
    {
      label: "Code Generation",
      icon: CodeIcon,
      color: "text-green-500",
      bgcolor: "bg-green-500/10",
    },
  ];


export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex  flex-col justify-center items-center gap-y-4 pb-2">
            <div className="flex items-center font-bold gap-x-2 py-1">
              Upgrade to Brainspark
              <Badge className="uppercase text-sm py-1" variant={"premium"}>Pro</Badge>
            </div>
          </DialogTitle>
        
      
      <DialogDescription className="text-center pt-2 space-y-2 font-medium text-zinc-900">
        {tools.map((tool)=>(
           <Card key = {tool.label}
           className="p-3 border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <div className = {cn("p-2 w-fitt rounded-md", tool.bgcolor )}> 
                 <tool.icon className ={cn("w-6 h-6", tool.color)}/>  
                  </div>
                  <div className = "text-sm font-semibold">{tool.label}</div>
            </div>
            <Check className = " text-primary h-5 w-5"/>

           </Card> 
        ))}
      </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button className="w-full"
        variant ="premium"
        size = "lg"
        > 
        Upgrade
        <Zap className = "w-4 h-4 fill-white"/>
        
        </Button>
      </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
