import React  from "react";
import { FcSms } from "react-icons/fc";
import { Container } from "./Container/Container.styled";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { useState } from "react";

export function App() {
const [good,setGood]=useState(0)
const [neutral,setNeutral]=useState(0)
const [bad, setBad] = useState(0)
const objState = {
    good,bad,neutral
  }
  const onLeaveFeedback = e => {
    const variants = e.currentTarget.name
    if (variants === 'good') {
      setGood(good + 1)
    }
    if (variants === 'neutral') {
      setNeutral(neutral + 1)
  
    }
    if (variants === 'bad') {
      setBad(bad+1)
    }

  }
  const totalCount = () => good + neutral + bad

  const countPositiveFeedbackPercentage = () => {

    const percent = good /totalCount() * 100 

    return Math.ceil(percent)+ '%'
  }
  const dataTotal=totalCount()
  const countPercentage = countPositiveFeedbackPercentage()
  
  return (<Container>
      
      <Section title={'Please leave feedback'} >
      <FeedbackOptions options={Object.keys(objState)} onLeaveFeedback={onLeaveFeedback} ></FeedbackOptions>
      </Section>

      <Section title={'Statistics'}>
        {dataTotal?
          <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={dataTotal}
        positivePercentage={countPercentage}
          >
          </Statistics>
          : <Notification message="There is no feedback" child={<FcSms/>} />}
      </Section>
   </Container>)
}


