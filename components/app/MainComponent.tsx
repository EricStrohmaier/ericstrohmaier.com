"use client"
import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import AnimatedCard from "./AnimatedCard";

export default function MainComponent(props: { query: string; variables: { relativePath: string }; data: PageQuery; }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  const title = data.page.title;
  return (
    <>
      <div >
        <h1>{title}</h1>
        <TinaMarkdown content={content} />
      </div>
      <AnimatedCard/>
    </>
  );
}


