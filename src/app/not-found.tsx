import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-7xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-cortex-400 to-accent-400 bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-cortex-500 to-accent-500 rounded-xl hover:from-cortex-400 hover:to-accent-400 transition-all shadow-lg shadow-cortex-500/20"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
