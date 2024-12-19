import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition"
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500","600","700","800"],
  variable: '--font-jetbrainsMono'

});


export const metadata = {
  title: "Software Developer Portfolio | Jane Doe",
  description: "Welcome to Jane Doe’s portfolio! Explore innovative projects, professional services, and a decade of experience. Let’s create something amazing together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >

        <Header />
        <StairTransition />
        <PageTransition >


        {children}


        </PageTransition>


      </body>
    </html>
  );
}
