import Container5xl from "~/components/container-5xl";

export default function PageTentang() {
  return (
    <section className="h-svh mx-4">
      <Container5xl className="justify-center">
        <div className="flex flex-col w-fit max-w-[30rem] gap-y-2">
          <h1>Di tunggu ya, sedang maintenance nih ~</h1>
        </div>
      </Container5xl>
    </section>
  );
}

// import { useLoaderData } from "@remix-run/react";
// import { Button } from "~/components/ui/button";

// export const clientLoader = () => {
//   return [
//     { title: "HTML", src: "/html5-brands-solid.svg" },
//     { title: "CSS", src: "/css3-alt-brands-solid.svg" },
//     { title: "JavaScript", src: "/js-brands-solid.svg" },
//     { title: "TypeScript", src: "/ts-logo-128.svg" },
//     { title: "NodeJS", src: "/nodejsStackedDark.svg" },
//     { title: "ExpressJS", src: "/express-js.png" },
//     { title: "Socket.io", src: "/Socket-io.svg.png" },
//     { title: "React", src: "/react.svg" },
//     { title: "Remix", src: "/remix-letter-light.svg" },
//     { title: "Prisma", src: "/prisma.png" },
//     { title: "MongoDB", src: "/MongoDB_Logomark_ForestGreen.svg" },
//     { title: "PostgreSQL", src: "/Postgresql_elephant.svg" },
//     {
//       title: "Bootstrap",
//       src: "/bootstrap-brands-solid.svg",
//     },
//     { title: "TailwindCSS", src: "/tailwindcss-mark.svg" },
//     { title: "Shadcn/UI", src: "/shadcn-ui-seeklogo.svg" },
//   ];
// };

// export default function KeahlianComponent() {
//   const loaderData = useLoaderData<typeof clientLoader>();

//   return (
//     <section
//       id="keahlian"
//       className="flex justify-center min-h-[calc(100svh_-_var(--mobile-navbar-height))] md:min-h-[calc(100svh_-_var(--desktop-navbar-height))] mx-4"
//     >
//       <div className="max-w-screen-2xl flex md:flex-row flex-col justify-center gap-4 md:justify-evenly items-center w-full">
//         <div className="flex flex-wrap md:grid md:grid-cols-4 md:order-none order-2 gap-4 justify-center">
//           {loaderData.map(({ src, title }, key) => {
//             return (
//               <Button
//                 key={key}
//                 variant="outline"
//                 className="flex flex-col items-center gap-2 min-h-fit select-none min-w-fit"
//               >
//                 <img src={src} alt={title} className="size-10" />
//                 <span>{title}</span>
//               </Button>
//             );
//           })}
//         </div>

//         <div className="space-y-2 md:text-start text-center">
//           <h1 className="md:text-6xl text-4xl font-semibold font-serif">
//             Keahlian
//           </h1>
//           <h1 className="md:text-lg text-base text-wrap w-96">
//             Beberapa Framework dan Library yang sering saya gunakan dalam
//             membuat proyek.
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }
