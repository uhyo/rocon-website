import React, { Fragment } from "react";
import { isLocationNotFoundError } from "rocon/react";
import { NotFound } from "./pages/NotFound";

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
      return <NotFound />;
    } else {
      return <Fragment>{this.props.children}</Fragment>;
    }
  }
}
