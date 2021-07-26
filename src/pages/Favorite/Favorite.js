import React from 'react'

import {Button, Flex, Title, Wrapper} from '../../components'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 396px;
  list-style: none;
  margin: 40px 0 0 0;
  padding: 0;
  background: inherit;
`

const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 49px;
  align-items: center;
  margin: 0 0 1px 0;
  padding: 0 20px 0 20px;
  background: ${({theme}) => theme.favoriteBackground};
  
  &:last-child {
    margin: 0;
  }
`

const Link = styled.a`
  width: 100%;
  max-width: 749px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  align-items: center;
  color: ${({theme}) => theme.text};
`

const Favorite = () => {
  return (
    <Wrapper display='block' max={'1040px'} minHeight={'720px'} margin={'120px auto'} background={'inherit'}>
      <Flex direction='column'>
        <Title justify={'unset'} fontSize={'28px'} lineHeight={'40px'} margin={'0'} align={'center'}>Избранное</Title>
        <List>
          {Array(9).fill(' ').map((item, i) => {
            return (
              <Li
                key={i}
              >
                <Link href='#'>Видео</Link>
                <Flex justify='space-between' width={'151px'} align='center'>
                  <Button
                    width={'auto'}
                    fontSize={'14px'}
                    lineHeight={'20px'}
                    color={'#1390e5'}
                  >Изменить</Button>
                  <Button
                    width={'auto'}
                    fontSize={'14px'}
                    lineHeight={'20px'}
                    justify={'space-between'}
                    color={'#ff0000'}
                  >Удалить</Button>
                </Flex>
              </Li>
            )
          })}
        </List>
      </Flex>
    </Wrapper>
  )
}

export default Favorite
