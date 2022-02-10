import {
  Form,
  Input,
} from 'antd';
import { MailOutlined, LockOutlined   } from '@ant-design/icons';

import {
  SideImage,
  LogoCamp,
  LoginLogo,
  Mail,
  Eye,
  Lock,
  } from '../../Assets';

import React from 'react';
import { Background, Container, InnerLogin, Logo, InnerInnerLogin, FormStyled, CheckboxStyled, Enter, Register } from './style';

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

              <Form.Item
              label='E-mail'
              >
                <Input className='form-item' placeholder="Digite seu e-mail" prefix={<img src={Mail} />} />
              </Form.Item>

              <Form.Item
              label='Senha'
              >
                <Input.Password className='form-item' placeholder="Digite sua senha" prefix={<img src={Lock} />} />
              </Form.Item>

              {/* <CheckboxStyled>
                <p className='lembre'>lembre-me</p>
                <p>esqueci minha senha</p>
              </CheckboxStyled> */}

              <Enter>
                Entrar
              </Enter>

              <Register>
                <p>Ainda não tem uma conta?</p>
                <p className='registre-se'>Registre-se</p>
              </Register>

              </FormStyled>
            </InnerInnerLogin>
        </InnerLogin>        
      </Background>
      <img src={SideImage} className='SideImage'/>
    </Container>
    )
}