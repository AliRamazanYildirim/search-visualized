import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConsoleSignature from "./components/ConsoleSignature";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Search Algorithm Visualizer',
  description: 'Interactive visualization of different search algorithms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConsoleSignature />
        {children}
      </body>
    </html>
  );
}