import { getTeamPhoto, initials, slugify } from '../lib/assets';

// Drop a photo at /src/assets/team/[nombre-apellido].jpg and it replaces
// the initials placeholder automatically — same size and position.
export default function TeamAvatar({ name, size = 96 }) {
  const photo = getTeamPhoto(slugify(name));
  const style = { width: size, height: size };

  if (photo) {
    return (
      <img src={photo} alt={name} style={style} className="rounded-2xl object-cover" />
    );
  }

  return (
    <div
      style={{ ...style, backgroundColor: '#0D5257' }}
      className="flex items-center justify-center rounded-2xl text-white"
    >
      <span className="font-light" style={{ fontSize: size * 0.32, letterSpacing: '0.05em' }}>
        {initials(name)}
      </span>
    </div>
  );
}
