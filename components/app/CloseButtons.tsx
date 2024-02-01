import React from 'react'
import { CheckIcon, MinusIcon, XIcon } from "lucide-react";

export default function CloseButtons() {
    return (
        <div className="flex space-x-2 justify-start items-center mt-8 md:ml-7 ml-2">
            <div className="md:w-4 md:h-4 w-3 h-3 bg-[#ff5f56] rounded-full flex items-center justify-center">
                <XIcon className="hover:text-black hover:opacity-50 opacity-0" />
            </div>
            <div className="md:w-4 md:h-4 w-3 h-3 bg-[#ffbd2e] rounded-full flex items-center justify-center">
                <MinusIcon className="hover:text-black hover:opacity-50 opacity-0" />
            </div>
            <div className="md:w-4 md:h-4 w-3 h-3 bg-[#27c93f] rounded-full flex items-center justify-center">
                <CheckIcon className="hover:text-black hover:opacity-50 opacity-0" />
            </div>
        </div>
    )
}
