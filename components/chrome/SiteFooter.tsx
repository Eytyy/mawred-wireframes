import { PageWidth } from "@/components/chrome/PageWidth";
import { Btn } from "@/components/wireframe/Btn";
import { Field } from "@/components/wireframe/Field";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/culture_resource/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/CultureResource",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black">
      <PageWidth className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm">Subscribe to our newsletter</span>
          <div className="flex flex-wrap items-center gap-2">
            <Field>email address</Field>
            <Btn>Subscribe</Btn>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="no-underline"
            >
              {social.label}
            </a>
          ))}
        </div>
        <div className="text-xs text-neutral-500">&copy; copyright line</div>
      </PageWidth>
    </footer>
  );
}
