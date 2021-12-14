import React from 'react';

const AddForm = ({onAdd}) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && onAdd(name);
        formRef.current.reset()
        }
    return(
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
            ref={inputRef}
            type="text" 
            className="add-input" 
            placeholder="let me know"
            />
            <button className="add-button">Add</button>
        </form>
    )
};

export default AddForm;