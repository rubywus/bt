import React from 'react'
import './TweetBox.css'
import { Avatar , Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
              <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
              <input 
              placeholder="What's happening?"
              type = "text" />
            </div>
            <input 
             className='tweetBox_imageInput'
             placeholder='Enter image URL' 
             type = 'text' />

            <Button className='tweetBox_tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox;
