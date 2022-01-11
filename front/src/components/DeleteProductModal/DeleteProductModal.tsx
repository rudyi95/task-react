import React from 'react'
import styles from './DeleteProductModal.module.scss'

interface IDeleteProductModal {
  isModalOpened: boolean
  setIsModalOpened: (boolean: boolean) => void
  productId: number
}

const DeleteProductModal: React.FC<IDeleteProductModal> = ({
  setIsModalOpened,
  productId,
  isModalOpened,
}) => {
  const onClick = () => {
    setIsModalOpened(false)
    //запит удалити
  }

  return (
    <>
      <button
        type="button"
        className={`${styles.backFon} ${isModalOpened && styles.opened}`}
        onClick={() => setIsModalOpened(false)}
        aria-label="Open Modal Window"
      />
      <div
        className={`${styles.createArea} ${
          isModalOpened && styles.openedCreate
        }`}
      >
        <div className={styles.closeIconPosition}>
          <button type="button" onClick={() => setIsModalOpened(false)}>
            <div className={styles.closeIcon} />
          </button>
        </div>
        <button type="button" onClick={onClick}>
          delete
        </button>
      </div>
    </>
  )
}

export default DeleteProductModal
