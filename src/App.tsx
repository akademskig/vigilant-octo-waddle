import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationPage from './pages/registration.page';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';


const GlobalStyle = createGlobalStyle`
  body {
     box-sizing: border-box;
    font-family: ${({theme}:{theme: {fonts: any}}) => theme.fonts.family};
  }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <RegistrationPage></RegistrationPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
