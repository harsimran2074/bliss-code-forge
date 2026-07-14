import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button/Button";

// Contact form. Hook up to your backend `/api/contact` endpoint later.
export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST form data to backend
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Contact</p>
      <h1 className="mt-4 text-5xl font-semibold">Say hello.</h1>
      <p className="mt-4 text-muted-foreground">
        Questions, custom orders, or just to say hi — we read every message.
      </p>

      {sent ? (
        <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
          <p className="font-display text-2xl">Thank you.</p>
          <p className="mt-2 text-muted-foreground">We'll be in touch within two business days.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button type="submit" size="lg">Send message</Button>
        </form>
      )}
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        {...rest}
        className="w-full h-11 rounded-md border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
