import React, { Component } from "react";
import { FcSms } from "react-icons/fc";
import { Container } from "./Container/Container.styled";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";

export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  onLeaveFeedback = e => {
    const variants=e.currentTarget.name
    this.setState({
      [variants]:this.state[variants]+1
    })
  }

  countTotalFeedback = () =>this.state.good+this.state.neutral+this.state.bad 
 
  countPositiveFeedbackPercentage = () => {
    const {good,neutral,bad}=this.state
    const percent = good / (good + neutral +bad) * 100 

    return Math.ceil(percent)+ '%'
  }
  render() {
    const { good, neutral, bad } = this.state
    
    return (<Container>
      
      <Section title={'Please leave feedback'} >
       <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} ></FeedbackOptions>
      </Section>

      <Section title={'Statistics'}>
        {this.countTotalFeedback()?
          <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
          >
          </Statistics>
          : <Notification message="There is no feedback" child={<FcSms/>} />}
      </Section>
   </Container>)
  }
}
