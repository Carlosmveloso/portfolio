import { Mail, Send } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { profile } from "../data/profile";
import { navigation } from "../data/navigation";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
} from "./icons/BrandIcons";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import Eyebrow from "./ui/Eyebrow";

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: navigation.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: navigation.linkedin },
  { icon: WhatsappIcon, label: "WhatsApp", href: navigation.whatsapp },
  { icon: Mail, label: "Email", href: `mailto:${navigation.email}` },
  { icon: InstagramIcon, label: "Instagram", href: navigation.instagram },
];

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.social.email,
        }
      );

      setFeedback({ type: "success", message: t.contact.successMessage });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFeedback({ type: "error", message: t.contact.errorMessage });
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback(null), 5000);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.contact.headingPrefix}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.contact.headingHighlight}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl glass p-6 shadow-elegant"
          >
            <div className="grid gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-muted-foreground"
                >
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder={t.contact.formNamePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-muted-foreground"
                >
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder={t.contact.formEmailPlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-muted-foreground"
                >
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder={t.contact.formMessagePlaceholder}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : t.contact.submit} <Send size={16} />
              </button>
              {feedback && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    feedback.type === "success"
                      ? "bg-green-500/20 text-green-600 dark:text-green-400"
                      : "bg-red-500/20 text-red-600 dark:text-red-400"
                  }`}
                >
                  {feedback.message}
                </div>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow"
              >
                <Icon
                  size={18}
                  className="text-accent transition-colors group-hover:text-primary-foreground"
                />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
