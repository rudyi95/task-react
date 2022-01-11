import DeleteProductModal from 'components/DeleteProductModal/DeleteProductModal'
import React, { useState } from 'react'
import styles from './Product.module.scss'

interface IProduct {
  nama: string
  count: number
  weight: string
  productId: number
}

const Product: React.FC<IProduct> = ({ nama, count, weight, productId }) => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <div className={styles.backFon}>
      <DeleteProductModal
        setIsModalOpened={setIsModalOpened}
        productId={productId}
        isModalOpened={isModalOpened}
      />
      <div className={styles.infoField}>
        <div className={styles.product}>
          <p className={styles.productName}>{nama}</p>
          <p className={styles.productWeight}>{weight}</p>
        </div>
        <div className={styles.buttonPosition}>
          <button
            type="button"
            onClick={() => setIsModalOpened(!isModalOpened)}
          >
            <div className={styles.delete} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
