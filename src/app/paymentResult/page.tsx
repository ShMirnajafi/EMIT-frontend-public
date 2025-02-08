import React from 'react';
import MessageCard from "@/components/Cards/MessageCard";

function Page() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B253A]">
                <MessageCard
                    type="success"
                    message="عباده، به باده"
                />
        </div>
    );
}

export default Page;