'use client'

import React from 'react';
import {useBasket} from "@/context/basketContext";
import Link from "next/link";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const { basketItems } = useBasket();

    return (
        <div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                ></div>
            )}
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } w-80 z-50`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold text-[#0B253A]">سبد خرید</h2>
                    <button
                        className="w-6 h-6 text-gray-600 hover:text-[#C45D39]"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
                <div className="p-4 space-y-4 overflow-y-auto flex-grow">
                    {basketItems.length > 0 ? (
                        basketItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-2"
                            >
                                <div>
                                    <p className="text-[#0B253A] font-medium">{item.title}</p>
                                    <p className="text-gray-500 text-sm">{item.price}</p>
                                </div>
                                <button className="text-red-500 hover:text-red-700">حذف</button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">سبد خرید شما خالی است</p>
                    )}
                </div>
                <div className="p-4 border-t">
                    <input
                        type="text"
                        placeholder="کد تخفیف وارد کنید"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C45D39]"
                    />
                    <Link href='#' className="mt-4 w-full bg-[#C45D39] text-white py-2 rounded-md hover:bg-[#A8482D]">
                        پرداخت
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
