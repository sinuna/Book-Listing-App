import axios from 'axios';
import React, {useState, useEffect} from 'react'
import BookLists from './BookList';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const [bookList, setBookList] = useState([]);
  const [search, setSearch] = useState('');
  const [term, setTerm] = useState('hi');
  const apiUrl = `https://goodreads-server-express--dotdash.repl.co/search/${term}`;

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  
  useEffect(() => {
    getBookList();
  },[term]);

  const getBookList = async() => {
    // const response = await axios.get(`https://goodreads-server-express--dotdash.repl.co/search/q=${query}`)
    // const response = await axios.get(`https://goodreads-server-express--dotdash.repl.co/search/q=w`)
    // const response = await axios.get(`https://goodreads-server-express--dotdash.repl.co/search/${term}`)

    const response = await axios.get(apiUrl)
    setBookList(response.data.list);
    console.log(response.data.list);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);  
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setTerm(search);
  };


  // Pagination
  // Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = bookList.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container pt-3">
      <h1 className="text-danger">Book Listing Using React and Bootstrap</h1>

      <div className="row pt-3">
      <form onSubmit={updateQuery} class="form-inline">
      <div className="form-group mb-2">
      <input type="text" value={search} onChange={updateSearch} />
      <button type="submit" className="btn btn-danger mb-2" >Search</button>
      </div>
      </form>
      </div>

      <div className="row pt-3">
      {currentPosts.map((book) => (
        <BookLists author={book.authorName} image={book.imageUrl} title={book.title}/>
        
      ))}
      <Pagination postsPerPage={postPerPage} totalPosts={bookList.length} paginate={paginate}/>
   
    </div>
    </div>
  )
}

export default App;