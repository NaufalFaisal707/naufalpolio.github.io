type OpenGraph = {
  title: string;
  description: string;
  type: "website";
  image?: string;
};

export function createOGMeta({ title, description, type, image }: OpenGraph) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    {
      property: "og:image",
      url: image,
    },
  ];
}
