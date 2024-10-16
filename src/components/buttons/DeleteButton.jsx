import DeleteIcon from "../svg/DeleteIcon";

const DeleteButton = () => {
    return (
        <button className="hover:text-red-600" role="button" title="Delete">
            <DeleteIcon />
        </button>
    );
};

export default DeleteButton;
