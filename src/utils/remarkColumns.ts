import { visit } from 'unist-util-visit';

export default function remarkColumns() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' &&
        node.name === 'columns'
      ) {
        node.data = node.data || {};
        node.data.hName = 'div';
        node.data.hProperties = {
          className: ['columns-2', 'gap-8', 'my-8'],
        };
      }
    });
  };
}