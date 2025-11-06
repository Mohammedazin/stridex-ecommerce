import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ p }) {
  return (
    <div className="border rounded p-4">
      <img src={p.images?.[0] || 'https://via.placeholder.com/300'} alt={p.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-semibold">{p.title}</h3>
      <p className="text-sm">₹{p.price}</p>
      <Link to={`/product/${p._id}`} className="text-blue-600 text-sm">View</Link>
    </div>
  )
}
