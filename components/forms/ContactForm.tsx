"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const toast_error = (message: string) =>
    toast.error(message, {
      duration: 8000,
      position: "bottom-right",
      style: { padding: "16px", border: "1px solid grey" },
    });

  const toast_success = (message: string) =>
    toast.success(message, {
      duration: 8000,
      position: "bottom-right",
      style: { padding: "16px", border: "1px solid grey" },
    });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const templateParams = {
        full_name: data.fullName,
        from_email: data.email,
        message: data.message,
      };

      const result = await emailjs.send(
        "service_lu24bin",
        "template_pqcg3rf",
        templateParams,
        "fxhjjVfRrTUVFjhTH"
      );

      if (result.status === 200) {
        toast_success(
          "I've received your message and will get back to you soon."
        );
        form.reset();
      } else {
        toast_error(
          "An error occurred while sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error(error);
      toast_error(
        "An error occurred while sending your message. Please try again later."
      );
    }
  }

  return (
    <section className="py-12 md:py-32 bg-transparent ">
      <div className=" mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Get in <span className="text-violet-600">touch</span>
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-violet-50 py-6 placeholder:text-neutral-400 text-neutral-800 border-violet-500/30 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
                          placeholder="full name here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-violet-50 py-6 placeholder:text-neutral-400 text-neutral-800 border-violet-500/30 focus:border-violet-500 focus:ring focus:ring-violet-500 focus:ring-opacity-50"
                          placeholder="email here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What can I help you with?"
                          className="min-h-[150px] bg-violet-50 placeholder:text-neutral-400 text-neutral-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className=""
                >
                  {form.formState.isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </form>
            </Form>
          </div>
          <Card
            className="relative text-white bg-black overflow-hidden"
            style={{
              backgroundImage: "url('/images/trailers-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gray-900/80"></div>

            {/* Content */}
            <CardContent className="relative p-8 z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">My contact detail</h2>
                <p className="text-gray-300">
                  Need any software solution? Contact me.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Phone Number</h3>
                      <p className="text-gray-300">(+251) 967 991 617</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Email Address</h3>
                      <p className="text-gray-300">mikiyasbutu@gmail.com.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-violet-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Location</h3>
                      <p className="text-gray-300">
                        Addis Ababa,
                        <br />
                        Ethiopia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3 text-xl flex justify-start">
                  <SocialLinks />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
