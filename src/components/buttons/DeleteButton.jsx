import DeleteIcon from "../svg/DeleteIcon";

const DeleteButton = ({ ...props }) => {
    return (
        <button
            className="hover:text-red-600"
            role="button"
            title="Delete"
            {...props}
        >
            <DeleteIcon />
        </button>
    );
};

export default DeleteButton;
