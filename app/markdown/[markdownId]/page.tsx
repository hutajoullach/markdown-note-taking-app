import { Markdown } from "../../../typings";

type PageProps = {
  params: {
    markdownId: string;
  };
};

const fetchMarkdown= async (markdownId: string) => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${markdownId}`, { cache: 'force-cache' });

  const markdown: Markdown = await res.json();
  return markdown;
};

export default async function MarkdownPage({ params: { markdownId } }: PageProps) {
  const markdown = await fetchMarkdown(markdownId)

  return (
    <div className="p-10 bg-gray-200 border-2 m-2 shadow-lg">
      <p>#{markdown.id}</p>
      <p>{markdown.title}</p>
      <p>{markdown.body}</p>
      <p className="mt-5 text-right">User: {markdown.userId}</p>
    </div>
  )
}