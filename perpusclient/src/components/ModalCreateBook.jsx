import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const ModalCreateBook = () => {
    // const [bookTitle, setBooktitle] = useState("")
    // const [author, setAuthor] = useState("")
    // const [publisher, setPublisher] = useState("")

    const [formData, setFormdata] = useState([])
    const [resFormdata, setResformdata] = useState([]);
    console.log(formData)


    const createBooks = async (e) => {
        e.preventDefault()
        const result = await axios.post(`http://127.0.0.1:8000/api/books`, {...formData})
        console.log(result)
        if(result.data.status == 201) {
            setFormdata([])
            setResformdata(result.data)
        }
    }


  return (
    <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Books
              </button>
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Create Books</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    { resFormdata.status == 201 ?
                    <div className="alert alert-success" role="alert">
                        { resFormdata.message || "" }
                    </div>
                    : ''
                     }
                      <form action='' method='' onSubmit={(e) => createBooks(e)}>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Book Title</label>
                          <input type="text" className="form-control" value={formData.title || ''} onChange={(e) => setFormdata({...formData, title: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
                          <input type="text" className="form-control" value={formData.author || ''} onChange={(e) => setFormdata({...formData, author: e.target.value})} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Publisher</label>
                          <input type="text" className="form-control" value={formData.publisher || ''} onChange={(e) => setFormdata({...formData, publisher: e.target.value})} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Rating</label>
                          <input type="number" className="form-control" value={formData.rating || ''} onChange={(e) => setFormdata({...formData, rating: parseInt(e.target.value)})} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Published Date</label>
                          <input type="date" className="form-control" value={formData.published_date || ''} onChange={(e) => setFormdata({...formData, published_date: e.target.value})} id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save Book</button>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
            </div>
    </>
  )
}

export default ModalCreateBook