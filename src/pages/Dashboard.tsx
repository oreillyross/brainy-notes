import DisplayNotes from 'components/DisplayNotes'
import SearchBar from 'components/SearchBar'
import Navigation from 'components/NavigationBar'
export default function Dashboard() {
  const handleSearch = (s: string) => {
    console.log(s)
  }

  const links = [
    { name: "View all notes", link: "/" },
    { name: "View my notes", link: `/notes/user/` },
    { name: "Add a note", link: "/notes/new" },
  ];
  return (
    <>
        <Navigation items={links} />
    <div className="mx-auto max-w-lg md:max-w-3xl container">
    </div>
    </>
  );
}
