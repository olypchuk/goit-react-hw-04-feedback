import styled from "styled-components"
export const Notification = ({ message,children }) => <NotificationStyled>{message}{ children}</NotificationStyled>
const NotificationStyled=styled.p`
    font-size: 26px;
    color: #8b8484;
`


