import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

// Custom renderer options for Contentful rich text
export const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-6 leading-relaxed text-gray-700">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mb-8 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <h4 className="text-xl font-semibold mb-4 mt-6 text-gray-900">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
      <h5 className="text-lg font-semibold mb-3 mt-6 text-gray-900">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
      <h6 className="text-base font-semibold mb-3 mt-4 text-gray-900">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="mb-6 pl-6 space-y-2 list-disc">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="mb-6 pl-6 space-y-2 list-decimal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="text-gray-700">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-pink-500 pl-6 my-8 italic text-lg text-gray-700">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-12 border-gray-200" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target.fields;
      return (
        <div className="my-8">
          <img
            src={`https:${file.url}`}
            alt={title || 'Content image'}
            className="w-full rounded-lg shadow-md"
          />
          {title && (
            <p className="text-sm text-gray-500 text-center mt-2 italic">{title}</p>
          )}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-700 underline"
      >
        {children}
      </a>
    ),
  },
};

export const renderRichText = (content: any) => {
  if (!content) return null;
  return documentToReactComponents(content, renderOptions);
};