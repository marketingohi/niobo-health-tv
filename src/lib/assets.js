// Optional-asset lookup: these globs only pick up files that actually exist,
// so the app runs cleanly with placeholders until real media is dropped in.
// Conventions:
//   photos -> /src/assets/team/[nombre-apellido].jpg
//   video  -> /src/assets/video/niobo-video.mp4
//   logo   -> /src/assets/logo/niobo-health-logo.(svg|png)
const teamModules = import.meta.glob('/src/assets/team/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const videoModules = import.meta.glob('/src/assets/video/*.{mp4,webm}', {
  eager: true,
  import: 'default',
});
const logoModules = import.meta.glob('/src/assets/logo/*.{svg,png}', {
  eager: true,
  import: 'default',
});
const photoModules = import.meta.glob('/src/assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const brandsModules = import.meta.glob('/src/assets/brands/*.{png,svg}', {
  eager: true,
  import: 'default',
});
const timelineLogoModules = import.meta.glob('/src/assets/brands/timeline/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
});

export function slugify(name) {
  return name
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function initials(name) {
  const connectors = new Set(['de', 'del', 'la', 'los', 'las', 'y']);
  const tokens = name.split(' ').filter((t) => !connectors.has(t.toLowerCase()));
  if (tokens.length === 0) return '';
  return (tokens[0][0] + tokens[tokens.length - 1][0]).toUpperCase();
}

export function getTeamPhoto(slug) {
  const entry = Object.entries(teamModules).find(([path]) => path.includes(`/${slug}.`));
  return entry ? entry[1] : null;
}

// name without extension, e.g. getVideo('niobo-video') or getVideo('niobo-video-final')
export function getVideo(name = 'niobo-video') {
  const entry = Object.entries(videoModules).find(([path]) => path.includes(`/${name}.`));
  return entry ? entry[1] : null;
}

// mode: 'light' (bg claro -> logo teal) or 'dark' (bg turquesa -> logo blanco)
export function getLogo(mode = 'light') {
  const entries = Object.entries(logoModules).filter(([path]) => !/icon/i.test(path));
  const wantsWhite = mode === 'dark';
  const match = entries.find(([path]) => /white/i.test(path) === wantsWhite);
  return match ? match[1] : entries[0]?.[1] || null;
}

// Just the isotype (icon square cropped from the real lockup), for watermarks
// and other places that need the mark without the wordmark.
export function getLogoIcon(mode = 'light') {
  const entries = Object.entries(logoModules).filter(([path]) => /icon/i.test(path));
  const wantsWhite = mode === 'dark';
  const match = entries.find(([path]) => /white/i.test(path) === wantsWhite);
  return match ? match[1] : entries[0]?.[1] || null;
}

// name without extension, e.g. getPhoto('seccion2-fondo')
export function getPhoto(name) {
  const entry = Object.entries(photoModules).find(([path]) => path.includes(`/${name}.`));
  return entry ? entry[1] : null;
}

// White-on-transparent lockup, for dark backgrounds (e.g. the Section 2 ticker)
export function getBrandsRow() {
  const entries = Object.entries(brandsModules).filter(([path]) => !/color/i.test(path));
  return entries[0]?.[1] || null;
}

// Full-color lockup, for light backgrounds
export function getBrandsColor() {
  const entries = Object.entries(brandsModules).filter(([path]) => /color/i.test(path));
  return entries[0]?.[1] || null;
}

// name without extension, e.g. getTimelineLogo('ohi')
export function getTimelineLogo(name) {
  if (!name) return null;
  const entry = Object.entries(timelineLogoModules).find(([path]) => path.includes(`/${name}.`));
  return entry ? entry[1] : null;
}
