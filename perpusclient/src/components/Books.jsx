import React from 'react'

const Books = ({books}) => {

  return (
    <div className="row justify-content-center">
        {
            books.length != 0 && books.map((book) => (
            <div className="col-4 mb-5" key={book.id}>
                <div className="card mb-3" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://source.unsplash.com/random/540x540" style={{ height: '180px' }} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.author}</p>
                                <p className="card-text"><small className="text-muted">{book.published_date}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Books