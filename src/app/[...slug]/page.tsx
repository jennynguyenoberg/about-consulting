import Link from 'next/link'

export const metadata = {
  title: 'Page does not exist',
  // description: "",
}

export default function NotFoundPage() {
  return (
    <main className="py-60 px-14 h-full text-aubergine-500">
      <h1>404</h1>
      <h2>Page does not exist</h2>
      <p>
        Go back to{' '}
        <span className="underline">
          <Link href="/">Home</Link>
        </span>
      </p>
    </main>
  )
}
