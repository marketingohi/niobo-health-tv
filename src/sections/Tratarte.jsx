import VideoPlaceholder from '../components/VideoPlaceholder';

export default function Tratarte({ theme }) {
  return (
    <div className="w-full max-w-3xl px-10">
      <p
        className="text-center text-xl font-light leading-relaxed tracking-wide"
        style={{ color: theme.text }}
      >
        Tratarte en un centro Niobo Health significa nunca estar solo: profesionales en formación
        constante, la cercanía de siempre, respaldo especializado si tu caso se complica, y una
        prótesis fabricada bajo nuestro propio estándar de calidad.
      </p>
      <div className="mt-10">
        <VideoPlaceholder />
      </div>
    </div>
  );
}
