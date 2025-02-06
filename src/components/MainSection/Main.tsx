'use client';

import BlockChainIcon from "@/components/Icons/BlockChainIcon";
import NebkaIcon from "@/components/Icons/NebkaIcon";
import NebkaTextIcon from "@/components/Icons/NebkaTextIcon";
import StartIcon from "@/components/Icons/StartIcon";

export default function Main() {
    return (
        <section className="w-full bg-[#0B253A] py-20 px-36 flex flex-col md:flex-row items-center justify-between">
            <div className="hidden md:block">
                <BlockChainIcon/>
            </div>

            <div className="max-w-lg mt-16 grid grid-cols-1 justify-items-end text-white">
                <h2 className="text-4xl font-extrabold text-[#539DB3] text-right">محاسبه کن و یادبگیر</h2>
                <p className="text-xl text-gray-300 mt-4 text-right">قفل پتانسیل خود را در بلاکچین باز بفرمایید</p>

                <div className="mt-10 flex space-x-4 float-right">
                    <button className="bg-[#C45D39] text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-[#A8482D]">
                        <span className="flex space-x-4">
                            <StartIcon/>
                            <div>
                                شروع کنید
                            </div>
                        </span>
                    </button>
                </div>

                <div className="mt-64 space-x-4 space-y-5 grid grid-cols-2 float-right justify-items-end">
                    <NebkaIcon/>
                    <NebkaTextIcon/>
                </div>
            </div>

        </section>
    );
}
