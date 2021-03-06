import styled from 'styled-components'
import {Form, Checkbox} from 'antd'

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
    @media (max-width: 1000px){
        flex-direction: column;
        font-size: 10px;
        img{
            display: none;
        }
    }
    justify-content: center;
    align-items: center;
    width: 60%;
    background-color:#24221F;
    height: 70vh;
    border-radius: 4px;
    @media (max-width: 1000px){
    background-color: #191816;
    }
    .paragrafoinicial{
        font-weight: 500;
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
    width: 75%;
    
`
export const FormStyled = styled(Form)`
  margin-top: 20px;
  gap:10px;
  display: flex;
  flex-direction: column;
  .form-item{
    display: flex;
    align-items: center;
    height: 40px;
}

  Input{
      width: 100%;
      background-color: transparent;
      border: 1px solid #868686;
      border-radius: 4px;
      box-sizing: border-box;
      height: 30px;
}
    .senha{
        display: flex;
        p {
            margin-left: 130px;
            display: flex;
            color: #FFC632;
        }
        span{
            margin-left: 10px;
        }
        .checkbox{
            width: 25px;
            height: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;

        }
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #D4CCB6;
  }
`
export const Register = styled.div`
    justify-content: center;
    display: flex;
    gap: 10px;
    color: #FFC632; 
    font-size: 14px;
    text-align: 'center';
    margin-top: 10px;
    .registre-se{
    font-weight: 600;
    cursor: 'pointer' 
  }

`


export const Enter = styled.button`
  margin-top: 10px;
  height: 50px;
  border: none;
  background-color: #FFC632;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  cursor: pointer;
  :hover {
    background-color: #d1a124;
    transition: .5s;
  }
`;
