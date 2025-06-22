import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToHashElement from "@/components/ScrollToHashElement";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <ScrollToHashElement />
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout; 