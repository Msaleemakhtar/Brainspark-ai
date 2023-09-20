"use client";

import * as z from "zod";
import {Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";


import Heading from "@/components/heading";
import { formSchema } from "./constant";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";

const MusicPage = () => {

  const proModal = useProModal()
  const [music, setMusic] = useState<string>();

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
     

   setMusic(undefined)

      const response = await axios.post("api/music", values)
      
      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      if(error?.response?.status === 403){
        proModal.onOpen()
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      {/* heading--- imported from components */}

      <Heading
        title="Music Generation"
        description="Turn your prompt into audio music"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!music && !isLoading && (
            <Empty label="No music generated" />
          )}
         
         {music && (
          <audio controls className="w-full mt-8">
            <source src={music}/>
            
          </audio>
         )}
          
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
