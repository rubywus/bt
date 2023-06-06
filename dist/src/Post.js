import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'

function Post({ displayNmae, username, verified, timestamp, text, image, avatar}) {
  return (
    <div className='post'>
        <div className='post_avatar'>
        <Avatar src='data:image/png;base64,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' />
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>
                        Rafde {''} 
                        <span className='post_headerSpecial'>
                            <VerifiedUserIcon className='post_badge' /> @ {username} 
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>Icecece</p>
                </div>
            </div>
            <img 
                src='https://media.tenor.com/YUF4morhOVcAAAAM/peach-cat-boba-tea.gif' 
                alt='' />
            <div className='post_footer'> 
            <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post