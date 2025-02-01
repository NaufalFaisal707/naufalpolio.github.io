import { type MetaFunction } from "@vercel/remix";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => [
  { title: "Naufal Faisal" },
  {
    name: "description",
    content: "ini website portfolio saya.",
  },
];

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>
    </>
  );
}
