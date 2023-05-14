import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Mince alors, cette page n'existe pas ! 🤔</h1>
      <p>Désolé, une erreur s'est produite. 😦</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
