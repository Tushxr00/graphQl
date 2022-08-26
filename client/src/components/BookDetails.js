import { graphql } from '@apollo/client/react/hoc';
import React from 'react'
import { getBookQuery } from '../queries/queries';


const BookDetails = (props) => {
    const displayBookDetails = () => {
        const { book } = props.data
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p> Books by this author:</p>
                    <ul className='other-books'>
                        {
                            book.author.books.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <span> {item.name} </span>
                                        <span> - </span>
                                        <span> {item.genre} </span>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            )
        } else {
            return (
                <div>No book selected ...</div>
            )
        }
    }
    return (
        <div id="book-details">
            {displayBookDetails()}
        </div>
    )
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)