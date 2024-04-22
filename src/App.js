import React from 'react';
import './App.css'
import bekastan from './bekastan.avif'

const App = () => {
  return (
    <div class='container'>
        <div class='content'>
            <div class='image'><img src={bekastan} alt='My-Photo'/></div>
            <span className='span'>BEKASTAN</span>
            <div class='btns'><div>Fullstack Developer</div><div>Digital Craftsman</div></div>
            <button class='btn'><span><a target="_blank" href="https://www.linkedin.com/in/bekastan-nasirov-a37258301/">Linkedin</a></span></button>
            <button class='btn'><span><a target="_blank" href="https://my-sait-b7cc.vercel.app/">Website</a></span></button>
            <button class='btn'><span><a target="_blank" href="https://www.youtube.com/channel/UC90W-E-PMXiosjFrOvrIoUQ">YouTube</a></span></button>
            <button class='btn'><span><a target="_blank" href="https://github.com/nasirovx">GitHub</a></span></button>
            <button class='btn'><span><a target="_blank" href="https://t.me/beka_stan">Telegram</a></span></button>
            <button class='btn'><span><a target="_blank" href="https://www.instagram.com/5ekastan?igsh=MTN5NXJjanpjN2F4Mw==">instagram</a></span></button>
            <button class='btn'><span><a target="_blank" href="https://don-t-look.vercel.app/">Blog Posts</a></span></button>
        </div>
    </div>
  )
}

export default App
