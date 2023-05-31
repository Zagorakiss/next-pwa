import { type DocsTree, docsTree } from "@/utils/buildDocsTree.js";
import { clsx } from "@/utils/clsx.js";

import { SidebarClient, SidebarTextBox } from "./SidebarClient.js";

const SidebarContent = ({ node }: { node: DocsTree }) => {
  const hasChildTree = node.children.length > 0;
  return (
    <li className="flex flex-col pt-2">
      <SidebarTextBox
        href={node.url}
        hasChildTree={hasChildTree}
        childTreeReactNode={
          <>
            {hasChildTree && (
              <div className="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none">
                <div className="transition-opacity duration-500 ease-in-out opacity-100 ltr:pr-0 rtl:pl-0">
                  <ul
                    className={clsx(
                      "flex flex-col relative",
                      "before:absolute before:inset-y-1 before:w-px before:bg-gray-200 before:content-[''] dark:before:bg-neutral-800",
                      "ltr:pl-3 ltr:before:left-0 rtl:pr-3 rtl:before:right-0 ltr:ml-3 rtl:mr-3"
                    )}
                  >
                    {node.children.map((childNode) => (
                      <SidebarContent key={childNode.id} node={childNode} />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </>
        }
      >
        {node.title}
      </SidebarTextBox>
    </li>
  );
};

export const Sidebar = () => (
  <div
    className={clsx(
      "z-10 flex flex-col fixed w-full print:hidden",
      "md:top-16 md:sticky md:shrink-0 md:w-64 md:self-start"
    )}
  >
    <SidebarClient>
      {docsTree.map((node) => (
        <SidebarContent key={node.id} node={node} />
      ))}
    </SidebarClient>
  </div>
);