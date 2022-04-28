

import { Link } from "react-router-dom";

const NavigationText = ({name, to}: {name: string, to: string}) => {
  return (

      <Link className="navigation__link" to={to}>
        {name}  
      </Link>
  )
}

function Navigation() {
  return (
    <div className="navigation">
      <NavigationText name="Home" to="/"/>
      {" | "}
      <NavigationText name="Notes" to="/notes"/>
    </div>
  );
}

export { Navigation };
