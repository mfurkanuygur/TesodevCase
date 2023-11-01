import { useEffect } from "react";

const ToastMessage = ({ message, onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Close the message after 3 seconds

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
