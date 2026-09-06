import { AB7PeopleGroup } from "@/components/blocks/about/AB7PeopleGroup";
import { Hint } from "@/components/wireframe/Hint";
import { PEOPLE_GROUPS } from "@/lib/pages/about";
import { ROUTES_BY_KEY } from "@/lib/pages/routes";

const route = ROUTES_BY_KEY["about-team"];

export function OurTeamPage() {
  return (
    <>
      <div
        className="mb-2 text-xs text-neutral-500"
        dangerouslySetInnerHTML={{ __html: route.crumb }}
      />
      <h1
        className="inline-block py-2 text-4xl font-bold"
        dangerouslySetInnerHTML={{ __html: route.title }}
      />
      {PEOPLE_GROUPS.map((group) => (
        <AB7PeopleGroup
          key={group.label}
          label={group.label}
          people={group.people}
          total={group.total}
          cardNote={group.cardNote}
        />
      ))}
      <Hint>
        Three stacked labelled groups, not tabs (decision 49): the largest runs
        to ~35 records, nowhere near the hundreds that justified tabs on the
        Network (decision 19), and the groups read as one team with sub-groups
        rather than three co-equal categories. Team content is net-new — Mawred
        supplies it. The page name (&ldquo;Our Team&rdquo; recommended) is a{" "}
        <b>client call</b>.
      </Hint>
    </>
  );
}
