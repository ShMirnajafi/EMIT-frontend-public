import React from "react";
import ScheduleTime from "@/components/ScheduleTimeLine/ScheduleTime";
import TimelineLabel from "@/components/ScheduleTimeLine/TimelineLabel";

interface ScheduleItem {
    title: string;
    presenter?: string;
    date: string;
    time: string;
}

const scheduleData1: ScheduleItem[] = [
    { title: "Intro to blockchain", presenter: "محمد متین غیاثوند", date: "۴ اسفند (یکشنبه)", time: "۱۰:۰۰ تا ۱۱:۳۰" },
    { title: "Zero-knowledge proofs", presenter: "حمید باطنی", date: "۵ اسفند", time: "۱۰:۰۰ - ۱۱:۳۰" },
    { title: "Proof of stake", presenter: "کیوان کامبخش", date: "۶ اسفند", time: "۱۰:۰۰ تا ۱۱:۳۰" },
];

const scheduleData2: ScheduleItem[] = [
    { title: "Solidity Basics", date: "۹ اسفند", time: "۱۰:۰۰ تا ۱۱:۳۰" },
    { title: "Solidity Advanced", date: "۹ اسفند", time: "۱۳:۰۰ تا ۱۴:۳۰" },
];

const scheduleData3: ScheduleItem[] = [
    { title: "مسابقه", date: "۱۰ اسفند", time: "۹:۰۰ تا ۱۱:۰۰" },
    { title: "مسابقه / اختتامیه", date: "۱۰ اسفند", time: "۱۳:۰۰ تا ۱۵:۰۰" },
];

const CARD_HEIGHT = 195;
const CHAIN_HEIGHT = 50; // Approximate height of a chain icon
const MARGIN_OFFSET = 30; // Adjust this to align with the chains properly

const getYPosition = (numItems: number) => numItems * (CARD_HEIGHT + CHAIN_HEIGHT);

const ScheduleTimeline: React.FC = () => {
    return (
        <div className="flex flex-col items-center relative my-16 w-full">
            {/* Label for Start of Presentations */}
            <div
                className="absolute left-[calc(50%+100px)]" // Adjust position further from center
                style={{ top: `${getYPosition(0) - MARGIN_OFFSET}px` }}
            >
                <TimelineLabel text="شروع ارائه‌ها" date="۴ اسفند" position="right" />
            </div>

            {scheduleData1.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                    <ScheduleTime title={item.title} presenter={item.presenter} date={item.date} time={item.time} />
                </div>
            ))}

            {/* Label for Start of Workshops */}
            <div
                className="absolute right-[calc(50%+100px)]" // Adjust position further from center
                style={{ top: `${getYPosition(scheduleData1.length) - MARGIN_OFFSET}px` }}
            >
                <TimelineLabel text="شروع کارگاه‌ها" date="۹ اسفند" position="left" />
            </div>

            {scheduleData2.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                    <ScheduleTime title={item.title} presenter={item.presenter} date={item.date} time={item.time} />
                </div>
            ))}

            {/* Label for Start of Competition */}
            <div
                className="absolute left-[calc(50%+100px)]" // Adjust position further from center
                style={{ top: `${getYPosition(scheduleData1.length + scheduleData2.length) - MARGIN_OFFSET}px` }}
            >
                <TimelineLabel text="شروع مسابقه" date="۱۰ اسفند" position="right" />
            </div>

            {scheduleData3.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                    <ScheduleTime title={item.title} presenter={item.presenter} date={item.date} time={item.time} />
                </div>
            ))}
        </div>
    );
};

export default ScheduleTimeline;
