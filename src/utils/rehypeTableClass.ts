import { visit } from 'unist-util-visit';

export default function rehypeTableClass() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'table') {
        node.properties = node.properties || {};
        node.properties.className = [
          ...(node.properties.className || []),
          'prose-table', // Add your custom class
          'w-full',
          'my-6',
          'border-collapse',
        ];
      }
    });
  };
}