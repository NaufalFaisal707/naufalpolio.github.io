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
import { format } from "date-fns";

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
        <CardDescription>
          Posted on {format(new Date(posted_on), "MMM d, yyyy")}
        </CardDescription>
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
