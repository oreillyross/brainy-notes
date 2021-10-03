// gatsby-browser.js
import * as React from "react";
import { navigate } from "react-router-dom";

import { AuthConfig } from "react-use-auth";
import { netlify } from "netlify-identity-widget";

export const wrapRootElement = ({ element }) => (
  <>
    <AuthConfig
      navigate={navigate}
      authProvider={netlify}
      params={{
        domain: "useauth.auth0.com",
        clientID: ""
      }}
    />
    {element}
  </>
);
