import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../api'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data))
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="max-w-3xl mx-auto">
      <img src={product.images?.[0] || 'https://via.placeholder.com/600'} alt={product.title} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ₹{product.price}</p>
      {/* Add selection for size/material and Add to Cart logic here */}
    </div>
  )
}
