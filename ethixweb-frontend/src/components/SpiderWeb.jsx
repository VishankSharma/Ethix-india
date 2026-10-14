export default function SpiderWeb({ className = '', opacity = 0.15, flip = false }) {
  return (
    <img
      src="/spiderweb.svg"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none brightness-0 dark:brightness-0 dark:invert ${
        flip ? 'scale-x-[-1]' : ''
      } ${className}`}
      style={{ opacity }}
      draggable={false}
      loading="lazy"
    />
  );
}