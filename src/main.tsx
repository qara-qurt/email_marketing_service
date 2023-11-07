import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'styles/index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<GoogleOAuthProvider clientId="1092028433387-tkiksf8mvb1d5golclhme55srl94rr9p.apps.googleusercontent.com">
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
	</GoogleOAuthProvider>
);
