import React, {useState} from 'react'

import {Modal, Search, Wrapper} from '../../components'

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <Wrapper
      display='flex'
      direction='column'
      justify={'unset'}
      max={'1040px'}
      minHeight={'720px'}
      align={'center'}
      background={'inherit'}
      margin={'0 auto'}>
      <Search />
      {modalOpen && (
        <Modal
          onOpenModal={handleOpenModal}
        />
      )}
    </Wrapper>
  )
}

export default Home
