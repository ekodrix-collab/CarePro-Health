export default function DoctorsLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="h-16 animate-pulse rounded-3xl bg-white/80 shadow-md" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-72 animate-pulse rounded-3xl bg-white/80 shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
