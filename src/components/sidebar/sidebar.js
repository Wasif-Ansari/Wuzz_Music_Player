import React, {useState, useEffect } from 'react';
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';



export default function Sidebar() {
    const [image, setImage] = useState(
        'https://www.sanjayjangam.com/wp-content/uploads/2021/12/whatsapp-dp-images-hd.jpg'

    );
    useEffect(() =>{
        apiClient.get("me").then(response =>{
            setImage(response.data.images[0].url);
        })
    },[])

  return (
    <div className='sidebar-container'>
        <img src={image} className='profile-img' alt="profimg"/>
        <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
    
  )
}
