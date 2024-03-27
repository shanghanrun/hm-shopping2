import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useFavorite } from '../store/useFavorite'
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
	const {addItem, removeItem} = useFavorite()
	const navigate = useNavigate()
	const showDetail=()=>{
		navigate(`product/${item.id}`)
	}
	const [isClicked, setIsClicked] = useState(false);


  return (
	<div className='card' onClick={showDetail} >
		<div className='card-img' >
			<img width="100%"
				src={item.img} alt=""/>
			<FontAwesomeIcon className={isClicked ? 'favorite2 clicked' : 'favorite2'}
				icon={faHeart} 
				onClick={(e)=>{
					e.stopPropagation();//이벤트 버블링 차단
					setIsClicked(true); // 클릭 상태 업데이트
            		setTimeout(() => setIsClicked(false), 500); // 0.5초 후 클릭 상태 초기화
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