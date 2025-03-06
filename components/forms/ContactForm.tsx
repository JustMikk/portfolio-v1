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
        "service_4d38grk",
        "template_qko39cm",
        templateParams,
        "fPkNV9-NpgxFlm8L_"
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
    <section className="py-12 md:py-32 bg-white ">
      <div className=" mx-auto px-4 md:px-12 lg:px-16 lg:max-w-[1440px] p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Get in <span className="text-blue-600">touch</span>
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-blue-50 border-blue-500/30 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="first name here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-blue-50 border-blue-500/30 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="email here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a few words"
                          className="min-h-[150px] bg-blue-50"
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
                  className="bg-blue-500 hover:bg-blue-600"
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
                <h2 className="text-3xl font-bold mb-2">Our contact detail</h2>
                <p className="text-gray-300">
                  Need any consultations contact with us
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Phone Number</h3>
                      <p className="text-gray-300">+1 (414) 595-0096</p>
                      {/* <p className="text-gray-300">(+44)123 456 789</p> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Email Address</h3>
                      <p className="text-gray-300">
                        info@addispathtrailers.com
                      </p>
                      {/* <p className="text-gray-300">contact@addisPath.com</p> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Location</h3>
                      <p className="text-gray-300">
                        290 Jackson Place NW,
                        <br />
                        Lilburn, GA 30047
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
