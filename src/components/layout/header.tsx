'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  logo: React.ReactNode;
  navLinks: NavLink[];
  loginButton: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({
  logo,
  navLinks,
  loginButton,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`w-90 bg-[#000000] rounded-[15.73px] border border-[#A4A3A333] border-[0.98px] 
        p-4 mt-[24.68px] mx-auto max-w-[1272px] min-h-[79.18px]
        ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-[1055px] mx-auto w-full">
        {/* Top Row: Logo + Menu Toggle (on mobile) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>{logo}</div>

          {/* Mobile Menu Toggle */}
          <Button 
            icon={Menu} 
            iconPosition="right" 
            size="icon"
            variant='ghost'
            onClick={() => setIsOpen(!isOpen)}
            iconClasses='w-[32px] text-[#F6E9E9] hover:text-[#10d732]'
            aria-label="Toggle menu"
          > </Button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex-row md:flex md:space-x-6 ${
            isOpen ? 'flex mt-4 space-y-2' : 'hidden'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#F6E9E9] hover:text-[#10d732] text-[16px] font-normal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login Button (on desktop and below nav on mobile) */}
        <div className={`mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:block'}`}>{loginButton}</div>
      </div>
    </header>
  );
};

export {Header};
