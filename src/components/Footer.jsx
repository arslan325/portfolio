import { profile } from '../data/profile';
import { socialIcons } from './icons';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex items-center gap-2">
          {profile.socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-surface hover:text-primary"
                >
                  {Icon && <Icon className="h-[18px] w-[18px]" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
