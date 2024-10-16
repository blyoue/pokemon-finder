import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Link
 from "next/link";
export const metadata: Metadata = {
  title: 'Pokémon Finder',
  description: 'Find your favorite Pokémon!',
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-6 pt-24 sm:p-24">
            <div className="w-full justify-center flex h-10 mb-6 items-center">
              <Link href="/">
                <h2 className="font-title text-center text-2xl">Pokémon Finder</h2>
              </Link>
            </div>
              {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
