export type User = {
  id: number;
  email: string;
  name: string;
  markdowns: Markdown[];
};

export type Markdown = {
  id: number;
  userId: number;
  title: string;
  content: string;
};

// export type NewMarkdown = {
//   id: number;
// } & MarkdownData

export type MarkdownData = {
  userId: number;
  title: string;
  content: string;
};
