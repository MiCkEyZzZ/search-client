import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/sibedev-logo.svg'
import {links} from '../../utils/common'

import {Flex} from '../index'

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  align-items: center;
  margin: 0;
  padding: 0;
  background: ${({theme}) => theme.headerBackground};
  border-bottom: 1px solid ${({theme}) => theme.headerBorder};
`

const LogoIcon = styled.img`
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  align-items: center;
  margin: 0;
  padding: 0;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 0 24px;
  padding: 0;
`

const ListMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Li = styled.li`
  display: flex;
  justify-content: center;
  height: 80px;
  align-items: center;
  margin: 0;
  padding: 0 20px 0 20px;
`

const ButtonLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 16px;
  height: 80px;
  line-height: 28px;
  font-weight: normal;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #1390e5;
  border-bottom: 2px solid transparent;
  outline: none;

  &.active {
    color: #1390e5;
    border-bottom: 2px solid #1390e5;
    opacity: 1;
  }
`

const renderLinks = () => {
  return links.map((link, i) => {
    return (
      <Li
        key={`${link} ${i}`}
      >
        <ButtonLink
          to={link.to}
          exact={link.exact}
          activeClassName='active'
        >
          {link.label}
        </ButtonLink>
      </Li>
    )
  })
}

const PrimaryNav = () => {
  return (
    <Navigation>
      <ListMenu>
        {renderLinks()}
      </ListMenu>
      <ListMenu>
        <Li>
          <ButtonLink
            to='/login'
          >
            Выйти
          </ButtonLink>
        </Li>
      </ListMenu>
    </Navigation>
  )
}

const MainHeader = () => {
  return (
    <Header>
      <Flex width={'100%'} max='1040px' align='center'>
        <Link to="/">
          <LogoIcon src={logo} />
        </Link>
        <PrimaryNav />
      </Flex>
    </Header>
  )
}

export default MainHeader
