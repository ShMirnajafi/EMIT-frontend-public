import React from 'react';
import {ClockIcon, UserIcon} from "@heroicons/react/24/outline";
import ChainIcon from "@/components/Icons/ChainIcon";

interface ScheduleCardProps {
    title: string;
    presenter: string | undefined;
    date: string;
    time: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ title, presenter, date, time }) => {
    const isMostlyEnglish = (text: string): boolean => {
        const englishChars = text.match(/[a-zA-Z]/g)?.length || 0;
        return (englishChars / text.length) > 0.1;
    };

    const isTitlePersian = isMostlyEnglish(title);

    return (
        <div className="flex flex-col items-center relative">
            <ChainIcon/>
            <div className={`bg-[#39657E] text-white p-4 rounded-lg shadow-lg w-64 relative ${isTitlePersian ? 'text-left' : 'text-right'}`}>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="flex mt-4 items-center justify-end text-sm">
                    {presenter} {presenter !== undefined ? <UserIcon className="w-4 h-4 ml-1"/> : <br/>}
                </p>
                <p className="flex items-center justify-end text-sm mt-1">
                    {date} {time} <ClockIcon className="w-4 h-4 ml-1" />
                </p>
            </div>
            <ChainIcon/>
        </div>
    );
};

export default ScheduleCard;
