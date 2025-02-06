import React from 'react';
import Link from "next/link";

function NavigationAuth() {
    return (
        <div className="flex items-center space-x-4">
            <Link href="#" className="text-[#C45D39] font-semibold">ورود</Link>
            <Link href="#" className="bg-[#C45D39] text-white px-4 py-2 rounded-md hover:bg-[#A8482D]">ثبت نام</Link>
        </div>
    );
}

export default NavigationAuth;