import React from 'react'
import './home.css'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'

export default function Home({setDeger}) {
  return (
    <div>
      <Topbar setDeger={setDeger} />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />

      </div>
    </div>
  )
}
