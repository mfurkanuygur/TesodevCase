import { useEffect } from "react";
import PropTypes from 'prop-types'

const ToastMessage = ({ message, onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);
    return (
        <div className="toast-message">
            <h3>Error while adding link element</h3>
            <p>{message}</p>
        </div>
    );
};

export default ToastMessage;

ToastMessage.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func
}
