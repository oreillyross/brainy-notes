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
    <div>
      <p>Set the token here</p>
      <input name="access" value={access} onChange={handleChange} />
      <button onClick={handleClick}>Set</button>
    </div>
  );
}

export { Set };
