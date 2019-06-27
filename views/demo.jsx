import React, { Component } from 'react';
import $ from 'jquery';

import { Input } from './input.jsx';
import Output from './output.jsx';

export class Demo extends Component {
  constructor() {
    super();
    this.onClassify = this.onClassify.bind(this);
    this.state = {
      data: null, // the /classify response
      error: null, // the error from calling /classify
    };
  }

  onClassify(text) {
    $.post('/api/classify', { text })
      .done(data => this.setState({ data }))
      .fail((error) => {
        let errorMessage = 'There was a problem with the request, please try again';
        if (error.responseJSON && error.responseJSON.error) {
          errorMessage = error.responseJSON.error;
        }
        this.setState({ error: errorMessage });
        console.error(error);
      })
      .always(() => {
        $('html, body').animate({
          scrollTop: $('.output-container').offset().top,
        }, 500);
      });
  }

  render() {
    const { data, error } = this.state;
    return (
      <section className="_container _container_large">
        <div className="row">
          <Input data={data} onClassify={this.onClassify} />
          <Output data={data} error={error} />
        </div>
      </section>
    );
  }
}

Demo.propTypes = {
};

export default Demo;
