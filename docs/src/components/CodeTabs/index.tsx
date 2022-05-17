import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

type CodeTabsProps = {
  children: React.ReactNode;
  js: React.ReactNode;
  react: React.ReactNode;
  svelte: React.ReactNode;
  vue: React.ReactNode;
};

export default function CodeTabs({
  children,
  js,
  react,
  svelte,
  vue,
}: CodeTabsProps) {
  return (
    <Tabs>
      <TabItem value="example" label="Example">
        {children}
      </TabItem>
      <TabItem value="js" label="JS">
        <CodeBlock language="js">{js}</CodeBlock>
      </TabItem>
      <TabItem value="react" label="React">
        <CodeBlock language="jsx">{react}</CodeBlock>
      </TabItem>
      <TabItem value="svelte" label="Svelte">
        <CodeBlock language="html">{svelte}</CodeBlock>
      </TabItem>
      <TabItem value="vue" label="Vue">
        <CodeBlock language="html">{vue}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}
