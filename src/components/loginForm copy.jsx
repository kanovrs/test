import {useState} from 'react';
import {useAuth} from '../api/auth.jsx';
import {Link} from 'react-router-dom';

export default function LoginForm() {
    const {login} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__subtitle">
                    OneMedia
                </div>
                <div className="login__title">
                    С возвращением!
                </div>
                <div className="login__desc">
                    Пожалуйста, введите свои данные
                </div>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__field">
                        <label className="login__field-label">Логин</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login__field-input"
                        />
                    </div>
                    <div className="login__field">
                        <label className="login__field-label">Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login__field-input"
                        />
                    </div>

                    <div className="login__box">
                        <Link to="/resetpassword" className="login__reset">Забыли пароль?</Link>
                        <button type="submit" className="login__button">
                            Войти
                        </button>
                    </div>
                </form>

                <div className="divider">
                    <hr className="divider__line"/>
                    <span className="divider__text">Или</span>
                    <hr className="divider__line"/>
                </div>

                <div className="social-login">
                    <button className="social-login__button google">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg"
                            alt="Google" className="social-login__icon"/>
                        Войти с Google
                    </button>
                    <button className="social-login__button facebook">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                             alt="Facebook" className="social-login__icon"/>
                        Войти с Facebook
                    </button>
                </div>
                <div className="registration">
                   <Link to="/registration"><button type="submit" className="login__button">
                            registration
                        </button></Link> 
                </div>

            </div>
        </div>
    )
}
