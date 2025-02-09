import React from 'react';
import Link from "next/link";

function NavigationLinks() {
    return (
        <ul className="hidden md:flex space-x-12 text-gray-300">
            <li><Link href="/" className="text-[#50A4C8] font-semibold">خانه</Link></li>
            <li><Link href="/lecturers" className="hover:text-white">ارائه دهندگان</Link></li>
            <li><Link href="/scheduling" className="hover:text-white">زمانبندی</Link></li>
            <li><Link href="#" className="hover:text-white">صفحه سوم</Link></li>
            <li><Link href="#" className="hover:text-white">صفحه چهارم</Link></li>
            <li><Link href="#" className="hover:text-white">صفحه پنجم</Link></li>
        </ul>
    );
}

export default NavigationLinks;