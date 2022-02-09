import styled from 'styled-components'
import {Form} from 'antd'

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    height: 100vh;
    width: 100%;
    display: flex;
    @media (max-width:1000px){
        .SideImage{    
            display: none;
        }
    }
`
export const Logo = styled.div`
    display: flex;
    position: fixed;
    top: 30px;
    left: 30px;
` 
export const Background = styled.div`
    font-family: 'Poppins';
    background-color: #191816;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #D5CCB6;
    height: 100vh;
`

export const InnerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    background-color:#24221F;
    height: 65vh;
    border-radius: 4px;
    @media (max-width: 1000px){
    background-color: #191816;
    }
`
export const InnerInnerLogin = styled.div`
    .title{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px; 
        font-weight: 600;
        color: #D4CCB6;
        font-size: 18px;
    }
  .password-info{
    display: flex;
    font-weight: 600;
    color: #FFC632;
    font-size: 14px;
    gap: 10px;
    justify-content: space-between;
}     
`
export const FormStyled = styled(Form)`
  margin-top: 20px;
  label{
    color: #AFB6C2;
  }
`