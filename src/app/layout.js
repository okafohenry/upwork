import "./globals.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css";

export const metadata = {
  title: "GatherGram",
  description: "We bring all your wedding essentials into one hassle-free, secure, and budget-friendly platform designed to make your day as seamless as it is unforgettable.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
