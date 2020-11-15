import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Book from "../components/Results/Results";
import { Container, Col, Card, Row, Button } from "react-bootstrap";

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("Emily Giffin");
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.searchBooks(searchTerm)
            .then(res =>
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm(value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchTerm) {
            loadBooks();
            console.log(books);
        }
    }

    return (
        <div>
            <div className="row justify-content-center">
                <form className="col-7">
                    <input type="text" className="form-control m-2"
                        onChange={handleInputChange}
                        name="Search Books"
                        placeholder="Search Books or Authors" />
                </form>
                <button type="submit" className="btn btn-primary col-1 m-2"
                    onClick={handleFormSubmit}>Submit</button>
            </div>
            <div className="pt-4">
                <div className="row book">
                    {books ? books.map((book) => (
                        <Book
                            key={book.id}
                            volumeInfo={book.volumeInfo}
                        />
                    )) : null}
                </div>
            </div>

        </div>
    );
}

export default Search;