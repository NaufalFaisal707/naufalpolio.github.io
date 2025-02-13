import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { LucideArrowRight } from "~/components/icons/lucide-react";
import { fetchGithubRepos } from "~/utils/fetch-github.server";

export default function DaftarProyek({
  repos,
}: {
  repos: Awaited<ReturnType<typeof fetchGithubRepos>>;
}) {
  return repos.map(({ name, homepage, description, html_url }, key) => (
    <Card key={key}>
      <CardHeader>
        <h3>{name}</h3>
      </CardHeader>
      <CardContent>
        {!!description && <p className="text-neutral-600">{description}</p>}
        <div className="mt-4 flex flex-col gap-2 md:flex-row">
          <Button asChild>
            <a href={html_url} target="_blank" rel="noreferrer">
              Kunjungi Repositori
              <LucideArrowRight />
            </a>
          </Button>
          {!!homepage && (
            <Button variant="outline" asChild>
              <a href={homepage} target="_blank" rel="noreferrer">
                Coba Aplikasi
                <LucideArrowRight />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  ));
}
