import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="block text-white text-lg">
        <Link href="/classes">
          <a>CSS classes</a>
        </Link>
        <br />
        <Link href="/dynamic">
          <a>Dynamic classes</a>
        </Link>
        <br />
        <Link href="/inline">
          <a>Inline styles</a>
        </Link>
        <br />
        <Link href="/module">
          <a>CSS Modules</a>
        </Link>
        <br />
        <Link href="/tailwind">
          <a>Utility classes (TailwindCSS)</a>
        </Link>
        <br />
        <Link href="/styled">
          <a>CSS-in-JS Styled components</a>
        </Link>
        <br />
        <Link href="/animation">
          <a>Animation (Framer Motion)</a>
        </Link>
      </div>
    </div>
  );
}
