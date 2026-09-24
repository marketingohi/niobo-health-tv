import Logo from '../components/Logo';

export default function Portada({ theme }) {
  return (
    <div className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <Logo theme={theme} />
    </div>
  );
}
