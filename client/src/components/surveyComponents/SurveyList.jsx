import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  countStatistics(survey) {
    let sumOfResults = 0;
    let average = 0;
    let responders = 0;
    let responseRate = 0;

    //itterate over results and sum response values and count responders
    for (let i = 1; i <= 5; i++) {
      if (survey[i] > 0) {
        sumOfResults += survey[i] * i;
        responders += survey[i];
      }
    }

    average = (sumOfResults / responders).toFixed(1);
    responseRate = (responders / survey.numberOfRecipients * 100).toFixed(1);

    return {
      average,
      responseRate
    };
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Recipients: {survey.numberOfRecipients}</a>
            <a>Response rate: {this.countStatistics(survey).responseRate}%</a>
            <a>Average: {this.countStatistics(survey).average} stars</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
