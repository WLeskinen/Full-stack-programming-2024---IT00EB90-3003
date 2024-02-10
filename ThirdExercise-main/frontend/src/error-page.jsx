import { useRouteError } from "react-router-dom";

// This component is used to display an error page when an unexpected error occurs during routing.
export default function ErrorPage() {
  const error = useRouteError();

  // Logs the error to our web browser's console.
  console.error(error);



  // Render the error page with a title and the error message.
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}