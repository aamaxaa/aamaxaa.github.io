"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sentMessage, setSentMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await emailjs.send(
        "service_pnwy06j", // Replace with EmailJS Service ID
        "template_golo9b9", // Replace with EmailJS Template ID
        formData,
        "HlnMIKGJ0eS33y6qe" // Replace with EmailJS Public Key
      );
      console.log("EmailJS Response:", response); // Log API response

      if (response.status === 200) {
        setSentMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setSentMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error); // Log error details
      setSentMessage(
        "An error occurred. Please check the console for details."
      );
    }

    setIsSending(false);
  };

  return (
    <Card className="overflow-hidden border-fuchsia-500/30 bg-black/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <form className="space-y-6" onSubmit={sendEmail}>
          <div className="space-y-2">
            <label className="text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-fuchsia-500/30 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-fuchsia-500/30 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="Your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-fuchsia-500/30 text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 min-h-[150px]"
              placeholder="Your message"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 hover:from-fuchsia-700 hover:to-cyan-600 text-white border-none"
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>

          {sentMessage && (
            <p className="text-center text-white mt-2">{sentMessage}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
