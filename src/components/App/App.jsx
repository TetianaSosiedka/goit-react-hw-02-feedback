import { Component } from 'react';

import { Container } from './App.styled';

import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';

const buttons = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountFedback = ({ target }) => {
    const stateName = target.dataset.name;
    if (stateName === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (stateName === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (stateName === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? ((this.state.good * 100) / this.countTotalFeedback()).toFixed(0)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const handleCountFedback = this.handleCountFedback;
    const total = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage;

    return (
      <Container>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          onLeaveFeedback={handleCountFedback}
          buttonsName={buttons}
        />
        <h3>Statistics</h3>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Container>
    );
  }
}