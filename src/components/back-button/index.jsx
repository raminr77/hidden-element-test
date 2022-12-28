import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function BackButton({ className }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={classNames('text-sm', className)}
    >
      [ Go Back ]
    </button>
  );
}

export { BackButton };