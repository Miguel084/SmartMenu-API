import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState < string > ('');
    const [password, setPassword] = useState < string > ('');
    const [rememberMe, setRememberMe] = useState < boolean > (false);

    const [error, setError] = useState < string > ('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'rememberMe') setRememberMe(!rememberMe);
    };

    const handleRegisterClick = () => {
        navigate('/register');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Preencha todos os campos por favor');
        } else {
            setError('');

            var loginurl = "";
            if (rememberMe === true)
                loginurl = "login?useCookie=true";
            else
                loginurl = "login?useSessionCookies=true";

            fetch(loginurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
                .then((data) => {
                    console.log(data);
                    if (data.ok) {
                        setError("login efetuado com sucesso");
                        window.location.href = "/";
                    } else {
                        setError("Email ou senha incorretos");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setError("Erro ao efetuar login");
                });
        }
    };

    return (
        <div className="containerbox">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="forminput" htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={handleChange}
                    />
                    <label htmlFor="rememberMe">Lembrar-me</label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <div>
                    <button type="button" onClick={handleRegisterClick}>Registrar</button>
                </div>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Login;
