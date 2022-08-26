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
    console.log(props)
    return (
        <div>
            <ul id="book-list">
                <li>
                    Book name
                </li>
            </ul>
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)