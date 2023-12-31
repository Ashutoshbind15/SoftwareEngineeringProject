import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SessionProvider } from "next-auth/react";
import SessionProviderComponent from "./components/Providers/SessionProvider";
import Navbar from "./components/UI/Layout/Navbar";
import Footer from "./components/UI/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <SessionProviderComponent>
      <html lang="en">
        <body className={inter.className}>
          <nav>
            <Navbar />
          </nav>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProviderComponent>
  );
}
