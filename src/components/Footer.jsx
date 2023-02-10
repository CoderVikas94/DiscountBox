import React from 'react'
import '../App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/UseReducer/Product';


const Footer = () => {
const Dispatch = useDispatch();

  const handlePagination = (e) =>{
 let data = Number(e.target.innerText);
 let pagedata = (data - 1)*5

    Dispatch(fetchProduct(pagedata))
    
  }
  return (
    <div className='footer'>
      <Stack spacing={2}>
      <Pagination count={20} variant="outlined" shape="rounded" onChange={handlePagination} />
    </Stack>
    </div>
  )
}

export default Footer