import React from 'react';
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
        {js}
      </TabItem>
      <TabItem value="react" label="React">
        {react}
      </TabItem>
      <TabItem value="svelte" label="Svelte">
        {svelte}
      </TabItem>
      <TabItem value="vue" label="Vue">
        {vue}
      </TabItem>
    </Tabs>
  );
}
