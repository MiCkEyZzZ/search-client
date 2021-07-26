import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: auto;
    margin: 0;
    padding: 0;
    z-index: -1;
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.body};
    transition: all 0.25s linear;
  }
  
  .hide {
    display: none !important;
    transition-duration: .5s;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  *,
  *::after,
  *::before {
    text-decoration: none;
    box-sizing: border-box;
  }
`

const Logo = styled.img`
  display: flex;
  width: 88px;
  height: 88px;
  align-items: center;
  margin: 0 auto 40.6px auto;
  padding: 0;
`

const StyleForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 510px;
  margin: 0;
  padding: 48.79px 88px 60px 88px;
  background: ${({theme}) => theme.formBackground};
  border: 1px solid rgba(39, 39, 39, 0.1);
  border-radius: 5px;
`

const EyeButton = styled.button`
  position: absolute;
  top: 44px;
  right: 15px;
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  align-items: center;
  margin: 0;
  padding: 0;
  background: inherit;
  cursor: pointer;
  border: inherit;
`

const AuthLink = styled(Link)`
  color: ${({theme}) => theme.text};
`

const EyeIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  z-index: 1;
`

const ErrorText = styled.span`
  position: relative;
  bottom: 15px;
  left: 5px;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: #ff0000;
  z-index: 1;
`


export {
  GlobalStyles,
  Logo,
  StyleForm,
  EyeButton,
  AuthLink,
  EyeIcon,
  ErrorText
}
