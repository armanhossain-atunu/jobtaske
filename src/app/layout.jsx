import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";
import AuthNextProvider from "@/Provider/AuthNextProvider";


const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Welcome to codeFiy",
  description: "A platform to share and discover code snippets.",
};

export default function RootLayout({ children }) {
  return (

    <AuthNextProvider>
      <html lang="en">
        <body
          className={`${poppins.className} antialiased`}
        >
          <header className="sticky top-0  z-50">
            <Navbar></Navbar>
          </header>
          <main className="min-h-[calc(100vh - 60px)]">
            {children}
          </main>
          <Footer></Footer>
          <ToastContainer />
        </body>
      </html>
    </AuthNextProvider>

  );
}
