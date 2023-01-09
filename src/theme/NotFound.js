import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page not found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3 page-not-found-content">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  Page not found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page">
                  We could not find what you were looking for. 
                  The link to this page may be incorrect or out of date. 
                </Translate>
              </p>
              <p
                id="theme.NotFound.p2"
                description="The 2nd paragraph of the 404 page">
                Please <a className={styles.pageLink} href="https://github.com/emnify/product-docs/issues/new" target="_blank" rel="noopener noreferrer">open an issue on GitHub</a> or <a className={styles.pageLink} href="mailto:docs@emnify.com">contact our documentation team</a> if you're struggling to find what you need.
              </p>
              <Link to="/product-docs" className={styles.homepageButton}>Go to homepage</Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
