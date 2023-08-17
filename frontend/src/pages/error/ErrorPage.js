import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err=useRouteError()
  return <h1>{err.data.message}</h1>;
}
