import SearchBar from './SearchBar'
import { useState } from 'react'
import NotesList from '../pages/NotesList'

function DisplayNotes() {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <div className='mx-auto max-w-lg md:max-w-3xl container'></div>
    </div>
  )
}

export default DisplayNotes
