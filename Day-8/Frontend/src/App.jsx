import React, { useState } from 'react';
import axios from "axios";

const App = () => {

  const [notes, setnotes] = useState([
    {
      title: "Test Title 1",
      desc: "Test Description 1"
    },
    {
      title: "Test Title 2",
      desc: "Test Description 2"
    },
    {
      title: "Test Title 3",
      desc: "Test Description 3"
    },
    {
      title: "Test Title 4",
      desc: "Test Description 4"
    },
    {
      title: "Test Title 1",
      desc: "Test Description 1"
    },
    {
      title: "Test Title 2",
      desc: "Test Description 2"
    },
    {
      title: "Test Title 3",
      desc: "Test Description 3"
    },
    {
      title: "Test Title 4",
      desc: "Test Description 4"
    },
    {
      title: "Test Title 1",
      desc: "Test Description 1"
    },
    {
      title: "Test Title 2",
      desc: "Test Description 2"
    },
    {
      title: "Test Title 3",
      desc: "Test Description 3"
    },
    {
      title: "Test Title 4",
      desc: "Test Description 4"
    },
    {
      title: "Test Title 1",
      desc: "Test Description 1"
    },
    {
      title: "Test Title 2",
      desc: "Test Description 2"
    },
    {
      title: "Test Title 3",
      desc: "Test Description 3"
    }
  ])

  axios.get('http://localhost:3000/api/notes')
    .then((res) => {
      setnotes(res.data.notes)
    })
    .catch((e) => {
      console.log("Api was not fetched Successfully", e);
    })

  return (
    <div className='notes h-screen w-screen p-6 bg-neutral-900 flex flex-wrap gap-10 justify-center overflow-y-auto'>
      {notes.map((note, index) => {
        return <div key={index} className="note bg-neutral-700 h-60 w-60 border-white border-2 rounded text-white p-2 flex flex-col items-center gap-3">
          <h1>{note.title}</h1>
          <p>{note.desc}</p>
        </div>
      })}
    </div>
  )
}

export default App