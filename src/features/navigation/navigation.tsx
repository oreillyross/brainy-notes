import { Link, useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { logout, UserContext } from "features/auth/utils";
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
              <button
                onClick={() =>
                  logout().then(() => {
                    navigate("/");
                    window.location.reload();
                  })
                }
              >
                Log out
              </button>
            )}
          </Tab>
          <Tab>
            {!user && (
              <button
                onClick={() => {
                  navigate("/login");
                  window.location.reload();
                }}
              >
                Log in / Signup
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}

export default Navigation;
