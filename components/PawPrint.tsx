export default function PawPrint({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <ellipse cx="7" cy="5" rx="2.5" ry="3" />
      <ellipse cx="17" cy="5" rx="2.5" ry="3" />
      <ellipse cx="3.5" cy="11" rx="2.2" ry="2.8" />
      <ellipse cx="20.5" cy="11" rx="2.2" ry="2.8" />
      <path d="M12 22c-4 0-7-3.5-7-6.5S9 10 12 10s7 2 7 5.5S16 22 12 22z" />
    </svg>
  );
}
