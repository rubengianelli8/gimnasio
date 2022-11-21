import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
