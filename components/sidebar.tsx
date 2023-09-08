"use client"

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google"
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";



const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500"

    },
    {
        label: "Conversion",
        href: "/conversion",
        icon: MessageSquare,
        color: "text-pink-300"

    },

    {
        label: "Image Generation",
        href: "/image",
        icon: ImageIcon,
        color: "text-pink-800"

    },
    {
        label: "Video Generation",
        href: "/video",
        icon: VideoIcon,
        color: "text-orange-700"

    },
    {
        label: "Music Generation",
        href: "/music",
        icon: MusicIcon,
        color: "text-emerald-300"

    },
    {
        label: "Code Generation",
        href: "/code",
        icon: CodeIcon,
        color: "text-green-500"

    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings
    },
]

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col bg-[#111827] h-full text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold",
                        montserrat.className)}>Brainspark</h1>

                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start
                    font-medium cursor-pointer hover:text-white hover:bg-white/10
                    rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                                {route.label}
                            </div>

                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Sidebar;