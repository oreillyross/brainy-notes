import DisplayNotes from 'components/DisplayNotes'
import SearchBar from 'components/SearchBar'

export default function Dashboard() {
  const handleSearch = (s: string) => {
    console.log(s)
  }

  return (
    <div className='border-2 border-slate-300 mx-auto max-w-7xl p-12 '>
      <SearchBar onSearch={handleSearch} />
    </div>
  )
}
