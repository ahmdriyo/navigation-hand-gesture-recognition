// Types for the Navbar component

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export interface NavbarState {
  isMenuOpen: boolean;
  isScrolled: boolean;
}
