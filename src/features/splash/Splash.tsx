function Splash() {
  return (
    <div className="pb-2">
      {[
        [
          `Quick capture`,
          `Quickly and easily capture notes. Start with adding a
      title and fill in the other details later.`
        ],
        [
          `Easy access`,
          `Easily search for older notes by keyword and using the keyboard`
        ],
        [
          `Iterate faster`,
          `Finding snippets of knowledge quickly means you are not distracted from core iterating on your work`
        ]
      ].map(([title, text]) => {
        return (
          <div className="shadow-lg p-8 ml-8">
            <div>
              <h1 className="text-left uppercase font-bold"> {title}</h1>
              <div className="pt-4 w-96 text-left">{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Splash;
