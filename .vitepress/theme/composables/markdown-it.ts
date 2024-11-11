import markdownit from "markdown-it";

export function useMarkdownIt() {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
  });

  const render = (str: string) => md.render(str);
  const renderInline = (str: string) => md.renderInline(str);

  return { render, renderInline };
}
