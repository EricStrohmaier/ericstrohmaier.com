"use client"
import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ReminderView } from "./ReminderView";

export default function MainComponent(props: { query: string; variables: { relativePath: string }; data: PageQuery; }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina(props);

  const content = data.page.body;
  const title = data.page.title;
  return (
    <>
      <div >
        <div>{title}</div>
        <TinaMarkdown content={content} />
      </div>
      <ReminderView/>
    </>
  );
}


