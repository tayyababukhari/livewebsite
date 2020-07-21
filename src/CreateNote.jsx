import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note,setNote] = useState({
        title : " ",
        content : " ",
    });
    const inputEvent = (event) => {
        const {name, value} = event.target;
        setNote((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        });
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title : " ",
            content : " ",
        });
    };
    return(
        <>
        <div className="main_note">
            <form>
                <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>
    <textarea type="text" rows="" columns="" name="content" value={note.content} onChange={inputEvent} placeholder="Add Notes..."></textarea>
                <Button onClick={addEvent}>
                    <AddIcon className="plus_sign" />
                </Button>

            </form>
        </div>
        </>
    );
};

export default CreateNote;