import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import ContactPage from "@/components/Contact";
import { LangProvider } from "@/components/LangContext";
import { getDictionary } from "@/lib/getDictionary";

export const metadata = {
  title: "Shilpkaar | Factory-Finished Furniture",
  description: "Premium modular furniture crafted with precision.",
};

export default async function RootLayout({ children }) {
    const dict = await getDictionary("en"); // default language

  return (
    <html lang="en">
      <body>
                <LangProvider initialLang="en" dict={dict}>

        <Navbar />
        {children}
        <MobileCTA />
        <ContactPage />
        </LangProvider>
      </body>
    </html>
  );
}
