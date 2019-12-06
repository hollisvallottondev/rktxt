import React from 'react';
import Note from '../Note';
import Modal from "../Portal";
import './styles.css';

const NoteModal = (props) => {
    console.log('props', props);
    return (
        <div className={"note-modal"} onClick={props.toggleShowModal} >
            <div className={"note-modal-container"}>
                <Note title={"Title 1"} text={"Text 1"} />
            </div>
        </div>
    )
}

export default NoteModal;



