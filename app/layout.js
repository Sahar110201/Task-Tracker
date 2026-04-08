import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Task Tracker",
  description: "Manage your daily tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-brand">
            task<span>.</span>track
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}