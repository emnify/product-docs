import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

// eslint-disable-next-line
export default function NotFoundContent({ className }) {
  return (
    <main className={clsx("container margin-vert--xl", className)}>
      <div className="row">
        <div className="col col--6 col--offset-3 page-not-found-content">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page"
            >
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              // eslint-disable-next-line
              description="The first paragraph of the 404 page"
            >
              We could not find what you were looking for. The link to this page
              may be incorrect or out of date.
            </Translate>
          </p>
          <p
            id="theme.NotFound.p2"
            // eslint-disable-next-line
            description="The 2nd paragraph of the 404 page"
          >
            Please{" "}
            <a
              href="https://github.com/emnify/product-docs/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              open an issue on GitHub
            </a>{" "}
            or{" "}
            <a href="mailto:docs@emnify.com">contact our documentation team</a>{" "}
            if you are struggling to find what you need.
          </p>
          <Link to="/" className="button primary-button-large-text-only">
            Go to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
