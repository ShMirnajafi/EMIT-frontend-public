import React from 'react';
import DashesIcon from "@/components/Icons/DashesIcon";

interface TimelineLabelProps {
    text: string;
    date: string;
    position: 'left' | 'right';
}

const TimelineLabel: React.FC<TimelineLabelProps> = ({ text, date, position }) => {
    return (
        <div className={`${position === 'left' ? 'right-full pr-4' : 'left-full pl-4'} flex items-center`}>
            {position === 'left' && <span className="text-white text-lg font-semibold">{text}</span>}
            <DashesIcon/>
            <span className="text-gray-300 text-sm">{date}</span>
            <DashesIcon/>
            {position === 'right' && <span className="text-white text-lg font-semibold ml-2">{text}</span>}
        </div>
    );
};

export default TimelineLabel;
