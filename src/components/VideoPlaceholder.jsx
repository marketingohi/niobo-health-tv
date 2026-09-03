import { getVideo } from '../lib/assets';

// Drop the real file at /src/assets/video/[name].mp4 and it replaces this
// placeholder automatically — same 16:9 box, so the layout doesn't move.
export default function VideoPlaceholder({ name = 'niobo-video', size = 'normal' }) {
  const src = getVideo(name);
  const large = size === 'large';

  if (src) {
    return <video src={src} controls className="aspect-video w-full rounded-sm bg-black" />;
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-[#E4E4E4]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div
          className="flex items-center justify-center rounded-full border border-[#4B4E53]/40"
          style={{ width: large ? 112 : 64, height: large ? 112 : 64 }}
        >
          <svg
            width={large ? 32 : 18}
            height={large ? 40 : 22}
            viewBox="0 0 18 22"
            fill="#4B4E53"
          >
            <path d="M0 0L18 11L0 22V0Z" />
          </svg>
        </div>
        <span
          className="font-light uppercase tracking-[0.3em] text-[#4B4E53]"
          style={{ fontSize: large ? 14 : 10 }}
        >
          Vídeo próximamente
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-black/10 px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-[#4B4E53]/50" />
        <div className="h-[2px] flex-1 rounded-full bg-[#4B4E53]/30" />
        <span className="text-[10px] font-light tracking-wider text-[#4B4E53]/70">
          00:00 / 00:00
        </span>
      </div>
    </div>
  );
}
