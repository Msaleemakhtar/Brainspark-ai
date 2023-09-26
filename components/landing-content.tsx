"use client"

import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}from "@/components/ui/card"


const Testimonials = [
    {
      name : "Saleem Akhtar",
      avatar : "S",
      title: "Web3.0 developer",
      description:"I'm blown away by this AI application! It's an absolute game-changer in the world of technology. It has transformed how I work, making everything faster and more efficient. Truly the best I've ever used!"
    },
    {
        name : "Abdul Basit",
        avatar : "A",
        title: " React FullStack Developer",
        description:"This AI application is a revelation! It's like having a supercharged assistant at your fingertips. It has made my tasks so much easier and more enjoyable. I can't recommend it enough!"
      },
      {
        name : "Sheikh Aqib",
        avatar : "S",
        title: "AI developer",
        description:"I've tried numerous AI applications, but this one stands head and shoulders above the rest. It's intuitive, powerful, and incredibly versatile. My productivity has soared since I started using it. Kudos to the developers!"
      },
      {
        name : "Saram Ali",
        avatar : "S",
        title: "Cyber Security expert",
        description:"I'm seriously impressed with this AI application. It's a real game-changer, simplifying complex tasks and saving me hours of work. If you're looking for the best AI tool, this is it!"
      }
]



export const LandingContent = ()=>{
    return(
        <div className="px-10 mb-20"> 
        <h2 className = "text-center text-4xl text-white font-extra-bold mb-10">Testimonials</h2>
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Testimonials.map((item)=>(
                <Card key ={item.description} className = "bg-[#392894] border-none text-white">  
                <CardHeader>
                    <CardTitle className = "flex items-center gap-x-2">
                        <div>
                            <p className = "text-lg">{item.name}</p>
                            <p className = "text-sm text-zinc-400">{item.title}</p>
                        </div>
                        
                    </CardTitle>
                    <CardContent className =" pt-4 px-0">{item.description}</CardContent>

                </CardHeader>


                </Card>
            ))}
        </div>
        </div>
    )
}