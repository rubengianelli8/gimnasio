import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
