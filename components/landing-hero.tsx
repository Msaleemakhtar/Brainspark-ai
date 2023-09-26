"use client";

import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link"

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-xl md:text-3xl lg:text-5xl space-y-5 font-extrabold">
        <h1>Unlocking Excellence with Cutting-Edge AI Magic!</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Conversation.",
                "Music Generation.",
                "Video Generation.",
                "Image Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
        Revolutionize  Your Productivity with AI Brainspark!
        </div>
        <div>
            <Link href = {isSignedIn? "/dashboard": "/sign-up"}> 
            <Button variant = "premium" className = "md:text-lg p-4 md:p-6 rounded-full font-semibold"> Start generating For Free</Button>
            
            </Link>
           
        </div>
        <div className = "text-zinc-400 text-xs md:text-sm font-normal">
            No credit card required
        </div>
      </div>
    </div>
  );
};
