import React, { Fragment } from "react";
import { TutorialNavigator } from "~/components/TutorialNavigator";
import { CodeBlock } from "~/util/CodeBlock";

export const TutorialDeepRoutes: React.FC = () => {
  return (
    <Fragment>
      <h2>Deep Routes</h2>
      <p>
        So far we learned how to handle paths like <code>/foo</code>,{" "}
        <code>/bar</code> and <code>/</code>. Then, what about deep routes like{" "}
        <code>/foo/cat</code> and <code>/foo/dog</code>?
      </p>
      <p>
        In order to handle deep routes, we create a route builder for each level
        and connect them by <b>attaching</b> a child builder to a parent
        builder.
      </p>

      <CodeBlock>
        {`
const fooRoutes = Rocon.Path()
  .exact({
    action: () => <p>This is foo</p>
  })
  .route("cat", (route) => route.action(() => <p>I love cats</p>))
  .route("dog", (route) => route.action(() => <p>I love dogs</p>));

const toplevelRoutes = Rocon.Path()
  .exact({
    action: () => <p>I am top page</p>
  })
  .route("foo", (route) => route.attach(fooRoutes))
  .route("bar", (route) => route.action(() => <p>This is bar</p>));
        `}
      </CodeBlock>

      <p>
        In the above example we have two builders <code>fooRoutes</code> and{" "}
        <code>toplevelRoutes</code>, the former defining <code>/</code>,{" "}
        <code>/cat</code> and <code>/dog</code> and the latter defining{" "}
        <code>/</code>, <code>/foo</code> and <code>/bar</code>. Of notable is
        that <code>fooRoutes</code> is attached to the <code>foo</code> route of{" "}
        <code>toplevelRoutes</code> by calling <code>route.attach</code>. This
        means that the routes defined by <code>fooRoutes</code> is attached
        under
        <code>toplevelRoutes</code>'s <code>foo</code> route.
      </p>
      <p>
        Therefore, <code>I love cats</code> should be displayed by accessing{" "}
        <code>/foo/cat</code>. Also, <code>I love dogs</code> should be
        displayed by accessing <code>/foo/dog</code>.
      </p>
      <p>
        Note that <code>fooRoutes</code> need not be directly passed to{" "}
        <code>useRoutes</code>. Attached routes are automatically looked up
        while resolving locations.
      </p>

      <h3>Attaching to Route Records</h3>

      <p>Rocon has another API for attaching a route builder to another.</p>
      <CodeBlock>
        {`
const fooRoutes = Rocon.Path()
  .exact({
    action: () => <p>This is foo</p>
  })
  .route("cat", (route) => route.action(() => <p>I love cats</p>))
  .route("dog", (route) => route.action(() => <p>I love dogs</p>));

const toplevelRoutes = Rocon.Path()
  .exact({
    action: () => <p>I am top page</p>
  })
  .route("foo")
  .route("bar", (route) => route.action(() => <p>This is bar</p>));

toplevelRoutes._.foo.attach(fooRoutes);
        `}
      </CodeBlock>

      <p>
        In this example, we only declare <code>toplevelRoutes</code>'s{" "}
        <code>foo</code> route without attaching anything to it (in this case we
        can omit the callback function of <code>route</code>). After defining{" "}
        <code>toplevelRoutes</code>, we can retrieve the <b>route record</b>
        of the <code>foo</code> route by accessing{" "}
        <code>toplevelRoutes._.foo</code>. It has an <code>attach</code> method
        for attaching a child to that route.
      </p>
      <p>
        As demonstrated above, any Path route builder has an <code>_</code>{" "}
        property which is a collection of route records of all named route in
        it. A route record can be used to attach a child to it. Also, it will be
        used for navigation later in this tutorial.
      </p>

      <p>
        Since a route record's <code>attach</code> method returns what is passed
        as an argument, it allows yet another coding style like this:
      </p>

      <CodeBlock>
        {`
const toplevelRoutes = Rocon.Path()
  .exact({
    action: () => <p>I am top page</p>
  })
  .route("foo")
  .route("bar", (route) => route.action(() => <p>This is bar</p>));

const fooRoutes = toplevelRoutes._.foo.attach(Rocon.Path())
  .exact({
    action: () => <p>This is foo</p>
  })
  .route("cat", (route) => route.action(() => <p>I love cats</p>))
  .route("dog", (route) => route.action(() => <p>I love dogs</p>));

        `}
      </CodeBlock>

      <TutorialNavigator />
    </Fragment>
  );
};
