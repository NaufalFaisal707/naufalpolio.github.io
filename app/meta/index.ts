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
  my_kisah: {
    paragraph1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio et urna efficitur tempus. Aliquam consequat volutpat sapien, vitae congue sapien pulvinar sit amet.",
    paragraph2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id odio et urna efficitur tempus. pulvinar sit amet.",
    paragraph3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna ligula, interdum sit amet metus sit non pellentesque tortor.",
  },
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

// const React = { title: "React", icon: SiReact, url: "https://react.dev/" };
// const Remix = { title: "Remix", icon: SiRemix, url: "https://remix.run/" };
// const TailwindCSS = {
//   title: "Tailwindcss",
//   icon: SiTailwindcss,
//   url: "https://tailwindcss.com/",
// };
// const ShadcnUI = {
//   title: "Shadcn/UI",
//   icon: SiShadcnui,
//   url: "https://ui.shadcn.com/",
// };
// const SocketIO = {
//   title: "Socket.io",
//   icon: SiSocketdotio,
//   url: "https://socket.io/",
// };
// const Prisma = {
//   title: "Prisma",
//   icon: SiPrisma,
//   url: "https://www.prisma.io/",
// };
// const PostgreSQL = {
//   title: "PostgreSQL",
//   icon: SiPostgresql,
//   url: "https://www.postgresql.org/",
// };

// export const live_projects = [
//   {
//     title: "Notes App",
//     icon: Notebook,
//     description: "Aplikasi catatan sederhana berbasis web",
//     tech: [React, Remix, TailwindCSS, ShadcnUI, Prisma, PostgreSQL],
//     project_url: "https://github.com/NaufalFaisal707/notes-app",
//   },
//   {
//     title: "Todos App",
//     icon: ClipboardList,
//     description: "Aplikasi todo sederhana berbasis web",
//     tech: [React, Remix, TailwindCSS, ShadcnUI, Prisma, PostgreSQL],
//     project_url: "https://github.com/NaufalFaisal707/todos-app",
//   },
// ];

// projects: [
// ],

// {
//   title: "Room App",
//   icon: Group,
//   description:
//     "Aplikasi web sederhana untuk mengirim pesan antar pengguna",
//   tech: [
//     React,
//     Remix,
//     TailwindCSS,
//     ShadcnUI,
//     SocketIO,
//     Prisma,
//     PostgreSQL,
//   ],
//   project_url: "https://github.com/NaufalFaisal707/remix-room-app",
// },
