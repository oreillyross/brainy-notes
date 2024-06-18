import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div>
      <h1>Oops, that didn't go as expected</h1>
      <p>
        <h4>
          Error: <i> {error.message || error.statusText}</i>
        </h4>
      </p>
    </div>
  );
}
