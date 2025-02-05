import React from 'react';
import EmitIcon from "@/components/Icons/EmitIcon";
import EmitText from "@/components/Icons/EmitText";

function NavigationLogo() {
    return (
        <div className="flex items-center space-x-2">
            <EmitIcon/>
            <EmitText/>
        </div>
    );
}

export default NavigationLogo;