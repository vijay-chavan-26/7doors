import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const reasons = [
  "Find office space",
  "List a vacant property",
  "Warehousing & industrial",
  "Residential",
  "Hospitality",
  "Retail",
  "Land & industrial",
  "Something else",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(15, "Enter a valid phone number"),
  reason: z.string().min(1, "Please select one"),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const inputClasses =
  "w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-slate-light focus:border-brass focus:outline-none transition-colors";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // NOTE: wire this up to your email/CRM endpoint of choice
    // (e.g. Formspree, a serverless function, or your backend's /contact route).
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Contact form submission", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-sm border border-line bg-paper-deep/40 px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-brass-dim" />
        <h3 className="mt-5 font-display text-xl text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">
          Thank you — someone from our team will get back to you within one business day.
        </p>
        <Button variant="ghost" className="mt-7" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-ink/80">
            Full name
          </label>
          <input id="name" type="text" className={inputClasses} placeholder="Your name" {...register("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-medium text-ink/80">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClasses}
            placeholder="+91 98765 43210"
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-medium text-ink/80">
          Email
        </label>
        <input id="email" type="email" className={inputClasses} placeholder="you@company.com" {...register("email")} />
        {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="reason" className="mb-2 block text-xs font-medium text-ink/80">
          I'm looking to
        </label>
        <select id="reason" className={cn(inputClasses, "appearance-none")} defaultValue="" {...register("reason")}>
          <option value="" disabled>
            Select one
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && <p className="mt-1.5 text-xs text-red-600">{errors.reason.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink/80">
          Tell us about your requirement
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClasses, "resize-none")}
          placeholder="City, asset type, size, and timeline help us respond faster."
          {...register("message")}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send message"}
        {!isSubmitting && <Send className="h-4 w-4" />}
      </Button>
    </form>
  );
}
