

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessage } from "openai/resources/chat";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limits";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const InstructionMessage:ChatCompletionMessage={
  role:"system",
  content:"You are a code generator. You must only in markdown code snippet. Use code comments for explanation."

}

 export async function POST(req:Request){
  try {
    const {userId} = auth();
console.log("id", userId)
    const body = await req.json();
    console.log("bodu",body)
    const {messages}= body;

    if(!userId){
      return new NextResponse("Unauthorized", {status:401})
    }

    if(!openai.apiKey){
      return new NextResponse("OpenAI ApiKey is not configured", {status:500})
    }
    if(!messages){
      return new NextResponse("Messages are required", {status:400})
    }

    const freeTrial = await checkApiLimit();

    if(!freeTrial){
     return new NextResponse("Free trial has expired",{status:403})
    }

    const response = await openai.chat.completions.create({
   
      model: "gpt-3.5-turbo",
       messages:[InstructionMessage, ...messages]
  });

  increaseApiLimit()

 return NextResponse.json(response.choices[0].message)
    
  } catch (error) {
    console.log("[CODE_ERROR]", error)
    return new NextResponse("Internal error", {status:500})
  }
 }