import EditIcon from "../svg/EditIcon";

const EditButton = ({ ...props }) => {
    return (
        <button
            className="hover:text-teal-600"
            role="button"
            title="Edit Button"
            {...props}
        >
            <EditIcon />
        </button>
    );
};

export default EditButton;
