import "@/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserContextProvider } from "@/store/user.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserContextProvider>
        <body>{children}</body>
      </UserContextProvider>
    </html>
  );
}