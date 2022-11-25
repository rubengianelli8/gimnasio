import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const items = [
  { label: "Inicio", link: "/" },
  { label: "Nosotros", link: "/#nosotros" },
  { label: "Actividades", link: "/#actividades" },
  { label: "Instalaciones", link: "/#instalaciones" },
  { label: "Horarios", link: "/#horarios" },
];
const Layout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col max-w-screen">
      <Navbar items={items} />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
