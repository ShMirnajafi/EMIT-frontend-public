import React from 'react';
import Link from "next/link";

function NavigationLinks() {
    return (
        <ul className="hidden md:flex space-x-12 text-gray-300">
            <li><Link href="#" className="text-[#50A4C8] font-semibold">Home</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
        </ul>
    );
}

export default NavigationLinks;