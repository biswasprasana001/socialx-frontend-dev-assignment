// app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <header className="bg-white text-gray-800 font-montserrat weight-400 size-12px">
          <nav className="mx-auto flex justify-end items-center h-10 px-4">
            <ul className="flex space-x-4">
              <li className="hover:text-gray-400 cursor-pointer">Return</li>
              <li className="hover:text-gray-400 cursor-pointer">Help</li>
              <li className="hover:text-gray-400 cursor-pointer">Register/Sign in</li>
            </ul>
          </nav>
          <nav className="bg-white border-t border-gray-200 w-full h-20">
            <div className="mx-auto flex items-center w-full h-28">
              <div className="flex items-center space-x-4 justify-around" style={{ width: '90%', margin: '0 auto' }}>
                <a href="/search" className="text-gray-600 hover:text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
                <div className="flex items-center space-x-4 w-full justify-around">
                  <a href="/shop" className="text-gray-600 hover:text-gray-400">SHOP</a>
                  <a href="/essentials" className="text-gray-600 hover:text-gray-400">ESSENTIALS</a>
                  <div className="flex flex-col items-center">
                    <a href="/" style={{ color: '#E2342D', fontFamily: 'Monotype Corsiva', fontStyle: 'italic', fontSize: '25px', fontWeight: 'bold' }}>Macc</a>
                    <a href="/" style={{ color: '#004197', fontFamily: 'Monotype Corsiva', fontStyle: 'italic', fontSize: '25px', fontWeight: 'bold' }}>Essentials</a>
                  </div>
                  <a href="/best-sellers" className="text-gray-600 hover:text-gray-400">BEST SELLERS</a>
                  <a href="/about" className="text-gray-600 hover:text-gray-400">ABOUT US</a>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/user" className="text-gray-600 hover:text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </a>
                  <a href="/notifications" className="text-gray-600 hover:text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </a>
                  <a href="/bag" className="text-gray-600 hover:text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-8" style={{ width: '90%', margin: '0 auto' }}>
          <div className="container mx-auto flex justify-center space-x-32">
            <div className="flex space-x-16">
              <div className="flex flex-col items-center">
                <a href="/" style={{ color: '#E2342D', fontFamily: 'Monotype Corsiva', fontStyle: 'italic', fontSize: '25px', fontWeight: 'bold' }}>Macc</a>
                <a href="/" style={{ color: '#004197', fontFamily: 'Monotype Corsiva', fontStyle: 'italic', fontSize: '25px', fontWeight: 'bold' }}>Essentials</a>
              </div>
              <ul className="flex flex-col space-y-2">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/collection" className="hover:text-gray-400">Collection</a></li>
                <li><a href="/products" className="hover:text-gray-400">Products</a></li>
              </ul>
              <ul className="flex flex-col space-y-2">
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4 w-1/5">
              <div>Be the first to know about our biggest and best sales. We'll never send more than one email a month.</div>
              <div className="border-b-2 border-gray-400 pr-4 pl-4 py-2 flex justify-center items-center" style={{ width: '75%' }}>
                <input type="email" placeholder="Enter your email" className="outline-none" />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-twitter text-2xl text-[#004197] hover:text-gray-400"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-linkedin text-2xl text-[#004197] hover:text-gray-400"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-facebook text-2xl text-[#004197] hover:text-gray-400"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
                  <i className="fab fa-instagram text-2xl text-[#004197] hover:text-gray-400"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8 text-center">All rights are reserved</div>
        </footer>
      </body>
    </html>
  );
}