import { highlight } from 'sugar-high';

export const components = {
  h1: (props) => (
    <h1 class="font-medium pt-12 mb-0" {...props} />
  ),
  h2: (props) => (
    <h2 class="text-gray-800 font-medium mt-8 mb-4" {...props} />
  ),
  h4: (props) => <h4 class="font-medium" {...props} />,
  p: (props) => (
    <p class="text-gray-800 leading-7" {...props} />
  ),
  ol: (props) => (
    <ol class="text-gray-800 list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props) => (
    <ul class="text-gray-800 list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props) => <li class="pl-1" {...props} />,
  em: (props) => (
    <em class="font-medium" {...props} />
  ),
  strong: (props) => (
    <strong class="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }) => {
    const classes = 'text-blue-500 hover:text-blue-700 hover:bg-blue-50';
    if (href?.startsWith('/')) {
      return (
        <a href={href} class={classes} {...props}>
          {children}
        </a>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} class={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        class={classes}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }) => {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props) => (
    <blockquote
      class="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export function useMDXComponents(otherComponents) {
  return {
    ...otherComponents,
    ...components,
  };
}