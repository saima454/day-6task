"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu } from "lucide-react"
import { useState } from "react"

export function AboutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative w-full max-w-[1322px] h-[91px] mt-4 mx-auto">
      {/* Logo */}
      <div className="absolute  w-[187px] h-[58px]">
        <Link
          href="/"
          className="absolute left-0 top-[13px] font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]"
        >
          Bandage
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden"
      >
        <Menu className="w-6 h-6 text-[#737373]" />
      </button>

      {/* Navigation Links */}
      <div
        className={`
        absolute w-full md:w-[815px] left-0 md:left-1/2 md:-translate-x-[110.5px] 
        top-[91px] md:top-4 bg-white md:bg-transparent
        ${isMenuOpen ? "block" : "hidden md:block"}
        shadow-lg md:shadow-none 
      `}
      >
        <ul className="flex flex-col md:flex-row items-center  gap-6 md:gap-[21px] p-4 md:p-0">
          <li>
            <Link
              href="/"
              className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] hover:text-[#252B42]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side Navigation */}
      <div
        className={`
        absolute w-full md:w-[300px] right-0 md:right-0 
        top-[220px] md:top-1/2 md:-translate-y-1/2
        ${isMenuOpen ? "block" : "hidden md:block"}
      `}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-[45px] p-4 md:p-0">
          <Link
            href="/login"
            className="font-montserrat font-bold text-sm leading-[22px] tracking-[0.2px] text-[#23A6F0]"
          >
            Login
          </Link>
          <Button className="h-[52px] px-[25px] py-[15px] bg-[#23A6F0] hover:bg-[#1a8dd0] text-white font-montserrat font-bold text-sm leading-[22px] tracking-[0.2px] w-[214px]">
            Become a member
            <ChevronRight className="w-3 h-[10px] ml-[15px]" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

