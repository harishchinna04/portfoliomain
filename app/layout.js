import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Hari Vatte - Sr. Full-Stack .NET Developer',
  description:
    'This is the portfolio of Hari Vatte, a Sr. Full-Stack .NET Developer with experience in C#, .NET, React, and cloud technologies.',
  icons: {
    icon: '/profile.png',      // 🔥 use public/profile.png as favicon
    shortcut: '/profile.png',
    apple: '/profile.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
