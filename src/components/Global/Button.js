import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ type, value, hover = false, link = false, url = '#', size = '', bgColor = 'bg-blue', textColor = 'text-white' }) {
  return (
    <>
      {
        !link ? (
          <button type={type} className={`px-5 py-2 font-yekan-bakh font-bold ${textColor} ${bgColor} rounded-xl tracking-wide  transition duration-200 text-base ${hover ? 'hover:bg-gray-5' : ''} ${size}`}>
            {value}
          </button>
        ) : (
          <button type={type} className={`px-5 py-2 font-yekan-bakh font-bold ${textColor} ${bgColor} rounded-xl tracking-wide  transition duration-200 text-base ${hover ? 'hover:bg-gray-5' : ''} ${size}`}>
            <Link to={url}>{value}</Link>
          </button>
        )
      }
    </>
  )
}
