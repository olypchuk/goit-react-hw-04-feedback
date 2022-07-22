
const Item = ({ label, quantity }) => <p>{label} :<span> {quantity}</span></p>

export const Statistics=({good, neutral, bad, total, positivePercentage})=> {

  return (<>
      <Item label={'GOOD'} quantity={good} />
      <Item label={'NEUTRAL'} quantity={neutral}/>
      <Item label={'BAD'} quantity={bad}/>
      <Item label={'TOTAL'} quantity={total} />
      <Item label={'PositiveFeedback'} quantity={total && positivePercentage} /> 
      
      </>)
        
}
