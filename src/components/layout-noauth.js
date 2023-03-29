import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col max-w-screen">
      <Navbar />
      <div className="h-[80px]"></div>
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
