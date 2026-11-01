import { Languages, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { languages } from '../data/education';
import { site } from '../data/site';
import Section from './Section';

export default function About() {
  const { title, intro } = site.sections.about;

  return (
    <Section id="about" title={title} intro={intro}>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <figure className="relative mx-auto max-w-sm lg:sticky lg:top-28 lg:mx-0">
            <div aria-hidden="true" className="absolute -inset-2 -rotate-2 rounded-[2rem] bg-primary/10 sm:-inset-3 sm:-rotate-3" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-xl shadow-ink/10">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-white backdrop-blur-md">
                <span>
                  <span className="block font-display text-base font-semibold leading-tight">{profile.name}</span>
                  <span className="block text-xs opacity-85">{profile.role}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs opacity-90">
                  <MapPin size={13} />
                  Frankfurt
                </span>
              </figcaption>
            </div>
          </figure>
        </div>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/90">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Languages size={20} className="text-primary" />
                Languages
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-12 gap-y-3">
                {languages.map((l) => (
                  <li key={l.name}>
                    <p className="font-semibold">{l.name}</p>
                    <p className="text-sm text-muted">{l.level}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
