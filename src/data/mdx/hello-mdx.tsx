
/** @jsxImportSource react */
import { mdx } from '@mdx-js/react'

/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
"use strict";
const {useMDXComponents: _provideComponents} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ..._provideComponents(),
    ...props.components
  }, {CustomComponent} = _components;
  if (!CustomComponent) _missingMdxReference("CustomComponent", true);
  return <><_components.h1>{"Welcome"}</_components.h1>{"\n"}<_components.h2>{"This is a post with a "}<CustomComponent />{"!"}</_components.h2>{"\n"}<_components.h1>{"Welcome to My Blog"}</_components.h1>{"\n"}<_components.p>{"This is my first blog post! I'm excited to share my thoughts on web development, programming, and technology."}</_components.p>{"\n"}<_components.h2>{"What to Expect"}</_components.h2>{"\n"}<_components.ul>{"\n"}<_components.li>{"Technical tutorials"}</_components.li>{"\n"}<_components.li>{"Project showcases"}</_components.li>{"\n"}<_components.li>{"Industry insights"}</_components.li>{"\n"}<_components.li>{"Personal experiences"}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.p>{"Stay tuned for more content!"}</_components.p></>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ..._provideComponents(),
    ...props.components
  };
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
return {
  default: MDXContent
};
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


export const meta = {"title":"Example Blog","date":"2024-06-01","excerpt":"This is the first post on my new blog. Stay tuned for more updates and exciting content!","category":"General","readTime":"3 min read","imageUrl":"https://via.placeholder.com/400x250","published":true,"tags":["react","mdx"],"slug":"hello-mdx"};
export default MDXContent;
