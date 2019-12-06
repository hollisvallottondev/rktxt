import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Note from '../Note'; 
import './styles.css'; 

const AUTHOR_NOTES = gql`
    {
        author(id: "5d9a57e768782a0274f06cfe"){
            id,
            name,
            notes{
                id,
                noteversions{
                    id,
                    text
                },
                latest{
                    id,
                    text
                }
            }
        }
    }
`;

const Notes = (props) => {
    const { loading, error, data } = useQuery(AUTHOR_NOTES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { notes } = data.author; 
    console.log('notes', notes)
    return(
        <div className = {"notes-container"}>
            {
                notes && notes.map(({ latest }) => (
                    <div 
                        className = {"note-container"} 
                        onClick = { props.toggleShowModal }
                    >
                        <Note text = {latest.text}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Notes;