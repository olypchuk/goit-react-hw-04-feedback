import PropTypes from "prop-types"
const Item = ({ label, quantity }) => <p>{label} :<span> {quantity}</span></p>

export const Statistics=({good, neutral, bad, total, positivePercentage})=> {

  return (<>
      <Item label={'Good'} quantity={good} />
      <Item label={'Neutral'} quantity={neutral}/>
      <Item label={'Bad'} quantity={bad}/>
      <Item label={'Total'} quantity={total} />
      <Item label={'PositiveFeedback'} quantity={ positivePercentage} /> 
      </>)
        
}

Statistics.prototypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  positivePercentage:PropTypes.number.isRequired
}
