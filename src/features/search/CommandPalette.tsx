import { Combobox, Dialog, Transition } from "@headlessui/react";
import { useState, useEffect, Fragment, FormEventHandler } from "react";
import { BookmarkIcon, SearchIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import type { Note } from "types/note";

type Props = {
  notes: Note[];
};

export default function CommandPalette({ notes }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNote, selectNote] = useState(notes[0]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "%" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const filteredNotes = query
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => {
        setQuery("");
      }}
    >
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="overflow-hidden p-3 relative ring-1 ring-black/5 shadow-2xl rounded-xl max-w-xl mx-auto bg-white divide-y divide-gray-100"
            onChange={(value: Note) => {
              console.log(value);
              selectNote(value);
              setIsOpen(false);
              navigate(`/note/${selectedNote.id}`);
            }}
            value={selectedNote}
          >
            <div className="flex items-center ">
              <SearchIcon className="h-6 w-6 text-gray-500 mx-2" />
              <Combobox.Input
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                className="w-full p-2 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm text-gray-800"
                placeholder="Search..."
              />
            </div>
            {filteredNotes.length > 0 && (
              <Combobox.Options
                static
                className="py-4 text-sm max-h-96 overflow-y-auto"
              >
                {filteredNotes.map((note) => (
                  <Combobox.Option key={note.id} value={note}>
                    {({ active }) => (
                      <div
                        className={`flex items-center space-x-1 px-4 py-2 ${
                          active ? "bg-indigo-600" : "bg-white"
                        }`}
                      >
                        <span
                          className={`font-medium text-gray-900 px-4 py-2 ${
                            active ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {note.title}
                        </span>
                        <span>
                          <BookmarkIcon
                            className={`h-4 w-4  ${
                              active ? "text-grey-100" : "text-gray-400"
                            }`}
                          />
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredNotes.length === 0 && (
              <p className="p-4 text-sm text-gray-500">No notes found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
