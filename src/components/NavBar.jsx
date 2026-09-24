import { useState } from 'react';
import { getLogo } from '../lib/assets';

const LINKS = [
  { href: '#portada', label: 'Inicio' },
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#historia', label: 'Nuestra historia' },
  { href: '#valores', label: 'Valores' },
  { href: '#team', label: 'Nuestro equipo' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F2F2F2]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-6 sm:px-8">
        <a href="#portada" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={getLogo('light')} alt="Niobo Health" className="h-8 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-opacity hover:opacity-70"
              style={{ color: '#0D5257' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className="block h-[2px] w-6 transition-transform"
            style={{
              backgroundColor: '#0D5257',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-[2px] w-6 transition-opacity"
            style={{ backgroundColor: '#0D5257', opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 transition-transform"
            style={{
              backgroundColor: '#0D5257',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-[#F2F2F2] px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium tracking-wide"
              style={{ color: '#0D5257' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
