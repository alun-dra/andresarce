// MainLayout.jsx
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark overflow-x-hidden">
      <Navbar />
      {/* 👇 main como flex column para que no colapsen los márgenes */}
      <main id="main" className="flex-1 w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
