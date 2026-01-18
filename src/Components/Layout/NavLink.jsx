"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
    const pathname = usePathname(); 
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Services", href: "/services" },
    ];

    return (
        <ul className="flex gap-4">
            {menuItems.map((item) => (
                <li key={item.href}>
                    <Link
                        href={item.href}
                        className={`px-2 py-1 rounded ${pathname === item.href ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLink;
