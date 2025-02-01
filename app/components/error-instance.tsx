export default function ErrorInstance({ error }: { error: unknown }) {
  if (error instanceof Error) {
    return (
      <div className="grid h-svh place-content-center p-4 text-center">
        <h1 className="mb-4 text-2xl font-bold">Error</h1>
        <p className="mb-2 text-red-500">{error.message}</p>
        <p className="mb-2 text-sm text-neutral-500">The stack trace is:</p>
        <pre className="max-w-[90vw] overflow-auto rounded-md bg-neutral-100 p-4 text-left text-sm">
          {error.stack}
        </pre>
      </div>
    );
  }

  return (
    <h1 className="grid h-svh place-content-center text-2xl font-bold">
      Unknown Error
    </h1>
  );
}
