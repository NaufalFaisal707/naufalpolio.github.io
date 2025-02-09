import { Link } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getBlogs } from "~/utils/blog.server";

function getDate(posted_on: string) {
  return new Date(posted_on).toLocaleString("id-ID", {
    dateStyle: "long",
  });
}

export default function DaftarBlog({
  blogs,
}: {
  blogs: ReturnType<typeof getBlogs>;
}) {
  return blogs.map(({ title, description, tag, posted_on, url }, key) => (
    <Card key={key} className="mb-4">
      <CardHeader>
        <CardTitle>
          <Link to={url} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>{getDate(posted_on)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          {tag.map((t, i) => (
            <Badge key={i} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  ));
}
