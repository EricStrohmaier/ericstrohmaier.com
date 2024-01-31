import React, { FC } from 'react';
import { Checkbox } from '../ui/checkbox'; // Assuming you have a Checkbox component

interface ReminderItemProps {
    id: string;
    content: string;
    note?:string
}

export const ReminderItem: FC<ReminderItemProps> = ({ id, content }) => {
    return (
        <div className="flex items-center ">
            <Checkbox id={id} className='rounded-full' />
            <span className="ml-2 flex-grow">{content}</span>
            
        </div>
    );
};
