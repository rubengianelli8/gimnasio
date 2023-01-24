import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const items = [
  { label: "Inicio", link: "/" },
  { label: "Actividades", link: "/#actividades" },
  { label: "Nosotros", link: "/#nosotros" },
  { label: "Horarios", link: "/#horarios" },
  { label: "Contacto", link: "/#contacto" },
];
const Layout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col max-w-screen">
      <Navbar items={items} />
      <div className="h-[80px]"></div>
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
