import { House, Sparkles, Pickaxe, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useEffect, useState } from "react";

const navigation = [
  { link: "/", name: "Beranda", icons: <House /> },
  { link: "/tentang", name: "Tentang", icons: <Sparkles /> },
  { link: "/proyek", name: "Proyek", icons: <Pickaxe /> },
];

export default function NavbarLink() {
  const [targetNav, setTargetNav] = useState<EventTarget | null>(null);

  useEffect(() => {
    const navFocusIndicator = document.getElementById("nav-focus-desktop");

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
  }, [targetNav]);

  return (
    <>
      {navigation.map(({ link, name, icons }, key) => {
        return (
          <Button
            onClick={({ target }) => setTargetNav(target)}
            variant="link"
            key={key}
            asChild
            className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
          >
            <Link to={link}>
              {icons} {name}
            </Link>
          </Button>
        );
      })}

      <span
        id="nav-focus-desktop"
        className="absolute h-full bg-neutral-100 -z-10 rounded-md duration-150 ease-in-out"
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
          >
            <Mail /> Kontak
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hubungi Saya</DialogTitle>
            <DialogDescription>
              Anda dapat menghubungi saya melalui:
            </DialogDescription>
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open("mailto:naufalfaisal707@gmail.com")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open("https://t.me/naufal_faisal")}
              >
                <Send />
                Telegram
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
