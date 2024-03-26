import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useFavorite } from '../store/useFavorite'

const Card = ({item}) => {
	const {addItem, removeItem} = useFavorite()
	const [active, setActive] = useState('')
	function handleFavorite(item, id){
		const favorite2 = document.querySelector('#favorite2')
		if(favorite2.classList.contains('active')){
			favorite2.classList.remove('active')
			removeItem(id)
		} else{
			favorite2.classList.add('active')
			addItem(item)
		}
	}

	useEffect(() => {
    const favorite2 = document.querySelector('#favorite2');

    function handleMouseOver() {
      if (!active) {
        favorite2.style.color = 'red';
      }
    }

    function handleMouseOut() {
      if (!active) {
        favorite2.style.color = 'black';
      }
    }

    favorite2.addEventListener('mouseover', handleMouseOver);
    favorite2.addEventListener('mouseout', handleMouseOut);

    return () => {
      favorite2.removeEventListener('mouseover', handleMouseOver);
      favorite2.removeEventListener('mouseout', handleMouseOut);
    };
  }, [active]); // active가 변경될 때마다 useEffect가 재실행되도록 설정

  return (
	<div className='card'>
		<div className='card-img'>
			<img width="100%"
				src={item.img} alt=""/>
			<FontAwesomeIcon id='favorite2' icon={faHeart} 
				onClick={()=>handleFavorite(item, item.id)}
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