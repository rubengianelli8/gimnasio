import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";
import Toast from "@/components/toast";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <section className="min-h-screen flex flex-col max-w-screen relative">
      <Navbar />
      <div className="h-[80px]"></div>
      <div className="mt-[20px]">{children}</div>
      <Toast />
    </section>
  );
};

export default Layout;
