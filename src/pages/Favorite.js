import React from 'react'
import { useFavorite } from '../store/useFavorite'

const Favorite = () => {
	const {favoriteList} = useFavorite()
	console.log('favoriteList : ', favoriteList)
  return (
	<div>Favorite</div>
  )
}

export default Favorite