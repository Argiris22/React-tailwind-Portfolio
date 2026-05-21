import { Mail, MapPin, Phone, Send } from "lucide-react"; // Διορθώθηκε: Προστέθηκε το Send icon
import { Button } from "../Components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "argyris.ask@gmail.com",
    href: "mailto:argyris.ask@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+30) 6984168974",
    href: "tel:+306984168974",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Larisa, Greece",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "emailjs configuration is missing. check the environment",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: "Message has sent successfully!!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("emailjs error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Τίτλος */}
        <h2 className="text-4xl font-bold tracking-tight text-center mb-16 text-white">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Αριστερά: Φόρμα */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-zinc-200 font-bold mb-2"
              >
                Name
              </label>
              <input
                required
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-600 focus:border-white outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-zinc-200 font-bold mb-2"
              >
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-600 focus:border-white outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-zinc-200 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                rows={5}
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-600 focus:border-white outline-none transition-colors resize-none"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`text-sm font-semibold p-1 ${submitStatus.type === "success" ? "text-emerald-400" : "text-rose-400"}`}
              >
                {submitStatus.message}
              </div>
            )}

            <Button
              type="submit"
              className="mt-4 px-6 py-2.5 bg-zinc-900 text-zinc-100 border border-zinc-800 text-sm font-semibold rounded hover:bg-zinc-100 hover:text-black hover:border-zinc-100 transition-all duration-200 flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Δεξιά: Στοιχεία */}
          <div className="space-y-8 pt-4 lg:pl-12">
            {ContactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-zinc-500 mt-1">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500 font-medium">
                      {info.label}
                    </span>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-base text-zinc-300 hover:text-white transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-base text-zinc-300">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
