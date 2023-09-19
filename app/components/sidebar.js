'use client'

import { usePathname } from 'utils/hooks';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  }
};

export default function Navbar() {
  let pathname = usePathname() || '/';

  // Get the current pathname, using window.location.pathname on the client-side,
  // or fallback to '/' if running on the server-side where window is undefined.

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            {/* Render navigation links dynamically based on 'navItems' object.
              - 'path' is compared with 'pathname' to determine if a link is active.
              - 'linkClasses' is dynamically generated based on the link's state.
              - 'motion.div' is used for an animation effect when the link is active.
            */}
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                const linkClasses = [
                  'transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                  'flex align-middle',
                  isActive ? 'text-neutral-500' : '',
                ].filter(Boolean).join(' ');

                return (
                  <Link legacyBehavior 
                    key={path} href={path}>
                    <a className={linkClasses}>
                      <span className="relative py-1 px-2">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                            layoutId="sidebar"
                            transition={{
                              type: 'spring',
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </a>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
