import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ModalBackdrop from './Backdrop'
import ModalBox, { ModalBoxProps } from './Box'
import { ModalContainer } from './styles'

interface ModalProps extends ModalBoxProps {
  showModal: boolean
  // eslint-disable-next-line no-unused-vars
  disposedOnce?: (wasDisposed: boolean) => void
  onDispose?: () => void
}

const Modal: React.FC<ModalProps> = React.memo(
  ({ showModal: isShowing, title, message, disposedOnce, onDispose }) => {
    const [showModal, setShowModal] = useState(isShowing)

    useEffect(() => {
      if (isShowing) {
        setShowModal(true)
      }
    }, [isShowing])

    const disposeModal = () => {
      setShowModal(false)
      if (disposedOnce) {
        disposedOnce(true)
      }
      if (onDispose) {
        onDispose()
      }
    }

    if (showModal) {
      const domNode = document.getElementById('modal')

      if (!domNode) {
        return null
      }

      return ReactDOM.createPortal(
        <ModalContainer>
          <ModalBackdrop dispose={disposeModal}>
            <ModalBox title={title} message={message} />
          </ModalBackdrop>
        </ModalContainer>,
        domNode
      )
    }

    return null
  }
)

export default Modal
