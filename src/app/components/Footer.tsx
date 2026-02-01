import { Github, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Project Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="size-5 text-blue-500" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Algo.Observer
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
              A personal project for learning and visualizing algorithms. Built
              by a developer, for developers who learn by doing. Open source,
              experimental, and constantly evolving.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              Learn
            </h4>
            <ul className="space-y-2">
              <FooterLink href="#" icon={<BookOpen className="size-3.5" />}>
                Getting Started
              </FooterLink>
              <FooterLink href="#">Algorithms</FooterLink>
              <FooterLink href="#">Data Structures</FooterLink>
            </ul>
          </div>

          {/* Source & Contribute */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              Source
            </h4>
            <ul className="space-y-2">
              <FooterLink
                href="https://github.com/Ulgamon/algo-observer"
                icon={<Github className="size-3.5" />}
                external
                prominent
              >
                View on GitHub
              </FooterLink>
              <FooterLink
                href="https://github.com/Ulgamon/algo-observer/blob/main/CONTRIBUTING.md"
                external
              >
                Contribute
              </FooterLink>
              <FooterLink
                href="https://github.com/Ulgamon/algo-observer/issues"
                external
              >
                Report Issues
              </FooterLink>
              <FooterLink
                href="https://github.com/Ulgamon/algo-observer/blob/main/LICENSE"
                external
              >
                MIT License
              </FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-sm text-zinc-600 dark:text-zinc-500">
            <p>
              Personal project by{" "}
              <a
                href="https://github.com/Ulgamon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ulgamon
              </a>
            </p>
            <p className="text-xs sm:text-sm">
              Learning in public. Built with curiosity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
  prominent?: boolean;
}

function FooterLink({
  href,
  children,
  icon,
  external,
  prominent,
}: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`text-sm flex items-center gap-2 transition-colors ${
          prominent
            ? "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        }`}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    </li>
  );
}
