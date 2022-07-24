import { Button } from "components/Buttons/Buttons.styled"
import  PropTypes  from "prop-types"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (<div>
        {options.map(option => <Button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}>
            {option}
        </Button>)}
   
   
        </div>)
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired   
    
}