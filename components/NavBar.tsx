import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
const LINKS = [
  {name: 'Blog', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Contact', href: '/contact'},
];

function NavLink({href, name}: {href: string; name: string}) {
  const router = useRouter();
  const pathname = router.pathname;
  const isSelected =
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (pathname.startsWith('/blog') && href === '/');
  return (
    <li className="px-5 py-2" key={name}>
      <Link href={href}>
        <a
          key={href}
          className={clsx(
            'underlined hover:text-team-current focus:text-team-current block whitespace-nowrap text-lg font-medium focus:outline-none',
            {
              'active text-primary underline dark:text-slate-100': isSelected,
              'text-slate-500 dark:text-slate-400': !isSelected,
            },
          )}>
          {name}
        </a>
      </Link>
    </li>
  );
}
const NavBar = ({setIsDarkMode, isDarkMode}) => {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="max-w-8xl mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <Link href="/">
            <a className="underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none dark:text-slate-100">
              Blair Harper
            </a>
          </Link>
        </div>
        <ul className="flex">
          {LINKS.map(({name, href}) => (
            <NavLink href={href} name={name} key={name} />
          ))}
        </ul>
        <div className="relative h-14 w-14">
          {isDarkMode ? (
            <button
              className="focus:border-primary inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-slate-600 p-1 transition hover:border-slate-200 focus:outline-none"
              onClick={() => setIsDarkMode(false)}>
              <span className="absolute inset-0">
                <SunIcon />
              </span>
            </button>
          ) : (
            <button
              className="focus:border-primary inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 p-1 transition hover:border-slate-600 focus:outline-none"
              onClick={() => setIsDarkMode(true)}>
              <span className="absolute inset-0  transform text-black transition duration-1000 motion-reduce:duration-[0s]  dark:text-black">
                <MoonIcon />
              </span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
