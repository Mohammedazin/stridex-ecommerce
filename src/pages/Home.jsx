import React, { useEffect, useState } from 'react'
import API from '../api'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1 className="text-2xl mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(p => <ProductCard key={p._id} p={p} />)}
      </div>
    </div>
  )
}
