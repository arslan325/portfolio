import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { site } from '../data/site';
import { socialIcons } from './icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { title, intro } = site.sections.contact;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-on-primary sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 id="contact-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg opacity-85">{intro}</p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn bg-on-primary text-primary hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Mail size={17} />
                  Send me an email
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn border border-on-primary/30 hover:bg-on-primary/10"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'done' : 'copy'}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-2"
                    >
                      {copied ? <Check size={17} /> : <Copy size={17} />}
                      {copied ? 'Email copied' : 'Copy email'}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </div>

            <ul className="space-y-4 text-base">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 break-all hover:underline">
                  <Mail size={18} className="shrink-0 opacity-75" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:underline">
                  <Phone size={18} className="shrink-0 opacity-75" />
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 opacity-75" />
                {profile.location}
              </li>
              <li className="flex gap-3 pt-3">
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.url}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-on-primary/30 transition hover:-translate-y-0.5 hover:bg-on-primary hover:text-primary"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </a>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
