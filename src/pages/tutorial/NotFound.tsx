import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";

export const TutorialNotFound: React.FC = () => {
  return (
    <Fragment>
      <h2>Handling of Nonexistent Paths</h2>
      <p>
        Even though we prevent navigation to undefined paths with the power of
        types, a user may visit arbitrary paths by directly entering a path to
        their browser's address bar. Therefore, our app has to handle these
        cases, typically by showing a “not found” page, or by redirecting to the
        top page.
      </p>
      <p>
        If an undefined path is encountered, <code>useRoutes</code> throws a{" "}
        <code>LocationNotFoundError</code>. To catch the error, you can use an{" "}
        <ExternalLink href="https://reactjs.org/docs/error-boundaries.html">
          error boundary
        </ExternalLink>
        . Rocon exports an <code>isLocationNotFoundError</code> function to
        check whether a catched error is a <code>LocationNotFoundError</code>.
        Utilizing this function, a typical error boundary for Rocon looks like:
      </p>
      <CodeBlock>
        {`
import { isLocationNotFoundError } from "rocon/react";

type State = {
  notFound: boolean;
};

export class ErrorBoundary extends React.Component {
  state: State = {
    notFound: false,
  };

  componentDidCatch(error: unknown) {
    if (isLocationNotFoundError(error)) {
      this.setState({
        notFound: true,
      });
    } else {
      throw error;
    }
  }

  render() {
    if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <Fragment>{this.props.children}</Fragment>;
    }
  }
}
        `}
      </CodeBlock>

      <TutorialNavigator />
    </Fragment>
  );
};
