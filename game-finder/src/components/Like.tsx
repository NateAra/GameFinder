import { useState } from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

interface LikeProp {
    heartClick: () => void;
}

export const Like = ({ heartClick } : LikeProp) => {

    const [likeStatus, setLikeStatus] = useState(false)

    const likeToggle = () => {
        setLikeStatus(!likeStatus)
        heartClick();
    }

    if (likeStatus) {
        return <div>
            <FcLike onClick= {() => likeToggle()}/>
            </div>
    }

  return (
    <div>
        <FcLikePlaceholder onClick={() => likeToggle()}/>
    </div>
  )
}
