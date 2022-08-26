import { graphql } from '@apollo/client/react/hoc';
import React, { useState } from 'react'
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { flowRight as compose } from 'lodash';

const AddBook = (props) => {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")
    const displayAuthors = () => {
        const data = props.getAuthorsQuery
        if (data.loading) {
            return (<option disabled>Loading authors</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }
    const submitForm = (event) => {
        event.preventDefault();
        console.log({
            name,
            genre,
            authorId
        })
        props.addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId,
            }
        })
        setName("")
        setGenre("")
    }
    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(event) => setGenre(event.target.value)} value={genre} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(event) => setAuthorId(event.target.value)}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>

        </form>
    )
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" }),
)(AddBook)