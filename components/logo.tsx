// Text-based stand-in for the HappySlim.id script logo.
// TODO: swap for the official SVG logo when available.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-script leading-none whitespace-nowrap ${className}`}>
      Happy Slim.id
    </span>
  );
}
