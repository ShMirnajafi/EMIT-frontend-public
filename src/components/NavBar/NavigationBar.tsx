'use client';

import NavigationLogo from "@/components/NavBar/NavigationLogo";
import NavigationLinks from "@/components/NavBar/NavigationLinks";
import NavigationAuth from "@/components/NavBar/NavigationAuth";

export default function NavigationBar() {
    return (
        <nav className="w-full bg-[#0B253A] py-4 px-20 flex justify-between items-center">
            <div className="mx-5">
                <NavigationLogo/>
            </div>

            <div>
                <NavigationLinks/>
            </div>

            <div>
                <NavigationAuth/>
            </div>
        </nav>
    );
}
