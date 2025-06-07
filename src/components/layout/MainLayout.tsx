
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default MainLayout;
