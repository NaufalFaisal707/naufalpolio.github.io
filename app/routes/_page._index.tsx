import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";
import Container5xl from "~/components/container-5xl";
import { berandaContent } from "~/meta/beranda";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Naufal Faisal" },
  {
    name: "description",
    content:
      "ini adalah web portfolio yang saya buat untuk membagikan pengalaman dan skill yang saya miliki sebagai fullstack developer.",
  },
];

export default function BerandaComponent() {
  return (
    <>
      <section className="mx-4 h-[calc(100svh_-_12rem)]">
        <Container5xl className="flex h-full items-center justify-start">
          <div className="flex w-fit max-w-[30rem] flex-col gap-y-2">
            <motion.span
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="text-lg md:text-2xl"
            >
              Saya
            </motion.span>

            <motion.h1
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.06 }}
              className="font-serif text-5xl font-semibold md:text-6xl"
            >
              {berandaContent.whoami}
            </motion.h1>

            <motion.p
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.08,
                type: "spring",
                bounce: 0.5,
              }}
              className="text-sm md:text-base"
            >
              {berandaContent.bio}
            </motion.p>

            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
                bounce: 0.5,
              }}
              className="my-4"
            >
              {berandaContent.direct_button.map(
                ({ title, direct, icon: Icon }, key) => (
                  <Button key={key} variant="outline" asChild>
                    <Link to={direct}>
                      {title} <Icon />
                    </Link>
                  </Button>
                ),
              )}
            </motion.div>

            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.12,
                type: "spring",
                bounce: 0.5,
              }}
              className="flex gap-4"
            >
              {berandaContent.url_button.map(
                ({ title, icon: Icon, url }, key) => (
                  <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    key={key}
                    title={title}
                  >
                    <Icon />
                  </a>
                ),
              )}
            </motion.div>
          </div>

          <div className="absolute right-0 -z-10 opacity-5 blur-sm md:opacity-100 md:blur-none lg:z-auto">
            <div className="relative size-96 select-none *:absolute *:left-[50%] *:top-[50%]">
              <motion.img
                initial={{
                  scale: 0,
                  translateX: "-100%",
                  translateY: "-140%",
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                whileHover={{ rotate: -10, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                src="/app_react.svg"
                alt="react"
                className="z-10"
              />

              <motion.img
                initial={{
                  scale: 0,
                  translateX: "40%",
                  translateY: "-20%",
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
                }}
                whileHover={{ rotate: -10, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                src="/app_remix.svg"
                alt="remix"
                className="z-10"
              />

              <motion.img
                initial={{
                  scale: 0,
                  translateX: "-140%",
                  translateY: "50%",
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                }}
                whileHover={{ rotate: -10, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                src="/app_shadcn.svg"
                alt="shadcn/ui"
                className="z-10"
              />

              <img
                src="/app_bgbakat.svg"
                alt="atlas"
                className="z-0 -translate-x-[50%] -translate-y-[50%]"
              />
            </div>
          </div>
        </Container5xl>
      </section>
    </>
  );
}
