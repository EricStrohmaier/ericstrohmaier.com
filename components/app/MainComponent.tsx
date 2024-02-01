"use client"
import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ReminderView } from "./ReminderView";
import { pathColorMapping } from "@/constans";


export default function MainComponent(props: { query: string; variables: { relativePath: string }; data: PageQuery; }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina(props);

  const content = data.page.body;
  const title = data.page.title;
  const id = data.page.id;
  const active = data.page.active;
  const reminders = data.page.reminder;

  const idParts = id.split('/');
  const extractedPath = idParts[idParts.length - 1].replace('.mdx', ''); // Get the third last part (today from today.mdx)

  const titleColor = pathColorMapping[extractedPath] || 'text-[var(--text)]'; // Default color if path not found

  return (
    <div className="px-4">
      <div>
        <div className={`text-6xl font-semibold ${titleColor}`}>{title}</div>
        <TinaMarkdown content={content} />
      </div>
      <ReminderView reminders={reminders} active={active || false} />
    </div>
  );
}


