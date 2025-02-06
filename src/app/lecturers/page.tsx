import React from "react";
import Lecturer from "@/components/Cards/LecturerCard";
import LecturerCard from "@/components/Cards/LecturerCard";

interface Lecturer {
    id: number;
    name: string;
    role: string;
    image: string;
}

interface LecturersPageProps {
    lecturers: Lecturer[];
}


const LecturersPage: React.FC<LecturersPageProps> = ({lecturers}) => {
    lecturers = [
        {id: 1, name: "محمد محمدی", role: "مدرس", image: "/images/lecturer1.png"},
        {id: 2, name: "علی رضایی", role: "مدرس", image: "/images/lecturer1.png"},
        {id: 3, name: "زهرا احمدی", role: "مدرس", image: "/images/lecturer1.png"},
        {id: 4, name: "حسن کریمی", role: "مدرس", image: "/images/lecturer1.png"},
    ];

    return (
        <div className="p-10 min-h-screen text-white">
            <h2 className="text-3xl text-center mb-8">سخنرانان گرامی</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                {lecturers.map((lecturer) => (
                    <LecturerCard
                        key={lecturer.id}
                        id={lecturer.id}
                        image={lecturer.image}
                        name={lecturer.name}
                        role={lecturer.role}
                    />
                ))}
            </div>
        </div>
    );
};

export default LecturersPage;
