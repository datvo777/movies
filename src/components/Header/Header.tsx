import './Header.scss';
import CustomLink from '../CustomLink';
import path from '../../enums/path';
import SearchBar from '../SearchBar';
function Header() {
  return (
    <div className='header'>
      <CustomLink to={path.home} className=''>
        <h1 className='header-title'>Movies</h1>
      </CustomLink>
      <SearchBar />
    </div>
  )
}

export default Header