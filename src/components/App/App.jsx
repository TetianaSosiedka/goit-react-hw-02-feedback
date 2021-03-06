import { Component } from 'react';

import { Container } from './App.styled';

import { FeedbackOptions } from '../FeedbackOptions';
import { Notification } from '../Notification';
import { Section } from '../Section';
import { Statistics } from '../Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountFedback = ({ target }) => {
    const stateName = target.dataset.name;

    this.setState(prevState => ({ [stateName]: prevState[stateName] + 1 }));
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={handleCountFedback}
            buttonsName={Object.keys(this.state)}
          />
        </Section>

        {total() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </Container>
    );
  }
}
