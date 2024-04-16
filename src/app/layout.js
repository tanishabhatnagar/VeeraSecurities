import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Veera Securities",
 };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.favicon} sizes="16x16" type="image/png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
