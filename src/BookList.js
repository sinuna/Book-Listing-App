import React from 'react'

const BookList = ({ author, image, title }) => {
	return (

    <div className="col-lg-3 col-md-3 col-12">
	<img src={image} alt={title} className="w-100"/>
	<p key={title}><b>Title: </b>{title}</p> 
	<p key={author}><b>Author: </b> {author}</p>

	</div>
	)
}

export default BookList;
