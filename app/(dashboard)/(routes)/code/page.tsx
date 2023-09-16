"use client";

import * as z from "zod";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ChatCompletionMessage } from "openai/resources/chat";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";


import Heading from "@/components/heading";
import { formSchema } from "./constant";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAavatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";



const CodePage = () => {
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("api/code", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      {/* heading--- imported from components */}

      <Heading
        title="Code Generation"
        description="Generate code using text description"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />

      {/* form-----used from react-hook-form  */}

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full p-4 px-3 md:px-6 rounded-lg border focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none 
                        focus-visible:ring-0 
                        focus-visible:ring-transparen"
                        placeholder="Simple toggle button using react"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
                type="submit"
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {/* Message contents to be displayed */}
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started yet" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAavatar /> : <BotAvatar />}
               <ReactMarkdown
               components={{
                pre:({node, ...props})=>(
                  <div className="overflow-auto w-full 
                  my-2 p-2 bg-black/10 rounded-full">
                   
                    <pre {...props}/>

                  </div>

                ), 
                code: ({node, ...props})=>(
                  <code className="bg-black/10 rounded-lg p-1" {...props}/>
                )
               }}
               className="text-sm overflow-hidden leading-7"
               >
                {message.content || ""}
               </ReactMarkdown>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;