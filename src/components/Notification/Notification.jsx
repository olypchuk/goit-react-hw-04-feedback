import styled from "styled-components"
import PropTypes from "prop-types"
export const Notification = ({ message,child }) => <NotificationStyled>{message}{ child}</NotificationStyled>
const NotificationStyled=styled.p`
    font-size: 26px;
    color: #8b8484;
`
Notification.propTypes = {
    message: PropTypes.string.isRequired,
    child:PropTypes.element.isRequired
}

