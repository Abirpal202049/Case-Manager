import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Initilized the Popusp and configured it  */}
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
