import { createContext, ReactNode, useState } from 'react';

type LoginContextType = {
	loginSuccess: boolean;
	setLogin: (loginSuccess: boolean) => void;
};

const defaultState = {
	loginSuccess: false,
	setLogin: (loginSuccess: boolean) => {}
};

const LoginContext = createContext<LoginContextType>(defaultState);

const LoginProvider = ({ children }: { children: ReactNode }) => {
	const [loginSuccess, setLoginSuccess] = useState(false);

	const setLogin = (loginSuccess: boolean) => {
		setLoginSuccess(loginSuccess);
	}

	return (
		<LoginContext.Provider value={{ loginSuccess, setLogin }}>
			{children}
		</LoginContext.Provider>
	);
};

export { LoginContext, LoginProvider };
