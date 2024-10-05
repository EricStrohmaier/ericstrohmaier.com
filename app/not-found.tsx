export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <main className="flex h-full min-h-[80vh] w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-text text-6xl font-bold">
          {error ? error.digest : 404}
        </h1>
        <p className="text-text mt-4 text-xl font-semibold">
          {error ? error.message : "Oops! Page not found."}
        </p>
        <p className="text-text mt-2">
          We can&apos;t seem to find the page you&apos;re looking for.
        </p>
      </div>
    </main>
  )
}
