import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='html'>
      <div id='top_bar'>
        <div id='top_bar_logo'>
          <img className="my_logo" src="./src/assets/react.svg" alt="my_logo" />
          <span id='logo_text'>系统信息</span>
        </div>
        <div id='top_bar_lists'>
        
        </div>
        <div id='top_bar_login'>
          <a href="#" id='top_login_button'>登录</a>
        </div>
      </div>
      <div id='app_context'>
        <div id='context1'>
        context1
        </div>
        <div id='context2'>
        context2
        </div>
        <div id='context3'>
        context3
        </div>
        <div id='context4'>
        context4
        </div>
        <div id='context5'>
        context5
        </div>
        <div id='context6'>
        context6
        </div>
      </div>
      <div id='foot_bar'>
        powerd by ...
      </div>
    </div>
  )
}

export default App
