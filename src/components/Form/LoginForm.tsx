import {
	ChangeEvent,
	FC,
	FormEvent,
	Fragment,
	useContext,
	useEffect,
	useState,
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { authLogin } from '../../services/auth.service';
import FormHelperText from '@mui/material/FormHelperText';
import { LoginContext } from '../../context/LoginContext';

const LoginForm: FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [countError, setCountError] = useState(0);
	const { setLogin } = useContext(LoginContext);
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
			setLogin(true);
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
		<Fragment>
			<Container maxWidth="sm">
				<Typography
					sx={{
						mb: 3,
						fontSize: '2rem',
					}}
					align="center"
					component="h1"
				>
					{' '}
					Login{' '}
				</Typography>
				<Box component="form" onSubmit={handleSubmit}>
					<Box mb={2}>
						<TextField
							className="w-full"
							label="User name"
							variant="outlined"
							onChange={handleUsernameChange}
						/>
					</Box>
					<Box mb={2}>
						<TextField
							className="w-full"
							label="Password"
							variant="outlined"
							onChange={handlePasswordChange}
						/>
					</Box>
					<Box mb={2}>
						{countError === 1 && (
							<FormHelperText>
								Invalid username or password. Please try again!
							</FormHelperText>
						)}
						{countError === 2 && (
							<FormHelperText>
								Something wrong. Please try again!
							</FormHelperText>
						)}
						{countError === 3 && (
							<FormHelperText>
								Please wait next 30 sec
							</FormHelperText>
						)}
					</Box>
					<Button
						type="submit"
						variant="contained"
						disabled={!username || !password || countError === 3}
					>
						Login
					</Button>
				</Box>
			</Container>
		</Fragment>
	);
};

export default LoginForm;
