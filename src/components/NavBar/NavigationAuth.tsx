import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Drawer from '@/components/NavBar/Drawer';

function NavigationAuth() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Mock basket items
    const basketItems = [
        { id: 1, title: 'موضوع اول', price: 'رایگان' },
        { id: 2, title: 'موضوع دوم', price: 'رایگان' },
        { id: 3, title: 'موضوع سوم', price: 'رایگان' },
    ];

    return (
        <div className="relative flex items-center space-x-4">
            <div className="relative">
                {/* Shopping Basket Button */}
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="relative"
                >
                    <ShoppingCartIcon className="w-6 h-6 text-white hover:text-[#C45D39]" />
                    <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold px-2 rounded-full">
                        {basketItems.length}
                    </span>
                </button>
                {/* Drawer Component */}
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    basketItems={basketItems}
                />
            </div>
            <Link href="#" className="text-[#C45D39] font-semibold">
                ورود
            </Link>
            <Link
                href="#"
                className="bg-[#C45D39] text-white px-4 py-2 rounded-md hover:bg-[#A8482D]"
            >
                ثبت نام
            </Link>
        </div>
    );
}

export default NavigationAuth;
