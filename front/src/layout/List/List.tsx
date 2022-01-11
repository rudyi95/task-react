import Product from 'components/Product/Product'
import React, { useRef, useState } from 'react'
import styles from './List.module.scss'

const product = [
  {
    id: 1,
    imageUrl: 'some url here',
    name: 'Apple',
    count: 1,
    size: {
      width: 200,
      height: 200,
    },
    weight: '200g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 2,
    imageUrl: 'some url here',
    name: 'Watermelon',
    count: 2,
    size: {
      width: 200,
      height: 200,
    },
    weight: '2000g',
    comments: ['CommentModel', 'CommentModel'],
  },
  {
    id: 3,
    imageUrl: 'some url here',
    name: 'Orange',
    count: 3,
    size: {
      width: 200,
      height: 200,
    },
    weight: '300g',
    comments: ['CommentModel', 'CommentModel'],
  },
]

const List: React.FC = ({ children }) => {
  const productInputRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')

  return (
    <div className={styles.back}>
      <div className={styles.position}>
        <h2>Products List</h2>
        <form
          onChange={(e) => {
            e.preventDefault()
            productInputRef.current && setText(productInputRef.current.value)
          }}
        >
          <input
            type="text"
            placeholder="Product"
            className={styles.addProduct}
            ref={productInputRef}
          />
        </form>

        <div>
          {product.map((data) => (
            <Product
              key={data.id}
              nama={data.name}
              count={data.count}
              weight={data.weight}
              productId={data.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
