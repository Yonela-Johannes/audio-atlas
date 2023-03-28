import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'
import Alpha from '../assets/alphagreen.png'

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`search/${searchTerm}`)
  }
  return (
  <div className="flex items-center justify-around bg-[#00203FFF] h-[100px]">
      <Link to='/'>
      <div className="flex text-center items-center">
          <img src={Alpha}  alt='logo' className="w-8 h-8"/>
          <h1 className="text-[25px] font-bold">Audio Atlas</h1>
      </div>
    </Link>
    <div className="w-[400px]">
      <form autoComplete="off" className="p2" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-start items-center bg-white p-2 rounded-sm mx-2">
          <FiSearch className="w-7 h-7" />
          <input
            name="search-field"
            autoComplete="off"
            id="search-field"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='flex-1 border-none outline-none text-base p4 bg-transparent'
          />
        </div>
      </form>
    </div>
  </div>
)};

export default Searchbar;
