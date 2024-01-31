import React, { FC } from 'react';
import { Checkbox } from '../ui/checkbox'; // Assuming you have a Checkbox component that supports 'checked' prop

interface ReminderItemProps {
    id: string;
    content: string;
    active?: boolean;
}

export const ReminderItem: FC<ReminderItemProps> = ({ id, content, active }) => {
    // Determine the style for the content based on the 'active' state
    const contentStyle = active ? "ml-2 flex-grow line-through" : "ml-2 flex-grow";

    return (
        <div className="flex items-center">
            {/* Pass the 'checked' prop to the Checkbox based on the 'active' state */}
            <Checkbox id={id} className='rounded-full'/>
            <span className={contentStyle}>{content}</span>
        </div>
    );
};
