import { Link, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { logout, UserContext } from "ARCHIVE/auth/utils";
import { useContext } from "react";

function Navigation() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List>
          <Tab>
            {user && (
              <div
                onClick={() =>
                  logout().then(() => {
                    navigate("/");
                    window.location.reload();
                  })
                }
              >
                Log out
              </div>
            )}
          </Tab>
          <Tab>
            {!user && (
              <div
                onClick={() => {
                  navigate("/login");
                  window.location.reload();
                }}
              >
                Log in / Signup
              </div>
            )}
          </Tab>
          <Tab>
            <Link to="/notes/new">
            <div>Add a note</div>
            </Link>
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default Navigation;
