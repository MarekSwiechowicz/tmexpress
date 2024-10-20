import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "TMExpress",
  description: "TMExpress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>TMExpress</title>
        <meta name="description" content="TMExpress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
