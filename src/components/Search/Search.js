import React, {useState} from 'react'
import styled from 'styled-components'

import {Button, Filter, Flex, Grid, Input, Title, Wrapper} from '../index'

const Form = styled.div`
  width: 686px;
  height: 144px;
  align-items: center;
  margin: 220px auto 0 auto;
  padding: 0;
`

const FilterInfo = styled.div`
  width: 100%;
  max-width: 330px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 1px solid red;
`

const ViewSwitcher = styled.div`
  width: 63px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 1px solid green;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  width: 245px;
  height: 226px;
  margin: 0 0 20px 0;
  padding: 0;
  border: 1px solid;
`

const Search = () => {
  const [query, setQuery] = useState([])

  return (
    <Wrapper display='flex' max={'1040px'} align={'center'} background={'inherit'}>
      <Form>
        <Title fontSize={'36px'} lineHeight={'52px'}>Поиск видео</Title>
        <Flex position='relative' direction='row' height={'52px'} margin={'40px 0 0 0'}>
          <Input
            margin={'0'}
            padding={'14px 70px 13px 15px'}
            type='text'
            placeholder='Что хотите посмотреть?'
          />
          <Button
            position='absolute'
            right={'0'}
            justify='center'
            width={'150px'}
            height={'52px'}
            radius={'0 5px 5px 0'}
            onClick={() => console.log('Searching...')}
          >Найти</Button>
        </Flex>
      </Form>

      {query.length ? <Filter margin={'40px 0 0 0'}>
        <FilterInfo>

        </FilterInfo>
        <ViewSwitcher>

        </ViewSwitcher>
      </Filter> : null}

      {query.length ? <Grid margin={'20px 0 0 0'}>
        <List>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
          <Li></Li>
        </List>
      </Grid> : null}
    </Wrapper>
  )
}

export default Search
