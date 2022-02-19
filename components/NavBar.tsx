import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from 'clsx';

const LINKS = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'},
];

function NavLink({href, name}: {href: string; name: string}) {
  const router = useRouter();
  const pathname = router.pathname;
  const isSelected = pathname === href || pathname.startsWith(href + '/');

  return (
    <li className="px-5 py-2" key={name}>
      <Link href={href}>
        <a
          className={clsx(
            'underlined hover:text-team-current focus:text-team-current block whitespace-nowrap text-lg font-medium focus:outline-none',
            {
              'active text-primary underline': isSelected,
              'text-slate-500': !isSelected,
            },
          )}>
          {name}
        </a>
      </Link>
    </li>
  );
}

const NavBar = () => {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="max-w-8xl mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <Link href="/">
            <a className="underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none">
              Blair Harper
            </a>
          </Link>
        </div>
        <ul className="flex">
          {LINKS.map(({name, href}) => (
            <NavLink href={href} name={name} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
