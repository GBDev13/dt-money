import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root onOpenChange={setDialogIsOpen} open={dialogIsOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal setDialogIsOpen={setDialogIsOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
