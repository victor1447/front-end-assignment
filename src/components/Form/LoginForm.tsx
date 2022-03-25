import {
	ChangeEvent,
	FC,
	FormEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { authLogin } from '../../services/auth.service';
import FormHelperText from '@mui/material/FormHelperText';
import { LoginContext } from '../../context/LoginContext';

const LoginForm: FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [countError, setCountError] = useState(0);
	const { login } = useContext(LoginContext);
	const waitTimes = 30000;

	const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUsername(event.currentTarget.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await authLogin({ username, password });
			console.log(response);
			login(true);
		} catch (error) {
			setCountError(countError + 1);
			console.log(error);
		}
	};

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;
		if (countError === 3) {
			timer = setTimeout(() => {
				setCountError(0);
			}, waitTimes);
		}
		return () => clearTimeout(timer);
	}, [countError, setCountError]);

	return (
		<div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
			<div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
				<h1 className="font-bold text-2xl mt-10 mb-5 text-black">
					{' '}
					Login{' '}
				</h1>
				<form
					action=""
					className="mt-2 flex flex-col lg:w-1/2 w-8/12"
					onSubmit={handleSubmit}
				>
					<div className="mb-3">
						<TextField
							className="w-full"
							label="User name"
							variant="outlined"
							onChange={handleUsernameChange}
						/>
					</div>
					<div className="mb-3">
						<TextField
							className="w-full"
							label="Password"
							variant="outlined"
							onChange={handlePasswordChange}
						/>
					</div>
					<div className="mb-3">
						{countError === 1 && (
							<FormHelperText>
								Invalid username or password. Please try again!
							</FormHelperText>
						)}
						{countError === 3 && (
							<FormHelperText>
								Please wait next 30 sec
							</FormHelperText>
						)}
					</div>
					<Button
						type="submit"
						variant="contained"
						disabled={!username || !password || countError === 3}
					>
						Login
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
