import Container5xl from "~/components/container-5xl";
import { live_project } from "~/meta";

export default function LiveProjects() {
  return (
    <>
      <section className="min-h-fit">
        <Container5xl className="p-4">
          <div className="grid h-36 place-content-center gap-2 text-center">
            <h1 className="font-serif text-4xl font-semibold md:text-5xl">
              {live_project.title}
            </h1>
            <p className="text-xs text-neutral-600 md:text-base">
              {live_project.description}
            </p>
          </div>
        </Container5xl>
      </section>

      {/* <section className="min-h-fit">
        <Container5xl className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {project_categories.map(
            ({ title, icon: Icon, description, direct_button }, key) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-md border p-4"
              >
                <span className="flex w-fit items-center gap-2 text-lg font-semibold lg:text-2xl">
                  <Icon /> {title}
                </span>
                <p className="grow text-sm lg:text-base">{description}</p>
                <Button asChild variant="outline">
                  <Link to={direct_button.direct}>
                    {direct_button.title} <direct_button.icon />
                  </Link>
                </Button>
              </div>
            ),
          )}
        </Container5xl>
      </section> */}
    </>
  );
}
