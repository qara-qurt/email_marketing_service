import HomePage from "pages/Home/HomePage.tsx";
import { Route, Routes } from "react-router-dom";
import EmailService from "pages/EmailService/EmailService.tsx";
import SignIn from "pages/SignIn/SignIn.tsx";
import SignUp from "pages/SignUp/SignUp.tsx";
import Constructor from "pages/EmailService/Templates/Constructor/Constructor.tsx";
import { useSelector } from "react-redux";
import { RootState } from "store/store.ts";

function App() {
	const { isAuth } = useSelector((state: RootState) => state.auth);

	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="sign-in" element={<SignIn />} />
			<Route path="sign-up" element={<SignUp />} />

			{isAuth ? (
				<>
					<Route path="emailservice" element={<EmailService />} />
					<Route path="emailservice/constructor" element={<Constructor />} />
					<Route path="emailservice/constructor/:id" element={<Constructor />} />
				</>
			) : null}
		</Routes>
	);
}

export default App;
