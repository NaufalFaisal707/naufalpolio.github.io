import { Button } from "./ui/button";
import { Link, useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { navbarRoute } from "~/meta/navbar";

export default function NavbarLinkDesktop() {
  const location = useLocation();

  useEffect(() => {
    const navFocusIndicator = document.getElementById("nav-focus-desktop");
    const targetNav = document.getElementById(location.pathname);

    if (targetNav && navFocusIndicator) {
      const focusElement = targetNav as HTMLElement;
      const focusPosition = focusElement.getBoundingClientRect();

      // Hitung posisi relatif elemen target terhadap parent container
      const parentRect = focusElement.parentElement?.getBoundingClientRect();
      const leftPosition = focusPosition.left - (parentRect?.left || 0);

      // Perbarui gaya elemen `#nav-focus`
      navFocusIndicator.style.width = `${focusPosition.width}px`;
      navFocusIndicator.style.left = `${leftPosition}px`;
    }
  }, [location.pathname]);

  return (
    <div className="relative flex w-fit rounded-md">
      {navbarRoute.map(({ link, name, icon: Icon }, key) => (
        <Button
          id={link}
          variant="link"
          key={key}
          asChild
          className="flex min-h-fit place-items-center text-base"
        >
          <Link to={link}>
            <Icon /> {name}
          </Link>
        </Button>
      ))}

      <span
        id="nav-focus-desktop"
        className="absolute -z-10 h-full rounded-md bg-neutral-100 duration-150 ease-in-out"
      />
    </div>
  );
}
