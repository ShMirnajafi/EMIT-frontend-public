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
        <div key={props.id} className="bg-[#1C2D42] rounded-xl p-4 text-center relative shadow-lg">
            <Image
                alt={props.name}
                src={props.image}
                width={300}
                height={400}
                className="rounded-lg"
            />
            <div
                className="absolute bottom-4 left-4 right-4 bg-gray-100 text-gray-900 rounded-lg p-2 flex items-center justify-between">
                <span className="font-semibold text-lg">{props.name}</span>
                <AUTIcon/>
            </div>
            <p className="absolute bottom-2 left-4 text-red-500 font-semibold">{props.role}</p>
        </div>
    );
}

export default Lecturer;