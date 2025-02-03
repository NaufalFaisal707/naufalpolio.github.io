import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Tentang | Naufal Faisal" }];

export default function Tentang() {
  return <h1>Halo Tentang!</h1>;
}
