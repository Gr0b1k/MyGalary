import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyGalary",
  description: "Три Тьекова",
};

export default function RootLayout({ children }) {
  return (
    <html className=" scroll-smooth" lang="ru">
      <body className={inter.className + ' w-full bg-blue-50 text-stone-800 text-base '}>
        <div className="__next">
          <Header />
            <main id="main" className="w-full">
              <div id="main-content" className="w-full">
                {children}
              </div>
            </main>
        </div>
      </body>
    </html>
  );
}