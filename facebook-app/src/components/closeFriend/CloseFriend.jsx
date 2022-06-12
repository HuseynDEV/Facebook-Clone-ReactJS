import React from 'react'
import './closeFriend.css'

export default function CloseFriend(props) {
  return (
    <div>
          <li className="sidebarFriend">
            <img src={props.image} className="sidebarFriendImg" />
            <span className="sidebarFriendName">{props.user}</span>
          </li>
    </div>
  )
}
