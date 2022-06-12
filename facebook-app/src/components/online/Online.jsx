import React from 'react'
import "./online.css"


export default function Online({user}) {
  return (
    <div>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/images/photo.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user}</span>
          </li>
    </div>
  )
}
