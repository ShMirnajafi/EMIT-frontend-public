'use client'

import React from 'react';
import { useBasket } from "@/context/basketContext";
import Link from "next/link";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const { basketItems, removeItem, clearBasket } = useBasket();

    const totalPrice = basketItems.reduce((sum, item) => {
        const price = item.price === "رایگان" ? 0 : parseFloat(item.price);
        return sum + price;
    }, 0);

    return (
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={onClose}
                ></div>
            )}

            <div
                className={`fixed top-8 left-0 h-[90%] bg-white shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out
                w-80 overflow-hidden flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-lg font-bold text-[#0B253A]">سبد خرید</h2>
                    <button
                        className="w-6 h-6 text-gray-600 hover:text-[#C45D39]"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                    {basketItems.length > 0 ? (
                        <table className="w-full text-right">
                            <thead>
                            <tr className="border-b text-[#0B253A] font-bold text-md">
                                <th className="pb-2">عنوان</th>
                                <th className="pb-2">قیمت</th>
                                <th className="pb-2"> </th>
                            </tr>
                            </thead>
                            <tbody>
                            {basketItems.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-2">{item.title}</td>
                                    <td className="py-2">{item.price}</td>
                                    <td className="py-2">
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            🗑
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500 text-center">سبد خرید شما خالی است</p>
                    )}
                </div>

                <div className="px-6 pb-4 flex items-center space-x-2">
                    {/* TODO: Add onClick props that call API for checking discount integrity */}
                    <button className="bg-[#C45D39] text-white px-4 py-2 rounded-md hover:bg-[#A8482D]">
                        تایید
                    </button>
                    <input
                        type="text"
                        placeholder="کد تخفیف وارد کنید"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C45D39]"
                    />
                </div>

                <div className="px-6 pb-6 border-t flex justify-between items-center">
                    <span className="text-[#0B253A] font-bold">مجموع قیمت</span>
                    <span className="text-[#0B253A]">{totalPrice === 0 ? "رایگان" : `${totalPrice} تومان`}</span>
                </div>

                <div className="px-6 pb-6">
                    {totalPrice > 0 ? (
                        <Link
                            href="/#"
                            className="block text-center bg-[#C45D39] text-white py-3 rounded-md hover:bg-[#A8482D]"
                        >
                            پرداخت
                        </Link>
                    ) : (
                        // Payment button without redirecting to payment gateway.
                        // TODO: add onClick method to add items to user profile
                        <button
                            className="block text-center bg-gray-400 text-white py-3 rounded-md w-full"
                            onClick={() => clearBasket()}
                        >
                            پرداخت
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Drawer;
