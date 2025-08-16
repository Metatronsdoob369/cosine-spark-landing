import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // Optional: AJAX submit so you can stay on-page (Netlify still receives it)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Netlify requires the "form-name" field in the payload
    data.append("form-name", form.getAttribute("name") || "contact");

    await fetch("/", {
      method: "POST",
      body: new URLSearchParams(data as any).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-[#1e1e1e]/80 p-8 text-center">
        <h3 className="text-2xl font-bold text-white">Thanks — received.</h3>
        <p className="mt-2 text-gray-300">
          We'll reach out to book your demo and calibrate the right angle for your workflow.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-[#1e1e1e]/80 p-8 shadow-[0_0_40px_-20px_rgba(154,235,163,.35)]"
    >
      {/* Netlify needs these hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
          <input
            id="name" name="name" required
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#9aeba3]"
            placeholder="Ada Lovelace"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
            <input
              id="email" name="email" type="email" required
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#9aeba3]"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-200">Phone</label>
            <input
              id="phone" name="phone" type="tel"
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#9aeba3]"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="business" className="text-sm font-medium text-gray-200">Business Type</label>
          <select
            id="business" name="business"
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#9aeba3]"
            defaultValue=""
          >
            <option value="" disabled>Select one</option>
            <option>Medical Practice</option>
            <option>Law Firm</option>
            <option>Home Services</option>
            <option>Financial Advisory</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="pain" className="text-sm font-medium text-gray-200">Current Pain Point</label>
          <textarea
            id="pain" name="pain" rows={4}
            className="w-full rounded-xl bg-black/40 px-4 py-3 text-white placeholder-gray-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#9aeba3]"
            placeholder="Where does interference show up most in your day?"
          />
        </div>

        <div className="pt-2 flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl font-semibold text-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9aeba3] focus:ring-offset-black text-lg px-8 py-4"
            style={{
              background: "linear-gradient(145deg, #909f96, #7a8a80)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(145deg, #9aeba3, #85d690)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.textShadow = "0 1px 3px rgba(0,0,0,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(145deg, #909f96, #7a8a80)";
              e.currentTarget.style.color = "black";
              e.currentTarget.style.textShadow = "0 1px 2px rgba(0,0,0,0.3)";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            Book Demo
          </button>
          <p className="text-xs text-gray-400">
            Protected by Netlify Forms • no spam
          </p>
        </div>
      </div>
    </form>
  );
}