const Modal = ({ isOpen, content, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                <p className="text-lg">{content.message}</p>
                <p className="text-5xl">{content.emoji}</p>
                <button className="mt-4 px-4 py-2 rounded bg-dark-green text-white" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;