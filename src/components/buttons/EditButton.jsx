import EditIcon from "../svg/EditIcon";

const EditButton = () => {
    return (
        <button
            className="hover:text-teal-600"
            role="button"
            title="Edit Button"
        >
            <EditIcon />
        </button>
    );
};

export default EditButton;
