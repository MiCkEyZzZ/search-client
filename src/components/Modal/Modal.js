import React from 'react'

import {Button, Flex, Input, Label, Title, Wrapper} from '../index'

const Modal = ({onOpenModal}) => {
  return (
    <Wrapper position='fixed' display='inset' max={'510px'} margin={'180px auto 0 auto'} padding={'36px 40px 36px 40px'} radius={'10px'} shadow={'1px 2px 18px rgba(0, 0, 0, .15)'}>
      <Title fontSize={'24px'} margin={'0 auto 36px auto!important'}>Сохранить запрос</Title>
      <Flex direction='column'>
        <Label color={({theme}) => theme.labelText} htmlFor='query'>Запрос</Label>
        <Input
          id='query'
          type='text'
          autoComplete='off'
          margin={'5px 0 20px 0'}
          padding={'1rem 1.5rem 1rem 1.5rem'}
          placeholder='Ваш запрос'
        />
      </Flex>
      <Flex direction='column'>
        <Label color={({theme}) => theme.labelText} htmlFor='title'>* Название</Label>
        <Input
          id='title'
          type='text'
          autoComplete='off'
          margin={'5px 0 20px 0'}
          padding={'1rem 1.5rem 1rem 1.5rem'}
          placeholder='Укажите название'
        />
      </Flex>
      <Flex direction='column'>
        <Label color={({theme}) => theme.labelText}>Сортировать по</Label>
        <Input
          margin={'5px 0 20px 0'}
          padding={'1rem 1.5rem 1rem 1.5rem'}
          type='text'
        />
      </Flex>
      <Flex direction='column'>
        <Label color={({theme}) => theme.labelText}>Максимальное количество</Label>
        <Input
          margin={'5px 0 20px 0'}
          padding={'1rem 1.5rem 1rem 1.5rem'}
          type='text'
        />
      </Flex>
      <Flex justify='space-between' margin={'26px 0 0 0'}>
        <Button
          width={'210px'}
          height={'52px'}
          justify='center'
          textAlign={'center'}
          color={'#1390e5'}
          background={'#ffffff'}
          border={'1px solid #1390e5'}
          onClick={onOpenModal}
        >Не сохранять</Button>
        <Button
          width={'210px'}
          height={'52px'}
          justify='center'
          textAlign={'center'}
          save
        >Сохранить</Button>
      </Flex>
    </Wrapper>
  )
}

export default Modal
