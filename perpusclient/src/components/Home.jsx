import React from 'react'
import Navbar from './Navbar';
import Books from './Books';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ModalCreateBook from './ModalCreateBook';

const Home = () => {

  const [books, setBooks] = useState([])
  useEffect(() => {

    getBooks()

  },[])


  const getBooks = async () => {
    const result = await axios(`http://127.0.0.1:8000/api/books`)
    setBooks(result.data.data)
  }


  return (
    <div>
    <Navbar/>

        <div className='container pt-5'>
        <div className='row mb-3'>
            <div className='col-9'>
              <h4>Recommended Books</h4>
            <div>
              <ModalCreateBook/>
            </div>

            </div>
            <div className='col-3'>
            <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Books..." aria-label="Search Books..." aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            </div>
        </div>
        <Books books={books} />
        </div>
    </div>
  )
}

export default Home