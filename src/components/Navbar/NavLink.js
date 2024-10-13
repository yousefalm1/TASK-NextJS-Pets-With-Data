'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? "active" : ""}>
      {children}
    </Link>
  )
}

export default NavLink