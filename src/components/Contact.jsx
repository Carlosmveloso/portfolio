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
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";
import SectionHeading from "./ui/SectionHeading";

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const contactLinks = [
    { icon: WhatsappIcon, label: "WhatsApp", href: navigation.whatsapp },
    { icon: Mail, label: t.contact.emailLabel, href: `mailto:${navigation.email}` },
    { icon: LinkedinIcon, label: "LinkedIn", href: navigation.linkedin },
    { icon: GithubIcon, label: "GitHub", href: navigation.github },
    { icon: InstagramIcon, label: "Instagram", href: navigation.instagram },
  ];

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
    <section id="contato" className="secao">
      <div className="conteudo">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-xl text-lg text-texto-suave">{t.contact.subtitle}</p>
            <ul className="mt-8 max-w-md">
              {contactLinks.map(({ icon: Icon, label, href }) => {
                const isExternal = href.startsWith("http");
                return (
                  <li key={label} className="border-t-2 border-linha">
                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      aria-label={isExternal ? `${label} (${t.contact.newTab})` : undefined}
                      className="flex min-h-12 items-center gap-3 py-3 font-bold transition-colors hover:text-laranja"
                    >
                      <Icon size={20} aria-hidden="true" className="text-laranja" />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="cartao grid gap-5 self-start p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-texto-suave">
                {t.contact.formName}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.formNamePlaceholder}
                className="campo"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-texto-suave">
                {t.contact.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.formEmailPlaceholder}
                className="campo"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-texto-suave">
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.formMessagePlaceholder}
                className="campo resize-none"
              />
            </div>
            <button type="submit" disabled={loading} className="botao botao-principal justify-self-start">
              {loading ? t.contact.sending : t.contact.submit}
              <Send size={18} aria-hidden="true" />
            </button>
            <p role="status" className="min-h-6 font-bold">
              {feedback?.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
