import HomePage from "pages/Home/HomePage.tsx";
import { Route, Routes } from "react-router-dom";
import EmailService from "pages/EmailService/EmailService.tsx";
import SignIn from "pages/SignIn/SignIn.tsx";

function App() {
	return (
		<Routes>
			<Route index element={<HomePage />}/>
			<Route path={"sign-in"} element={<SignIn />} />
			<Route path={"emailservice"} element={<EmailService />}/>
		</Routes>
	)
}
export default App;
