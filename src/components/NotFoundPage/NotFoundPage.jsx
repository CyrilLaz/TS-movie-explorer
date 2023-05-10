import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="not-found">
      <div className="not-found__message">
        <span className="not-found__status-code">404</span>
        <span className="not-found__status-message">Страница не найдена</span>
      </div>

      <button className="not-found__back-button" onClick={goBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
