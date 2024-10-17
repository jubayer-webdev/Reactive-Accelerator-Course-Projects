import DeleteIcon from "../svg/DeleteIcon";

const DeleteButton = ({ setShowDeleteModal }) => {
    return (
        <button
            className="hover:text-red-600"
            role="button"
            title="Delete"
            onClick={() => setShowDeleteModal((prv) => !prv)}
        >
            <DeleteIcon />
        </button>
    );
};

export default DeleteButton;
