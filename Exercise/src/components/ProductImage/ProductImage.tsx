import React from 'react'
import { Image, View } from 'react-native'

const ProductImage = ({ img }) => {

  return (
    <Image source={{ uri: img.modelImg }} style={{height:100,width:200}} />
  )
}

export default ProductImage