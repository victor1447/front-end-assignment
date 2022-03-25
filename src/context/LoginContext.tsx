import { createContext, ReactNode, useState } from 'react';

type LoginContextType = {
	loginSuccess: boolean;
	login: (loginSuccess: boolean) => void;
};

const defaultState = {
	loginSuccess: false,
	login: () => {},
};

const LoginContext = createContext<LoginContextType>(defaultState);

const LoginProvider = ({ children }: { children: ReactNode }) => {
	const [loginSuccess, setLoginSuccess] = useState(false);

	const login = (loginSuccess: boolean) => {
		setLoginSuccess(loginSuccess);
	}

	return (
		<LoginContext.Provider value={{ loginSuccess, login }}>
			{children}
		</LoginContext.Provider>
	);
};

export { LoginContext, LoginProvider };
