import React, {useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'

import hideEyeIcon from '../../assets/hide-icon.svg'
import logo from '../../assets/logo.png'
import showEyeIcon from '../../assets/show-icon.svg'
import {validators} from '../../utils/common'

import {AuthLink, EyeButton, EyeIcon, Logo, StyleForm} from '../../styles/global'
import {Button, Flex, Input, Label, Title, Wrapper} from '../../components'

function Form() {
  const {user} = useSelector(state => state.dataAuth)
  const {register, formState: {errors}, handleSubmit} = useForm()
  const [type, setType] = useState('password')

  const toggleType = useCallback(() => {
    type ? setType('') : setType('password')
  }, [type])

  const onSubmit = (data) => console.log(data)

  return (
    <StyleForm onSubmit={handleSubmit(onSubmit)}>
      <Logo src={logo} />
      <Title fontSize={'18px'} align={'center'} textAlign={'center'} margin={'32px 0 20px 0'}>Вход</Title>
      <Flex direction='column'>
        <Label htmlFor='email'>Адрес эд. почты</Label>
        <Input
          id='email'
          name='email'
          autoComplete="off"
          type={user.email}
          margin={'5px 0 20px 0'}
          padding={'1rem 1.5rem 1rem 1.5rem'}
          back={errors.email && '#f8e2e2'}
          borderWidth={errors.email && '1px 1px 1px 10px'}
          borderStyle={errors.email && 'solid'}
          borderColor={errors.email && '#f58989'}
          {...register('email', {
            ...validators,
            pattern: {
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
              message: 'Please enter correct email'
            }
          })}
        />
      </Flex>
      <Flex direction='column' position='relative'>
        <Label htmlFor='password'>Пароль</Label>
        <Input
          id='password'
          name='password'
          autocomplete="off"
          type={type}
          margin={'5px 0 20px 0'}
          padding={'1rem 1.5rem 1rem 1.5rem'}
          back={errors.password && '#f8e2e2'}
          borderWidth={errors.password && '1px 1px 1px 10px'}
          borderStyle={errors.password && 'solid'}
          borderColor={errors.password && '#f58989'}
          {...register('password', {
            ...validators,
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&-_])[A-Za-z\d@$!%*#?&]{8,20}$/i,
              message: 'Password should not be less than 8 symbols'
            }
          })}
        />
        <EyeButton
          type='button'
          onClick={toggleType}
        >
          {type ? <EyeIcon src={hideEyeIcon} /> : <EyeIcon src={showEyeIcon} />}
        </EyeButton>
      </Flex>
      <Flex direction='row' align='center' justify='space-between'>
        <Button
          type='submit'
          justify='center'
          width={'172px'}
          height={'56px'}
        >Войти</Button>
        <AuthLink
          to='/registration'
        >Создать аккаунт</AuthLink>
      </Flex>
    </StyleForm>
  )
}

const Login = () => {
  return (
    <Wrapper justify='center' max={'inset'} width={'100%'} minHeight={'100vh'} background={'inherit'} align='center'>
      <Form />
    </Wrapper>
  )
}

export default Login
