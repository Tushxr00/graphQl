import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc';
import React from 'react'

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

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
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)