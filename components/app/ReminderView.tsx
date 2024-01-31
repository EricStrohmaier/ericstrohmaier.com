import React, { FC } from 'react';
import { ReminderItem } from './ReminderItem';
interface ReminderViewProps {
   reminders: any;
   active: boolean;
  }
export const ReminderView: FC<ReminderViewProps> = ({reminders, active}) => {
    if (!reminders) {
        return null;
    }
    return (
        <div className="flex-grow p-4 shadow bg-[var(--secondary)] rounded-[10px]">
            <div className="flex flex-col gap-2">
            {reminders.map((reminder: string, index: number) => (
                    <ReminderItem key={index} id={index.toString()} content={reminder} />
                ))}
            </div>
        </div>
    );
};
