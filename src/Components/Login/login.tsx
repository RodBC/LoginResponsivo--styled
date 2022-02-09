import {
  Form,
  Input,
} from 'antd';
import {
  SideImage,
  LogoCamp,
  LoginLogo,
  Mail,
  Eye,
  Lock,
  } from '../../Assets';

import React from 'react';
import { Background, Container, InnerLogin, Logo, InnerInnerLogin, FormStyled } from './style';

export const Login = () => {
  return(
    <Container>
      <Background>
          <Logo>
            <img src={LogoCamp} alt="logo"/>
            <p>camp.in</p>
          </Logo>
        <InnerLogin>
            <InnerInnerLogin>
              <div className='title'>
              <img src={LoginLogo} alt="login" />
              <p>Faça seu login</p>
              </div>
              <p className='paragroinicial'>Entre com suas informações de cadastro.</p>

              <FormStyled>
                
              </FormStyled>


            </InnerInnerLogin>
        </InnerLogin>        
      </Background>
      <img src={SideImage} className='SideImage'/>
    </Container>
    )
}