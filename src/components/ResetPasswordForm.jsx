import { useEffect, useState } from 'react';
import { useAuth } from '../api/auth.jsx';
import { Link } from 'react-router-dom';

export default function ResetPasswordForm() {
    const { resetPassword, error, setError } = useAuth();
    const [email, setEmail] = useState('');

    useEffect(() => {
        setError(null); 
    }, [setError]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await resetPassword(email);
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__subtitle">
                    OneMedia
                </div>
                <div className="login__title">
                    Забыли пароль?
                </div>
                <div className="login__desc">
                    Введите email, указанный при регистрации, и мы отправим ссылку для сброса пароля.
                </div>
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
                    {error && <div className="login__error">{error}</div>}
                    <div className="login__box">
                        <Link to="/" className="login__reset">Назад</Link>
                        <button type="submit" className="login__button">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}