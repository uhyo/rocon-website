import React from "react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";
import { DocsArticle } from "../DocsArticle";

export const DocsComponentRoconRoot: React.FC = () => {
  return (
    <DocsArticle>
      <h2>RoconRoot</h2>
      <CodeBlock>
        {`
RoconRoot: React.FunctionComponent<{
  history?: History;
}>
        `}
      </CodeBlock>
      <p>
        The <b>RoconRoot</b> component should be placed above any other
        component that use hooks or components provided by Rocon.
      </p>
      <p>
        By default, this component creates a{" "}
        <ExternalLink href="https://github.com/ReactTraining/history/blob/master/docs/api-reference.md">
          History
        </ExternalLink>{" "}
        instance by
        <code>createBrowserHistory()</code>. If you want to use a customized
        instance of History, pass it to this component as a <code>history</code>{" "}
        prop.
      </p>

      <h3>Example</h3>
      <CodeBlock>{`
const builder = Rocon.Path()
  .routes({
    foo: {
      action: () => <p>This is foo</p>
    },
    bar: {
      action: () => <p>This is bar</p>
    }
  });

const Routes: React.FC = () => {
  return useRoutes(builder);
};

const YourApp: React.FC = () => (
  <RoconRoot>
    <Routes />
  </RoconRoot>
);
`}</CodeBlock>
      <DocsNavigator />
    </DocsArticle>
  );
};
