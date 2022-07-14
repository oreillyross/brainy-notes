import { Link } from "react-router-dom";

export default function UnauthenticatedApp() {
	return (
		<section>
			Go here to login... <Link to="/login">Login</Link>
		</section>
	)
}