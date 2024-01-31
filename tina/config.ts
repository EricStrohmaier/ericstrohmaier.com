import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "reminder",
            label: "Reminder",
            list: true,
            description: "The reminders",
            required: false,
          },
          {
            type:"boolean",
            name: "active",
            label: "Active",
          }
        ],
        ui: {
          //if i want blog posts router
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
          filename:{
            slugify:(values)=> {
              return `${(values.title|| "").replace(/ /g, '-').toLowerCase()}`.replace(/[^\w-]+/g, '')
            }
          }
        },
      },
    ],
  },
});
