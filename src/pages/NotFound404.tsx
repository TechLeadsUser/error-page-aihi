import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero404 from "@/components/404/Hero404";
import PopularDestinations from "@/components/404/PopularDestinations";
import ContactSupport from "@/components/404/ContactSupport";

const NotFound404 = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background">
      <Hero404 />
      <PopularDestinations />
      <ContactSupport />
    </main>
  );
};

export default NotFound404;