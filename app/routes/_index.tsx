import { Link } from "@remix-run/react";
import { MoveRight } from "lucide-react";
import NavbarDesktop from "~/components/navbar-desktop";
import NavbarMobile from "~/components/navbar-mobile";
import { Button } from "~/components/ui/button";

export default function Index() {
  return (
    <>
      <NavbarDesktop className="sticky top-0 backdrop-blur bg-opacity-80 bg-white" />

      <article
        id="beranda"
        className="flex justify-center min-h-[calc(100svh_-_var(--mobile-navbar-height))] md:min-h-[calc(100svh_-_var(--desktop-navbar-height))]"
      >
        <div className="max-w-screen-2xl flex md:flex-row flex-col justify-center md:justify-evenly items-center w-full">
          <div className="space-y-2 md:order-none order-2 md:text-start text-center">
            <span className="md:text-2xl text-lg">Perkenalkan saya</span>
            <h1 className="md:text-6xl text-4xl font-semibold font-serif">
              Naufal Faisal
            </h1>
            <h1 className="md:text-4xl text-2xl font-serif">
              Full Stack React Developer.
            </h1>
            <div>
              <Button asChild>
                <Link to="#proyek">
                  Proyek Saya <MoveRight />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <img
              src="/Life_Management.png"
              alt="gambar"
              className="md:w-full w-80"
            />
          </div>
        </div>
      </article>

      <article
        id="keahlian"
        className="flex items-center justify-center min-h-[calc(100svh_-_var(--mobile-navbar-height))] md:min-h-[calc(100svh_-_var(--desktop-navbar-height))]"
      >
        <h1>Di tunggu ya, sedang maintenance nih ~</h1>
      </article>

      <article
        id="proyek"
        className="flex items-center justify-center min-h-[calc(100svh_-_var(--mobile-navbar-height))] md:min-h-[calc(100svh_-_var(--desktop-navbar-height))]"
      >
        <h1>Di tunggu ya, sedang maintenance nih ~</h1>
      </article>

      <article
        id="kontak"
        className="flex items-center justify-center min-h-[calc(100svh_-_var(--mobile-navbar-height))] md:min-h-[calc(100svh_-_var(--desktop-navbar-height))]"
      >
        <h1>Di tunggu ya, sedang maintenance nih ~</h1>
      </article>

      <NavbarMobile className="sticky bottom-0 backdrop-blur bg-opacity-80 bg-white" />
    </>
  );
}
