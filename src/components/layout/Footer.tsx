import Link from "next/link";
import { Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "AI Tools Directory", href: "/tools" },
      { label: "Articles & Insights", href: "/articles" },
      { label: "All Tools", href: "/tools" },
      { label: "API Access", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cortex-400 to-accent-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                Cortex<span className="text-cortex-400">AI</span>
              </span>
            </Link>
            <p className="text-sm text-surface-500 leading-relaxed max-w-xs">
              The premier AI tools directory and article hub. Discover, compare, and master the tools shaping the future.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white text-sm font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-500 hover:text-surface-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-600">
            &copy; {new Date().getFullYear()} Cortex AI. All rights reserved.
          </p>
          <p className="text-xs text-surface-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by the Cortex team
          </p>
        </div>
      </div>
    </footer>
  );
}
