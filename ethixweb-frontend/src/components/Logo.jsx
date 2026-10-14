export default function Logo({ className = '', variant = 'full' }) {
  const src = variant === 'icon' ? '/logo-e.webp' : '/logo.webp';

  return (
    <img
      src={src}
      alt="Ethixweb"
      className={`w-auto brightness-0 dark:brightness-100 ${className}`}
      draggable={false}
      loading="eager"
    />
  );
}