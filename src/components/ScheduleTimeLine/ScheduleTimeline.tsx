import React from 'react';
import ScheduleTime from "@/components/ScheduleTimeLine/ScheduleTime";

interface ScheduleItem {
    title: string;
    presenter?: string;
    date: string;
    time: string;
}

const scheduleData: ScheduleItem[] = [
    { title: "Intro to blockchain", presenter: "محمد متین غیاثوند", date: "روز ۴ اسفند (یکشنبه)", time: "۱۰:۰۰ تا ۱۱:۳۰" },
    { title: "Zero-knowledge proofs", presenter: "خمید باطنی", date: "۵ اسفند", time: "۱۰:۰۰ - ۱۱:۳۰" },
    { title: "Proof of stake", presenter: "کیوان کامبخش", date: "۶ اسفند", time: "۱۰:۰۰ تا ۱۱:۳۰" },
    { title: "Solidity Basics", date: "۹ اسفند", time: "۱۰:۰۰ تا ۱۱:۳۰" },
    { title: "Solidity Advanced", date: "۹ اسفند", time: "۱۳:۰۰ تا ۱۴:۳۰" },
    { title: "مسابقه", date: "۱۰ اسفند", time: "۹:۰۰ تا ۱۱:۰۰" },
    { title: "مسابقه / اختتامیه", date: "۱۰ اسفند", time: "۱۳:۰۰ تا ۱۵:۰۰" }
];

const ScheduleTimeline: React.FC = () => {
    return (
        <div className="flex flex-col items-center relative my-16">
            {scheduleData.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                    <ScheduleTime
                        title={item.title}
                        presenter={item.presenter}
                        date={item.date}
                        time={item.time}/>
                </div>
            ))}
        </div>
    );
};

export default ScheduleTimeline;
