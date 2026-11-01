import { skills } from '../data/skills';
import { site } from '../data/site';
import Section from './Section';

export default function Skills() {
  const { title, intro } = site.sections.skills;
  return (
    <Section id="skills" title={title} intro={intro} className="bg-surface">
      <dl className="grid gap-x-12 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-3 border-t border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="font-display text-lg font-semibold">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-bg px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
