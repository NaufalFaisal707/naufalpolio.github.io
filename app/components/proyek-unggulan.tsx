import { GithubRepos } from "~/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { LucideArrowRight } from "./icons/lucide-react";

export default function ProyekUnggulan({ repos }: { repos: GithubRepos[] }) {
  return repos.map(({ name, description, html_url }, key) => (
    <Card key={key}>
      <CardHeader>
        <h3>{name}</h3>
      </CardHeader>
      <CardContent>
        {!!description && <p className="text-neutral-600">{description}</p>}
        <div className="mt-4">
          <Button asChild>
            <a href={html_url} target="_blank" rel="noreferrer">
              Kunjungi Repositori
              <LucideArrowRight />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  ));
}
