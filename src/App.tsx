import React from 'react';
import RegistrationPage from './pages/PRegistration';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import 'react-notifications/lib/notifications.css';
import { TranslationProvider } from './translation/Translation.provider';

const GlobalStyle = createGlobalStyle`
  * {
     box-sizing: border-box;
     font-family: ${({ theme }: { theme: { fonts: any } }) => theme.fonts.family};
     font-size: 1em;
     @media(max-width: 800px){
       font-size: 14px
     }
  }
  body{
    margin: 0;
  }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <TranslationProvider>
          <RegistrationPage></RegistrationPage>
        </TranslationProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
