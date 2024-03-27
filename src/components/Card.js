import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useFavorite } from '../store/useFavorite'
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
	const {addItem, removeItem} = useFavorite()
	const navigate = useNavigate()
	const showDetail=()=>{
		navigate(`product/${item.id}`)
	}

  return (
	<div className='card' >
		<div className='card-img' onClick={showDetail}>
			<img width="100%"
				src={item.img} alt=""/>
			<FontAwesomeIcon className="favorite2" icon={faHeart} 
				onClick={(e)=>{
					e.stopPropagation();//이벤트 버블링 차단
					addItem(item)}}
			/>
		</div>
		<div className='card-text'>
			<div>{item.choice?"Conscious Choice":"."}</div> 
			<div>{item.title}</div>
			<div>₩{item.price}</div>
			<div>🟢</div>
			<div>{item.new?"신제품":"."}</div>
		</div>

	</div>
  )
}

export default Card