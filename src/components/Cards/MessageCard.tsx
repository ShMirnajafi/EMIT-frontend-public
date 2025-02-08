import React from 'react';
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

interface MessageCardProps {
    type: 'success' | 'error';
    message: string;
}

const MessageCard: React.FC<MessageCardProps> = ({type, message}) => {
    const isSuccess = type === 'success';

    return (
        <div className={`rounded-xl shadow-lg w-full max-w-md border-transparent border-x-8 ${
            isSuccess ? 'bg-[#DAF8E6] border-x-[#22AD5C]' : 'bg-[#FEF3F3] border-x-[#F23030]'
        }`}>
            <div className='p-6'>
                <div className="flex justify-end items-center">
                    <p className={`mx-4 text-right text-xl font-bold ${isSuccess ? 'text-[#004434]' : 'text-[#BC1C21]'}`}>{message}</p>
                    <div className={`p-2 rounded-lg ${isSuccess ? 'bg-[#22AD5C]' : 'bg-[#F23030]'} text-white`}>
                        {isSuccess ? <CheckCircleIcon className="w-6 h-6"/> : <XCircleIcon className="w-6 h-6"/>}
                    </div>
                </div>
                <div className="mt-10">
                    <Link href="/" passHref
                          className={`w-36 px-4 py-2 text-white size-12 font-semibold rounded-md ${isSuccess ? 'bg-[#22AD5C]' : 'bg-[#F23030]'} hover:opacity-80`}>
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;