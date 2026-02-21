export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="h-10 w-64 animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-4 h-5 w-96 animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-3xl bg-white/80 shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
