export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    // TODO :make center
    <main className="flex h-full w-full flex-col">
      <div className="flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-text text-6xl font-bold">
          {error ? error.digest : 404}
        </h1>
        <p className="text-text mt-4 text-xl font-semibold">
          {error ? error.message : "Oops! Page not found."}
        </p>
        <p className="text-text mt-2">
          We can't seem to find the page you're looking for.
        </p>
      </div>
    </main>
  )
}
