import './App.css';
import LoginForm from './components/Form/LoginForm';
import { LoginProvider } from './context/LoginContext';

function App() {
	return (
		<LoginProvider>
			<LoginForm />
		</LoginProvider>
	);
}

export default App;
