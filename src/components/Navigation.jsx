import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <ul className='container navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/ShoppingBuddy'>
            Shopping Buddy
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/Clock'>
            Clock
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/Cocktails'>
            Cocktails
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/TicTacToe'>
            Tic Tac Toe
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/Markdown'>
            Markdown
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
