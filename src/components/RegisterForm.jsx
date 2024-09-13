import { useState } from 'react';
import { useAuth } from '../api/auth.jsx';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const { register } = useAuth(); // Используем функцию регистрации
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [telegram, setTelegram] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            setLoading(false);
            return;
        }

        try {
            await register(name, email, telegram, password); // Регистрация с email, паролем и именем
        } catch (err) {
            setError('Ошибка при регистрации');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__subtitle">OneMedia</div>
                <div className="login__title">Регистрация</div>
                <div className="login__desc">Пожалуйста, введите свои данные</div>

                <form onSubmit={handleSubmit} className="login__form">
                    <div className="login__field">
                        <label className="login__field-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login__field-input"
                            required
                        />
                    </div>
                    <div className="login__field">
                        <label className="login__field-label">Имя</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="login__field-input"
                            required
                        />
                    </div>
                    <div className="login__field">
                        <label className="login__field-label">Telegram</label>
                        <input
                            type="text"
                            value={telegram}
                            onChange={(e) => setTelegram(e.target.value)}
                            className="login__field-input"
                            required
                        />
                    </div>
                    <div className="login__field">
                        <label className="login__field-label">Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login__field-input"
                            required
                        />
                    </div>
                    <div className="login__field">
                        <label className="login__field-label">Подтверждение пароля</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="login__field-input"
                            required
                        />
                    </div>

                    {error && <div className="login__error">{error}</div>}

                    <div className="login__box">
                        <Link to="/" className="login__reset">Уже есть аккаунт?</Link>
                        <button type="submit" className="login__button" disabled={loading}>
                            {loading ? 'Регистрация...' : 'Регистрация'}
                        </button>
                    </div>
                </form>

                <div className="divider">
                    <hr className="divider__line" />
                    <span className="divider__text">Или</span>
                    <hr className="divider__line" />
                </div>

                <div className="social-login">
                    <button className="social-login__button google">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                            alt="Google"
                            className="social-login__icon"
                        />
                        Войти с Google
                    </button>
                    <button className="social-login__button facebook">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            alt="Facebook"
                            className="social-login__icon"
                        />
                        Войти с Facebook
                    </button>
                </div>

            </div>
        </div>
    );
}
