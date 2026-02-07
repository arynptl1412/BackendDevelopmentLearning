import React, { useEffect, useState } from 'react';
import axios from "axios";

const App = () => {

  const [notes, setnotes] = useState([]);

  async function fetchNotes(){
    try {
      const res = await axios.get("http://localhost:3000/api/notes");
      setnotes(res.data.notes);
    } catch (e) {
      console.log("API was not successfully fetched.");
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  async function handleSubmit(e){
    e.preventDefault();

    const {title, description} = e.target.elements;

    await axios.post("http://localhost:3000/api/notes",{
      title: title.value,
      desc: description.value
    })

    e.target.reset();
    fetchNotes();
  }

  async function handleDeleteNode(noteId){
    try{
      const res = await axios.delete(`http://localhost:3000/api/notes/${noteId}`);
      fetchNotes();
      
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className='notes h-screen w-screen p-6 bg-neutral-900 flex flex-col gap-10 items-center overflow-y-auto'>

      <form className='text-white bg-neutral-500 p-10 rounded-3xl flex flex-col gap-6' onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold'>Enter the Details of the Notes</h1>

        <div className="details">
          <div className="titleInput flex flex-col gap-2">
            <label htmlFor="title">Enter Label:</label>
            <input name='title' required type="text" className='bg-white px-2 p-1 rounded-xl text-black' />
          </div>

          <div className="descInput flex flex-col gap-2">
            <label htmlFor="title">Enter Description:</label>
            <textarea name='description' required type="" className='bg-white px-2 p-1 rounded-xl text-black h-50' />
          </div>

        </div>
        <button className='bg-emerald-500 w-fit m-auto px-3 py-1 rounded-3xl'>Create Note</button>
      </form>

      <div className="allNotes flex gap-10 justify-center flex-wrap">
        {notes.map((note, index) => {
          return <div key={index} className="note bg-neutral-700 border-white border-2 rounded text-white px-10 py-3.5 flex flex-col items-center gap-3 max-w-100">
            <h1 className='font-bold text-3xl'>{note.title}</h1>
            <p>{note.desc}</p>
            <button className='bg-red-500 px-2 py-1 rounded' onClick={()=>{
              handleDeleteNode(note._id)
            }}>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App