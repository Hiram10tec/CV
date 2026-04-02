export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-40 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="grid-overlay absolute inset-0 opacity-40" />
    </div>
  );
}
