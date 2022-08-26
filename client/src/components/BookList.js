import { graphql } from '@apollo/client/react/hoc';
import React from 'react'
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {

    const displayBooks = () => {
        let data = props.data
        if (data.loading) {
            return (
                <div>
                    Loading books ...
                </div>
            )
        } else {
            return (
                data.books.map((book) => (
                    <li key={book.id}>
                        {book.name}
                    </li>
                ))
            )
        }
    }

    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails />
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)