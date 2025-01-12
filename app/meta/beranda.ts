import { ArrowRight } from "lucide-react";
import {
  SiInstagram,
  SiGithub,
  SiThreads,
} from "@icons-pack/react-simple-icons";

export const berandaContent = {
  whoami: "Naufal Faisal",
  bio: "Saya membuat aplikasi web dengan metode server-side rendering (SSR) dan file-based routing menggunakan framework React dan Remix untuk membangun aplikasi web yang cepat dan SEO-friendly.",
  direct_button: [
    {
      title: "Tentang saya",
      direct: "/tentang",
      icon: ArrowRight,
    },
  ],
  url_button: [
    {
      title: "Github",
      icon: SiGithub,
      url: "https://github.com/NaufalFaisal707/",
    },
    {
      title: "Instagram",
      icon: SiInstagram,
      url: "https://www.instagram.com/naufal.faisal.31/",
    },
    {
      title: "Treads",
      icon: SiThreads,
      url: "https://www.threads.net/@naufal.faisal.31/",
    },
  ],
};
