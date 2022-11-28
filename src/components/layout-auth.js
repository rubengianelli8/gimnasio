import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";

const items = [
  { label: "Inicio", link: "/dashboard" },
  { label: "Clientes", link: "/dashboard/clients" },
  { label: "Profesores", link: "/dashboard/teachers" },
  { label: "Ejercicios", link: "/dashboard/exercises" },
  { label: "Actividades", link: "/dashboard/activities" },
  { label: "Estadisticas", link: "/dashboard/statistics" },
];

const Layout = ({ children, navigationItems }) => {
  return (
    <section className="min-h-screen flex flex-col max-w-screen relative">
      <Navbar items={items} />
      <Navigation items={navigationItems} />
      {children}
    </section>
  );
};

export default Layout;
