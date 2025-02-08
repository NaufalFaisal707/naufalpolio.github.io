export type Frontmatter = {
  title: string;
  description: string;
  tag: string[];
  posted_on: string;
};

export function getBlogs() {
  const blogs = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/blog.*.mdx",
    { eager: true },
  );

  return Object.entries(blogs).map(([file_name, { frontmatter }]) => {
    const url = file_name
      .replace("../routes", "")
      .replace(".", "/")
      .replace(/\.mdx$/, "");

    return {
      url: url,
      ...frontmatter,
    };
  });
}

export function getCurentBlog(target_blog: string) {
  const blog = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/blog.*.mdx",
    {
      eager: true,
    },
  );

  return blog[`../routes/${target_blog}.mdx`]?.frontmatter;
}
