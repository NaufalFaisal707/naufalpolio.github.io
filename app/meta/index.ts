import {
  House,
  Sparkles,
  Pickaxe,
  ArrowRight,
  Radio,
  Construction,
} from "lucide-react";
import {
  SiInstagram,
  SiGithub,
  SiThreads,
} from "@icons-pack/react-simple-icons";

export const navigation_links = [
  { link: "/", name: "Beranda", icon: House },
  { link: "/proyek", name: "Proyek", icon: Pickaxe },
  { link: "/tentang", name: "Tentang", icon: Sparkles },
];

export const bio_data = {
  whoami: "Naufal Faisal",
  github_username: "NaufalFaisal707",
  bio: "Saya membuat aplikasi web dengan metode server-side rendering (SSR) dan file-based routing menggunakan framework React dan Remix untuk membangun aplikasi web yang cepat dan SEO-friendly.",
  my_kisah: `
  Halo!, perkenalkan saya **Naufal Faisal**, saya senang membangun aplikasi berbasis web menggunakan framework [React](https://react.dev/) karna populatiras dan flexibilitas nya yang cukup baik. Saya juga menggunakan framework [Remix](https://remix.run/) yang memiliki kemampuan Server Side Rendering (SSR) dan file-based routing nya yang sangat mudah untuk di gunakan.

  Saya lahir tahun 2005 di Bandung, Indonesia. Saya pertama kali mempelajari dasar pemograman web dari beberapa video tutorial.
  `,
  my_kemajuan: [],
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

export const live_project = {
  title: "Live Project",
  tag: "live-project",
  icon: Radio,
  description: "Proyek yang bisa di coba secara langsung menggunakan browser",
  is_avaliable: true,
};

export const project_categories = [
  live_project,
  {
    title: "Segera Hadir",
    tag: "",
    icon: Construction,
    description: "Segera Hadir",
    is_avaliable: false,
  },
  {
    title: "Segera Hadir",
    tag: "",
    icon: Construction,
    description: "Segera Hadir",
    is_avaliable: false,
  },
];
