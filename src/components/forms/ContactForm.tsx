"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      alert("Thank you. We will contact you shortly.");
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 mt-8">
      <div>
        <label className="text-sm">Name</label>
        <input
          className="w-full mt-1 rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder:text-white/40"
          placeholder="Your Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm">Email</label>
        <input
          className="w-full mt-1 rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder:text-white/40"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="text-sm">Phone</label>
        <input
          className="w-full mt-1 rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder:text-white/40"
          placeholder="+27 ..."
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="text-sm">Message</label>
        <textarea
          rows={6}
          className="w-full mt-1 rounded-md bg-white/5 border border-white/10 p-3 text-white placeholder:text-white/40"
          placeholder="Tell us about your project"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
        )}
      </div>
      <div className="md:col-span-2 flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {isSubmitSuccessful && (
          <span className="text-sm text-white/70">We received your message.</span>
        )}
      </div>
    </form>
  );
}


