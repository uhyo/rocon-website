import React, { Fragment } from "react";
import { Link, ReactRouteRecord } from "rocon/react";
import { CodeBlock } from "~/util/CodeBlock";
import { tabContainerCss, tabCss, tabListCss, tabSelectedCss } from "./styles";

const tabLabels = [
  {
    name: "tab1",
    label: "Tab 1",
  },
  {
    name: "tab2",
    label: "Tab 2",
  },
  {
    name: "tab3",
    label: "Tab 3",
  },
] as const;

const tabs = {
  tab1: () => (
    <Fragment>
      <p>This is an example of nested routes.</p>
      <p>
        By clicking “Tab 2” or “Tab 3”, you are navigated to a URL like{" "}
        <code>/tutorial/nested?tab=tab2</code>.
      </p>
    </Fragment>
  ),
  tab2: () => (
    <Fragment>
      <p>
        This is done by a nested route whose only concern is the{" "}
        <code>?tab=tab2</code> part. Other parts of URL is inherited by the
        parent route.
      </p>
      <p>
        The benefit of storing the tab information in the search query is that
        the information becomes recoverable from the URL. Also, with Rocon
        everything regarding the <code>tab</code> query parameter is enclosed in
        the page's component, as shown in the next tab.
      </p>
    </Fragment>
  ),
  tab3: () => (
    <Fragment>
      <p>
        This is an example of a tab UI like this page. Notably, the{" "}
        <code>PageWithTab</code> has no knowledge of what current location is.
        It only defines a Search route with the <code>tab</code> search key.
      </p>
      <p>
        Rocon implicitly combines this information with a parent route to
        generate a URL like <code>/tutorial/nested?tab=tab2</code>.
      </p>
      <CodeBlock>
        {`
const PageWithTab: React.FC = () => {
  const tabRoute = useMemo(() => {
    return Rocon.Search("tab", { optional: true }).action(({ tab }) => (
      <Tabs tab={tab} tabRoute={tabRoute.route} />
    ));
  }, []);
  return useRoutes(tabRoute);
};

const Tabs: React.FC<{
  tab: string | undefined;
  tabRoute: ReactRouteRecord<{ tab: string | undefined }>;
}> = ({ tab = "tab1", tabRoute }) => {
  return (
    <div>
      <nav>
        <Link route={tabRoute} match={{ tab: "tab1" }}>Go to Tab1</Link>
        <Link route={tabRoute} match={{ tab: "tab2" }}>Go to Tab2</Link>
        <Link route={tabRoute} match={{ tab: "tab3" }}>Go to Tab3</Link>
      </nav>
      <p>Welcome to {tab}</p>
    </div>
  );
};
        `}
      </CodeBlock>
      <p>
        One thing to note is that, as an obvious conclusion of{" "}
        <code>tabRoute</code> being enclosed in the <code>PageWithTab</code>,
        there is no means to directly link to Tab 2 or Tab 3 from outside. If
        you need to do so, the <code>tabRoute</code> route builder must be moved
        out of this component and attached to the parent route. Nested{" "}
        <code>useRoutes</code> is useful if you really want to hide the
        sub-routes from its parent.
      </p>
    </Fragment>
  ),
};

type Props = {
  tab: string | undefined;
  tabRoute: ReactRouteRecord<{ tab: string }>;
};
export const Tabs: React.FC<Props> = ({ tab, tabRoute }) => {
  const content = (tab && tabs[tab as keyof typeof tabs]) || tabs.tab1;
  return (
    <section className={tabContainerCss}>
      <nav>
        <ul role="tablist" className={tabListCss}>
          {tabLabels.map(({ name, label }) => (
            <li key={name} role="presentation">
              <Link
                role="tab"
                aria-selected={name === tab}
                className={tabCss + (name === tab ? ` ${tabSelectedCss}` : "")}
                route={tabRoute}
                match={{
                  tab: name,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main role="tabpanel">{content()}</main>
    </section>
  );
};
