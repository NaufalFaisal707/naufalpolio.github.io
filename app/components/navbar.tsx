import { Button } from "./ui/button";
import { Link, useLocation } from "@remix-run/react";

import { useEffect } from "react";
import {
  LucideHouse,
  LucidePickaxe,
  LucideSparkles,
} from "./icons/lucide-react";

const navigation_links = [
  {
    link: "/",
    name: "Home",
    icon: <LucideHouse />,
  },
  { link: "/projects", name: "Projects", icon: <LucidePickaxe /> },
  {
    link: "/about",
    name: "About",
    icon: <LucideSparkles />,
  },
];

export default function Navbar({ className }: { className?: string }) {
  const location = useLocation();

  useEffect(() => {
    const updateNavFocus = () => {
      const navFocusIndicator = document.getElementById("nav-focus");
      const targetNav = document.getElementById(
        "/" + location.pathname.split("/")[1],
      );

      if (targetNav && navFocusIndicator) {
        const focusElement = targetNav as HTMLElement;
        const focusPosition = focusElement.getBoundingClientRect();

        const parentRect = focusElement.parentElement?.getBoundingClientRect();
        const leftPosition = focusPosition.left - (parentRect?.left || 0);

        navFocusIndicator.style.width = `${focusPosition.width}px`;
        navFocusIndicator.style.left = `${leftPosition}px`;
      }
    };

    updateNavFocus();
    window.addEventListener("resize", updateNavFocus);

    return () => {
      window.removeEventListener("resize", updateNavFocus);
    };
  }, [location.pathname]);

  return (
    <div className={className}>
      {navigation_links.map(({ link, name, icon }, key) => (
        <Button
          id={link}
          variant="link"
          key={key}
          asChild
          className="z-20 flex min-h-fit place-items-center text-base"
        >
          <Link to={link}>
            {icon}
            {location.pathname === link && (
              <span className="animate-fade-right animate-duration-200 animate-ease-in-out block md:hidden">
                {name}
              </span>
            )}
            <span className="hidden md:block">{name}</span>
          </Link>
        </Button>
      ))}

      <span
        id="nav-focus"
        className="absolute z-10 h-full rounded-md bg-neutral-100 duration-150 ease-in-out"
      />
    </div>
  );
}
