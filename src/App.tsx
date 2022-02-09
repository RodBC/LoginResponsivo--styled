import React from 'react';
import Login from './Components';
import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR'
import { ThemeProvider } from 'styled-components';
import {theme} from './Styles/Theme'
import { GlobalStyle } from './Styles/Global'
function App() {
  return (
    <ConfigProvider locale={ptBr}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Login />
          <GlobalStyle/>
        </div>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
