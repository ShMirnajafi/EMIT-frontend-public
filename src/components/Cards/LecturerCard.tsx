import React from 'react';
import Image from "next/image";
import AUTIcon from "@/components/Icons/AUTIcon";

interface LecturerCard {
    id: number;
    name: string;
    role: string;
    image: string;
}

function Lecturer(props: LecturerCard) {
    return (
        <div className="bg-[#0B253A] rounded-xl shadow-lg w-72 overflow-hidden relative m-2.5">
            <div>
                <Image
                    alt={props.name}
                    src={props.image}
                    width={288}
                    height={450}
                />
                <div className="absolute my-2 bottom-0 w-[90%] left-1/2 transform -translate-x-1/2 bg-gray-100 px-4 py-3 rounded-lg shadow-md flex flex-col items-center justify-center space-y-1">
                    <div className="flex items-center justify-around w-full">
                        <span className="text-[#0B253A] font-bold text-lg">{props.name}</span>
                        <div className="w-8 h-8">
                            <AUTIcon />
                        </div>
                    </div>
                    <span className="m-1 text-[#D05353] font-medium">{props.role}</span>
                </div>
            </div>
        </div>
    );
}

export default Lecturer;
