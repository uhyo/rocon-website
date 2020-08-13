import React from "react";
import { Link } from "rocon/react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { docsHookRoutes } from "~/routes";
import { CodeBlock } from "~/util/CodeBlock";
import { DocsArticle } from "../DocsArticle";

export const DocsComponentLink: React.FC = () => {
  return (
    <DocsArticle>
      <h2>Link</h2>
      <CodeBlock>
        {`
Link: <Match>(props: LinkProps<Match>) => ReactElement

type LinkProps<Match> = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  route: ReactRouteRecord<Match>;
} & ({} extends Match ? { match?: Match } : { match: Match });
        `}
      </CodeBlock>
      <p>
        The <b>Link</b> component renders an <code>&lt;a&gt;</code> element
        that, on clicked, changes the current location in the same manner as{" "}
        <Link route={docsHookRoutes._.useNavigate}>useNavigate</Link>.
      </p>
      <p>
        It takes a destination route record as the <code>route</code> prop. If
        that route record requires a match object, it should be passed as the{" "}
        <code>match</code> prop.
      </p>
      <p>
        The <code>Link</code> component accepts any props accepted by{" "}
        <code>&lt;a&gt;</code>. You do not need to specify the <code>href</code>{" "}
        prop as it is calculated by the <code>Link</code> component.
      </p>

      <h3>Example</h3>
      <CodeBlock>{`
const toplevelRoutes = Rocon.Path()
  .routes({
    foo: {
      action: () => <FooPage />
    },
    bar: {
      action: () => <BarPage />
    },
  });

const FooPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Link route={toplevelRoutes._.bar}>
      Go to bar
    </Link>
  );
};

const BarPage: React.FC = () => {
  return (<p>This is bar</p>);
};
`}</CodeBlock>

      <h3>Example 2</h3>
      <CodeBlock>{`
const toplevelRoutes = Rocon.Path()
  .routes({
    foo: {
      action: () => <FooPage />
    },
    bar: {}
  });
// /bar requires 'key' in match object
const barRoute = toplevelRoutes._.bar
  .attach(Rocon.Search("key"))
  .action(({ key }) => <BarPage key={key} />);

const FooPage: React.FC = () => {
  const matchObject = useMemo(() => ({
    key: "value"
  }), []);

  return (
    <Link route={barRoute} match={matchObject}>
      Go to bar
    </Link>
  );
};

const BarPage: React.FC<{ key: string }> = ({ key }) => {
  return (<p>This is bar. key is {key}</p>);
};
      `}</CodeBlock>
      <DocsNavigator />
    </DocsArticle>
  );
};
