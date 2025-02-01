import { type MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => [{ title: "Tentang | Naufal Faisal" }];

export default function Tentang() {
  return <h1>Halo Tentang!</h1>;
}
