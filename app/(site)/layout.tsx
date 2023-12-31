import Link from "next/link";
import "../globals.css";
import type { Metadata } from "next";
import { getPages } from "@/sanity/sanityUtils";

export const metadata: Metadata = {
  title: "Arbitrage",
  description: "Generated by NextJs + Sanity.io",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //get all the pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Sayantan
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => {
              return (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className="hover:underline"
                >
                  {page.title}
                </Link>
              );
            })}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
