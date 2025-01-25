import React, { useState } from 'react';
import { MdApi, MdClose } from 'react-icons/md';

function DynamicForm() {
    const [textboxes, setTextboxes] = useState([{ id: 1, value: '' }]);

    const handleAddTextbox = () => {
        if (textboxes.length >= 10) {
            alert("Only 10 textboxes allowed");
            return;
        }

        const newTextboxId = textboxes.length + 1;
        setTextboxes([...textboxes, { id: newTextboxId, value: '' }]);
    };

    const handleRemoveTextbox = (id) => {
        if (textboxes.length === 1) {

            alert("No more textboxes to remove");
            return;
        }
        const updatedTextboxes = textboxes.filter(textbox => textbox.id !== id);
        setTextboxes(updatedTextboxes);
    };

    const handleTextboxChange = (id, value) => {
        const updatedTextboxes = textboxes.map(textbox =>
            textbox.id === id ? { ...textbox, value } : textbox
        );
        setTextboxes(updatedTextboxes);
    };

    const handleGetValues = () => {
        let msg = '';
        textboxes.forEach(textbox => {
            msg += `\n Textbox #${textbox.id} : ${textbox.value}`;
        });
        alert(msg);
    };

    return (
        <div className='dynamic-form '>
            <div className='textboxes-group w-full bg-white rounded shadow-lg p-8 m-4'>
                <h1 className=" text-4xl categorize-header mb-2 uppercase font-bold text-lg text-grey-darkest text-center">Categorize</h1>
                <br></br>
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest ">Categories</label>
                <br></br>
                <br></br>
                {textboxes.map(textbox => (
                    <div key={textbox.id} className='textbox-div'>
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Category {textbox.id} : </label>
                        <br></br>
                        <button className=" mx-auto p-4 rounded" onClick={handleAddTextbox}><MdApi /></button>
                        <input className="border py-2 px-3 text-grey-darkest"
                            type='text'
                            value={textbox.value}
                            onChange={(e) => handleTextboxChange(textbox.id, e.target.value)}
                        />
                        <button className="  mx-auto p-4 rounded" onClick={() => handleRemoveTextbox(textbox.id)}><MdClose /></button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleGetValues}>Get Values</button>
                    </div>
                ))}
                <br></br>
                <br></br>
                <label className="mb-2 uppercase font-bold text-lg text-grey-darkest ">Items</label>
                <br></br>
                <br></br>
                {textboxes.map(textbox => (
                    <div key={textbox.id} className='textbox-div'>
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Item {textbox.id} : </label>
                        <br></br>
                        <button className=" mx-auto p-4 rounded" onClick={handleAddTextbox}><MdApi /></button>
                        <input className="border py-2 px-3 text-grey-darkest"
                            type='text'
                            value={textbox.value}
                            onChange={(e) => handleTextboxChange(textbox.id, e.target.value)}
                        />
                        <button className="  mx-auto p-4 rounded" onClick={() => handleRemoveTextbox(textbox.id)}><MdClose /></button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleGetValues}>Get Values</button>
                    </div>
                ))}





            </div>



        </div>
    );
}

export default DynamicForm;
