import React, { FC } from 'react';
import { ReminderItem } from './ReminderItem';

export const ReminderView: FC = () => {
    const reminders = [
        { id: 'reminder-1', content: 'David goggings Hard dark techno mushups', note:"dsf" },
        { id: 'reminder-2', content: 'Interactive learning app for nostr devs examples and best practices?', note:""},
        { id: 'reminder-2', content: 'Interactive learning app for nostr devs examples and best practices?'},
    ];

    return (
        <div className="flex-grow p-4 shadow bg-[var(--secondary)] rounded-[10px]">
            <div className="flex flex-col gap-2">
                {reminders.map(reminder => (
                    <ReminderItem key={reminder.id} id={reminder.id} content={reminder.content} note={reminder.note} />
                ))}
            </div>
        </div>
    );
};
