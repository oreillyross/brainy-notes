import * as React from "react";

function Set() {
  const [access, setAccess] = React.useState("");

  React.useEffect(() => {
    const access = window.localStorage.getItem("access");
    setAccess(access as string);
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAccess(e.currentTarget.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.localStorage.setItem("access", access);
  };

  return (
    <div className="container flex mx-auto flex-col">
      <p className="text-amber-800 text-lg">Set the token here</p>
      <input className="border rounded-full p-2 w-1/3" name="access" value={access} onChange={handleChange} />
      <button className="hover:bg-amber-500 mt-3 w-48 rounded-full bg-amber-400 text-slate-800 p-4 border-2 border-slate-900" onClick={handleClick}>Set</button>
      <p>
        The Access token is currently set to: <span>{access}</span>
      </p>
    </div>
  );
}

export { Set };
