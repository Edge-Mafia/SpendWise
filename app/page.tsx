import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-4xl">
      UI for the main home page to be made later
      <Link href="/dashboard">
        Go to dashboard
      </Link>
    </main>
  );
}
