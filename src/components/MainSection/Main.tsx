'use client';

import BlockChainIcon from "@/components/Icons/BlockChainIcon";

export default function Main() {
    return (
        <section className="w-full bg-[#0B253A] py-20 px-36 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-lg text-left text-white">
                <h2 className="text-4xl font-extrabold text-[#539DB3]">Compete & Learn</h2>
                <p className="text-xl text-gray-300 mt-4">Unlock Your Potential in Blockchain!</p>

                <div className="mt-6 flex space-x-4">
                    <button className="bg-[#C45D39] text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-[#A8482D]">
                        <span>➕</span>
                        <span>Workshop</span>
                    </button>
                    <button className="bg-gray-600 text-gray-300 px-6 py-3 rounded-md flex items-center space-x-2 cursor-not-allowed">
                        <span>➕</span>
                        <span>Competition</span>
                    </button>
                </div>
            </div>

            <div className="hidden md:block">
                <BlockChainIcon/>
            </div>
        </section>
    );
}
