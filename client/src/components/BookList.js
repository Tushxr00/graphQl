import { graphql } from '@apollo/client/react/hoc';
import React, { useState } from 'react'
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {
    const [selected, setSelected] = useState(null)
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
                    <li key={book.id} onClick={(event) => { setSelected(book.id) }}>
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
            <BookDetails bookId={selected} />
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)