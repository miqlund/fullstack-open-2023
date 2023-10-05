import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{ props.header }</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const { good, neutral, bad, sum, average, positive } = props;

  return (
    <div>
      {sum === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </div>
      )}
    </div>
  );
}

const StatisticLine = (props) => {
console.log(props);
  return (
    <table>
    <tbody>
      <tr>
        <td>{props.text} {props.value}</td>
      </tr>
    </tbody>
  </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header1 = 'Give feedback'
  const header2 = 'Statistics'
  const sum = good + neutral + bad
  const totalSum = good * 1 + bad * -1 + neutral * 0
  const average = totalSum / sum
  const positive = (good / sum) * 100

  const setGoodValue = newGoodValue => {
    console.log('good value now', newGoodValue)
    setGood(newGoodValue)
  }

  const setNeutralValue = newNeutralValue => {
    console.log('neutral value now', newNeutralValue)
    setNeutral(newNeutralValue)
  }

  const setBadValue = newBadValue => {
    console.log('bad value now', newBadValue)
    setBad(newBadValue)
  }

  return (
    <div>
      <Header header ={header1} />
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <Header header ={header2} />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        sum={sum}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App