import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);



    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });


    };
    const expandIt = () => {
        setExpand(true);
    }

    const btoNormal = () => {
        setExpand(false);
    }
    return (
        <>
            <div className="main_note">
                <form>
                    {expand ?
                        <input type="text"
                            name="title"
                            value={note.title}
                            onChange={inputEvent}
                            placeholder="Title"
                            autoComplete="off" /> : null}
                    <textarea type="text" rows="" columns="" name="content" value={note.content} onChange={inputEvent} placeholder="Add Notes..." onClick={expandIt}
                        onDoubleClick={btoNormal} ></textarea>
                    {expand ? <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> : null}

                </form>
            </div>
        </>
    );
};

export default CreateNote;