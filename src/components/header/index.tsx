import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import HamburgerIcon from "@/assets/icons/hamburger.svg";
import BagIcon from "@/assets/icons/bag.svg";

export function Top() {
  return (
    <div className="hidden lg:block bg-primary py-2.5 text-sm">
      <h4 className="text-center">Free Shipping on Orders Over $100</h4>
    </div>
  );
}

export function Middle() {
  return (
    <nav
      aria-label="Middle navigation"
      className="sticky top-0 z-30 max-lg:hidden bg-baseBG bg-base h-16 text-sm items-center px-20 flex justify-between text-base-content"
    >
      {/* Logo */}
      <Link href="/" className="h-8 shrink-0">
        <span className="sr-only">main logo</span>
        <Logo className="h-full" />
      </Link>

      <div className="flex gap-6">
        <span className="sr-only">navigation menus</span>
        {navData.map((nav) => (
          <Link key={nav.id} href={nav.href} className="hover:underline">
            {nav.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-6 items-center">
        <button>
          <span className="sr-only">search product</span>
          <SearchIcon className="size-4" />
        </button>

        <Link href="/account/wishlst">
          <span className="sr-only">wishlist</span>
          <HeartIcon className="size-4" />
        </Link>
        <Link href="/auth/login">
          <span className="sr-only">login</span>
          Login
        </Link>
        <Link href="/checkout/cart">
          <span className="sr-only">checkout</span>
          Bag [2]
        </Link>
      </div>
    </nav>
  );
}

export function Mobile() {
  return (
    <header className="sticky top-0 z-40 overflow-hidden bg-baseBG px-6 flex justify-between py-4 lg:hidden">
      <div className="flex flex-none basis-10 items-center justify-start">
        <HamburgerIcon className="size-6" />
      </div>
      <Link href="/" className="h-8 shrink-0">
        <span className="sr-only">main logo</span>
        <Logo className="h-8" />
      </Link>
      <div className="flex gap-4 items-center">
        <button>
          <span className="sr-only">search product</span>
          <SearchIcon className="size-4" />
        </button>
        <Link href={"checkout/cart"}>
          <BagIcon className="size-4" />
        </Link>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <>
      <Top />
      <Middle />
      <Mobile />
    </>
  );
}

const navData = [
  { id: 1, label: "Women", href: "/women" },
  { id: 2, label: "Men", href: "/men" },
  { id: 3, label: "Accessories", href: "/accessories" },
  { id: 4, label: "Home", href: "/home" },
  { id: 5, label: "Gifts", href: "/gifts" },
  { id: 6, label: "Sale", href: "/sale" },
  { id: 7, label: "About Us", href: "/about" },
];
