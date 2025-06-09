// src/app/contact/page.tsx
"use client"; // Required if we add client-side form handling/validation later or for some form services

import type { Metadata } from "next"; // Metadata can still be defined in client components
import { useState, FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, MessageSquarePlus, Building, Sun } from "lucide-react";

// This is a client component, so metadata should ideally be generated via generateMetadata if dynamic
// However, for static titles/descriptions, this is okay.
// export const metadata: Metadata = { // This needs to be moved to a generateMetadata function if dynamic
//   title: 'Contact FLUXECO - Get in Touch With Our Team',
//   description: 'Reach out to FLUXECO for inquiries about peer-to-peer energy trading, joining as a producer, sourcing green energy, or any other questions.',
// };
// For now, we'll keep metadata in layout.tsx or handle it via generateMetadata for client components.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    userType: "", // producer, consumer, general
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Example: Pre-fill subject from URL query parameter
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectFromQuery = urlParams.get("subject");
    if (subjectFromQuery && !formData.subject && !formData.userType) {
      // Only set if not already set
      let userType = "";
      if (subjectFromQuery.toLowerCase().includes("producer")) userType = "producer";
      else if (subjectFromQuery.toLowerCase().includes("consumer")) userType = "consumer";

      setFormData((prev) => ({ ...prev, subject: subjectFromQuery, userType }));
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // **INTEGRATION POINT FOR FORMSPREE OR YOUR BACKEND**
    // Example for Formspree:
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // For demonstration, we'll simulate a submission:
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // const result = response.ok ? { ok: true } : await response.json(); // if using actual fetch

      // if (result.ok) { // if using actual fetch
      if (true) {
        // Simulate success
        setSubmitMessage("Thank you! Your message has been sent successfully. We will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", userType: "", message: "" }); // Reset form
      } else {
      }
    } catch (error) {
      setSubmitMessage("Error: Could not submit the form. Please check your connection or try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <header className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 dark:from-sky-700 dark:via-cyan-700 dark:to-blue-800 py-16 sm:py-20 text-white">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <MessageSquarePlus className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Get in Touch</h1>
          <p className="mt-6 text-lg sm:text-xl text-sky-100 dark:text-cyan-200">We're here to answer your questions and help you get started with FLUXECO. Whether you're a potential producer, consumer, or just curious, we'd love to hear from you.</p>
        </div>
      </header>

      <main className="py-16 sm:py-20">
        <div className="container-padding max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Contact Form Section */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-rgb))] focus:border-[rgb(var(--primary-rgb))] sm:text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-rgb))] focus:border-[rgb(var(--primary-rgb))] sm:text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50"
                  />
                </div>
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    I am a...
                  </label>
                  <select id="userType" name="userType" value={formData.userType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-rgb))] focus:border-[rgb(var(--primary-rgb))] sm:text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50">
                    <option value="">Select an option...</option>
                    <option value="producer">Potential Energy Producer (e.g., solar owner)</option>
                    <option value="consumer">Potential Energy Consumer (Household or Business)</option>
                    <option value="general">General Inquiry / Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-rgb))] focus:border-[rgb(var(--primary-rgb))] sm:text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-[rgb(var(--primary-rgb))] focus:border-[rgb(var(--primary-rgb))] sm:text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50"></textarea>
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
                {submitMessage && <p className={`mt-4 text-sm text-center ${submitMessage.startsWith("Error:") ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>{submitMessage}</p>}
              </form>
            </div>

            {/* Contact Info / Other Ways to Reach Section */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-[rgb(var(--primary-rgb))]" /> Direct Email
                </h3>
                <p className="text-slate-600 dark:text-slate-300">Prefer to email us directly?</p>
                <a href="mailto:info@fluxeco.be" className="block mt-1 text-[rgb(var(--primary-rgb))] hover:underline font-medium">
                  info@fluxeco.be
                </a>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-[rgb(var(--primary-rgb))]" /> Phone Support
                </h3>
                <p className="text-slate-600 dark:text-slate-300">For urgent matters or direct conversation:</p>
                <a href="tel:+32012345678" className="block mt-1 text-[rgb(var(--primary-rgb))] hover:underline font-medium">
                  +32 (0) 123 456 78 {/* Replace with actual number */}
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">(Mon-Fri, 9am - 5pm CET)</p>
              </div>

              {/* Optional: Physical Address */}
              {/*
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[rgb(var(--primary-rgb))]" /> Our Office
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  FLUXECO Headquarters<br />
                  Energy Lane 123<br />
                  1000 Brussels, Belgium 
                </p>
              </div>
              */}

              <div className="text-center p-6 bg-green-50 dark:bg-green-800/30 rounded-lg border border-green-200 dark:border-green-700">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Looking for Quick Answers?</h3>
                <p className="text-sm text-green-600 dark:text-green-400 mb-4">Many common questions are answered on our FAQ page.</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-100 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-700/50" asChild>
                  <Link href="/faq">Visit FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
