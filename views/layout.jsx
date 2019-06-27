import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Natural Language Classifier applies deep learning techniques to make predictions about the best predefined classes for short sentences or phrases.';
const TERMS_OF_USE_URL = 'https://watson-developer-cloud.github.io/terms?name=Natural%20Language%20Classifier%20Demo';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
    }
  }

  componentDidMount() {
    if (window && window.location.search.includes('hide_header')) {
      this.setState({ showHeader: false });
    }
  }

  render() {
    const { showHeader, children } = this.props;

    return (
      <html lang="en">
        <head>
          <title>
            Natural Language Classifier
          </title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="og:title" content="Natural Language Classifier Demo" />
          <meta name="og:description" content={DESCRIPTION} />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <link rel="stylesheet" href="/css/watson-react-components.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          {showHeader ? <Header
            mainBreadcrumbs="Natural Language Classifier"
            mainBreadcrumbsUrl="https://www.ibm.com/watson/services/natural-language-classifier/"
          /> : null }
          { showHeader ?
          <Jumbotron
            serviceName="Natural Language Classifier - Intent Classification"
            repository="https://github.com/watson-developer-cloud/natural-language-classifier-nodejs"
            documentation="https://cloud.ibm.com/docs/services/natural-language-classifier/getting-started.html"
            apiReference="https://cloud.ibm.com/apidocs/natural-language-classifier?language=node"
            version="GA"
            serviceIcon="/images/service-icon.png"
            startInBluemix="https://cloud.ibm.com/registration/?target=%2Fcatalog%2Fservices%2Fnatural-language-classifier%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409"
            description={DESCRIPTION}
          /> : null }
          <div className="_container _container_large gdpr-info">
            By using this application, you agree to the &nbsp;
            <a target="_blank" rel="noreferrer noopener" href={TERMS_OF_USE_URL}>
                  Terms of Use
            </a>
          </div>
          <div id="root">
            {children}
          </div>
          <script type="text/javascript" src="js/bundle.js" />
          <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
