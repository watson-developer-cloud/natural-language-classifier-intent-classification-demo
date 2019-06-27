import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.onSampleQuestionClick = this.onSampleQuestionClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  }

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  }

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  }

  render() {
    return (
      <div>
        <h2 className="base--h2 my-class">
          Why did the patient visit today? 
        </h2>
        <p className="base--p my-class">
          Watch the Natural Language Classifier determine the intent of a patient's visit from just a short statement about their symptoms!
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter a statement about a symptom or try a sample statement below! *"
              className="base--input question-input--input"
              required
            />
          </div>
          <div className="question-input--button-container">
            <button
              type="button"
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Classify
            </button>
          </div>
          <div className="disclaimer--message">
            <h6 className="base--h6">
              * This system is for demonstration purposes only and is not intended to process
              Personal Data. No Personal Data is to be entered into this system as it may not
              have the necessary controls in place to meet the requirements of the General Data
              Protection Regulation (EU) 2016/679.
            </h6>
          </div>
        </div>
        <h3 className="base--h3 my-class">
          Sample questions
        </h3>

        <div className="sample-questions">
          <div className="sample-questions--left">
            <ul className="base--ul">
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  &quot;My knee was hurting a lot when I wake up in the morning&quot;
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  &quot;I feel very dizzy after getting out of a chair&quot;
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  &quot;I accidentally stepped in a piece of glass, so I rushed here&quot;
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  &quot;My eyes get very dry and I cannot see well&quot;
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  &quot;The rash is made worse when using this type of soap&quot;
                </a>
              </li>
            </ul>
          </div>
          <div className="sample-questions--right">
            <p className="base--p">
              The classifier often scores well with terms that it hasn&apos;t
              been trained on. In the sample questions, the words &quot;joint,&quot; or
              &quot;fever,&quot; are not part of the&nbsp;
              <a
                className="base--a"
                href="https://github.com/watson-developer-cloud/natural-language-classifier-nodejs/blob/master/training/weather_data_train.csv"
                target="_blank"
                rel="noopener noreferrer"
              >
                training data
              </a>
              , yet the classifier correctly handles questions about them.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  data: PropTypes.object, // eslint-disable-line
  onClassify: PropTypes.func.isRequired,
};

export default Input;
