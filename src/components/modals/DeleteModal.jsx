const DeleteModal = ({
    closeDeleteModal,
    handleDelete,
    deleteItem,
    fromExpense = false,
}) => {
    const handleClickOutside = (event) => {
        closeDeleteModal();
    };

    // Prevent modal from closing when clicking inside the modal content
    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleClickOutside}
        >
            <div
                className="w-96 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                onClick={handleModalClick}
            >
                <h3 className="text-xl font-medium leading-6 text-gray-900">
                    Are you sure you want to delete this item?
                </h3>
                <div className="my-2">
                    <p className="text-sm text-gray-500">
                        This will delete this item permanently. You won’t be
                        able to revert this.
                    </p>
                </div>
                <div className="mt-4 flex gap-4">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-neutral-400 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
                        // onClick={() => setShowDeleteModal(false)}
                        onClick={closeDeleteModal}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={() => {
                            handleDelete({ deleteItem, fromExpense });
                            // setShowDeleteModal(false);
                            closeDeleteModal();
                        }}
                    >
                        Yes, Delete It!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
