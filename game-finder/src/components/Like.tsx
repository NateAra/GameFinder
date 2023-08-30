import { useState } from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

export const Like = () => {

    const [likeStatus, setLikeStatus] = useState(false)

    if (likeStatus) {
        return <div>
            <FcLike onClick= {() => setLikeStatus(false)}/>
            </div>
    }

  return (
    <div>
        <FcLikePlaceholder onClick={() => setLikeStatus(true)}/>
    </div>
  )
}
