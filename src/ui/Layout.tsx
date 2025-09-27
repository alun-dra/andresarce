import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
