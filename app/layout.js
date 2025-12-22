import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/Contact";
<<<<<<< HEAD
=======
import MobileCTA from "@/components/MobileCTA";
import CTAButton from "@/components/CTAButton";
>>>>>>> dda00465d548745ad5146b527bf5e6a29fa0f11d

export const metadata = {
  title: "Shilpkaar | Factory-Finished Furniture",
  description: "Premium modular furniture crafted with precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
<<<<<<< HEAD
=======
         {/* <CTAButton mode="floating" /> */}
<MobileCTA /> 
>>>>>>> dda00465d548745ad5146b527bf5e6a29fa0f11d
        <ContactPage/>
      </body>
    </html>
  );
}
