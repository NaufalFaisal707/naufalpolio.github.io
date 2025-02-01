import { type MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => [{ title: "Proyek | Naufal Faisal" }];

export default function Proyek() {
  return <h1>Halo Proyek!</h1>;
}
