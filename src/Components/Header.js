import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './css/Header.css'

function Header () {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon Logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link className='header__link' to='/login'>
          <div className='header__option'>
            <span className='header__optionOne'>Hello</span>
            <span className='header__optionTwo'>Sign In</span>
          </div>
        </Link>
        <Link className='header__link' to='/login'>
          <div className='header__option'>
            <span className='header__optionOne'>Returns</span>
            <span className='header__optionTwo'>& Orders</span>
          </div>
        </Link>
        <Link className='header__link' to='/login'>
          <div className='header__option'>
            <span className='header__optionOne'>Your</span>
            <span className='header__optionTwo'>Prime</span>
          </div>
        </Link>

        <Link className='header__link' to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionTwo header__basketCount'>0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
