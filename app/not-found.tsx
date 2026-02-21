import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[65vh] w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
        404 Error
      </p>
      <h1 className="mt-2 text-4xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-lg text-sm text-slate-600">
        The page you requested does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
