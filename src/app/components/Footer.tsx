import { Github, BookOpen, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Project Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="size-5 text-blue-500" />
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Algo.Observer
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              An interactive learning tool for visualizing algorithms and data
              structures step-by-step.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              Documentation
            </h4>
            <ul className="space-y-2">
              <FooterLink href="#" icon={<BookOpen className="size-3.5" />}>
                Getting Started
              </FooterLink>
              <FooterLink href="#">Algorithms</FooterLink>
              <FooterLink href="#">Data Structures</FooterLink>
            </ul>
          </div>

          {/* Open Source */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              Open Source
            </h4>
            <ul className="space-y-2">
              <FooterLink
                href="https://github.com/Ulgamon/algo-observer"
                icon={<Github className="size-3.5" />}
                external
                prominent
              >
                GitHub
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
            </ul>
          </div>

          {/* Meta */}
          <div>
            <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3">
              Meta
            </h4>
            <ul className="space-y-2">
              <FooterLink
                href="https://github.com/Ulgamon/algo-observer/blob/main/LICENSE"
                icon={<FileText className="size-3.5" />}
                external
              >
                License
              </FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-600 dark:text-zinc-500">
            <p>
              © {new Date().getFullYear()} Algo.Observer. Open source project.
            </p>
            <p className="flex items-center gap-1">
              Built for learning. Made with
              <span className="text-red-500">♥</span>
              by developers.
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
