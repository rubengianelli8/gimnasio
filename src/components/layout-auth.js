import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";

import { AiOutlineUserAdd } from "react-icons/ai";

const items = [
  { label: "Inicio", link: "/dashboard" },
  { label: "Clientes", link: "/dashboard/clients" },
  { label: "Profesores", link: "/dashboard/teachers" },
  { label: "Ejercicios", link: "/dashboard/exercises" },
  { label: "Actividades", link: "/dashboard/activities" },
  { label: "Estadisticas", link: "/dashboard/statistics" },
];

/* const navigationClient = [
  {
    label: "Agregar cliente",
    link: "/dashboard/clients/add",
    icon: <AiOutlineUserAdd />,
  },
]; */
const Layout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col max-w-screen relative">
      <Navbar items={items} />
      {/*<Navigation items={navigationClient} />*/}
      <div className="h-[80px]"></div>
      <div className="mt-[20px]">{children}</div>
    </section>
  );
};

export default Layout;
