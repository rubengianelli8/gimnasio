import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "./navbar";

const itemsAdmin = [
  { label: "Inicio", link: "/dashboard" },
  { label: "Clientes", link: "/dashboard/clients" },
  { label: "Profesores", link: "/dashboard/teachers" },
  { label: "Ejercicios", link: "/dashboard/exercises" },
  { label: "Actividades", link: "/dashboard/activities" },
];

const itemsSuperAdmin = [
  { label: "Inicio", link: "/dashboard" },
  { label: "Gimnasios", link: "/dashboard/gyms" },
];

const itemsTeacher = [
  { label: "Inicio", link: "/dashboard" },
  { label: "Clientes", link: "/dashboard/clients" },
  { label: "Actividades", link: "/dashboard/activities" },
  { label: "Ejercicios", link: "/dashboard/exercises" },
];

const itemsNoAuth = [
  { label: "Inicio", link: "/" },
  { label: "Actividades", link: "/#actividades" },
  { label: "Nosotros", link: "/#nosotros" },
  { label: "Horarios", link: "/#horarios" },
  { label: "Contacto", link: "/#contacto" },
];
const index = () => {
  const { data: session, loading } = useSession();
  const [items, setItems] = useState([]);

  useEffect(() => {
    //eleccion de items para mostrar en el navbar segun el rol del usuario
    if (session) {
      if (
        session.roles.includes("admin") &&
        !session.roles.includes("superadmin")
      )
        setItems(itemsAdmin);

      if (session.roles.includes("superadmin")) setItems(itemsSuperAdmin);

      if (session.roles.includes("itemsTeacher")) setItems(itemsTeacher);
    } else {
      setItems(itemsNoAuth);
    }
  }, [session, loading]);
  return <Navbar items={items} session={session} />;
};

export default index;
