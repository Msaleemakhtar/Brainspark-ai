"use client";



import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import Heading from "@/components/heading";
import { formSchema } from "./constant";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import{Empty} from "@/components/empty"
import{Loader} from "@/components/loader"

import { ChatCompletionMessage } from "openai/resources/chat";

const ConversationPage = () => {
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([])

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

const userMessage:ChatCompletionMessage= {
  role:"user",
  content:values.prompt
}

const newMessages = [...messages, userMessage]

const response = await axios.post("api/conversation",{
  messages:newMessages
})
setMessages((current)=>[...current, userMessage, response.data])
 form.reset()

} catch (error:any) {
  console.log(error)
  
} finally{
  router.refresh()
}
  };

  return (
    <div>
      {/* heading--- imported from components */}

      <Heading
        title="Conversation"
        description="The smartest AI model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
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
                        placeholder="Prompt is required"
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
        <div className = "space-y-4 mt-4">
          {isLoading && (
            <div className = "p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader/>
            </div>
          )}
          {messages.length===0 &&  !isLoading && (
         <Empty label = "No conversation started yet"/>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message)=>(
              <div key={message.content}>
                {message.content}
              </div>
            ))}

          </div>
          
          </div>
      </div>
    </div>
  );
};

export default ConversationPage;
