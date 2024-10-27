/* eslint-disable react/prop-types */
import { useState } from "react";
import { categoryOptions } from "../data/categoryOptions";

const CreateTaskModal = ({
    handleAddItem,
    dataToUpdate,
    handleUpdate,
    toggleTaskModal,
}) => {
    const categoryList = categoryOptions.map((category) => (
        <option key={category.id} value={category?.value}>
            {category?.name}
        </option>
    ));

    // const [projectType, setProjectType] = useState(type ?? "todo");
    const [formData, setFormData] = useState(
        dataToUpdate ?? {
            taskName: "",
            description: "",
            dueDate: "",
            category: "",
        }
    );

    // form section
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const addedType = { ...formData, type };
        if (dataToUpdate) {
            handleUpdate({ ...formData, id: dataToUpdate?.id });
        } else {
            handleAddItem({ ...formData, id: crypto.randomUUID() });
        }

        setFormData({
            taskName: "",
            description: "",
            dueDate: "",
            category: "",
        });
    };

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-green-400">
                        Create Task
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="taskName"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                                Task Name
                            </label>
                            <input
                                type="text"
                                id="taskName"
                                name="taskName"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={formData?.taskName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                rows="3"
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={formData?.description}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="dueDate"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                                Due Date
                            </label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={formData?.dueDate}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="category"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={formData?.category}
                                onChange={handleInputChange}
                            >
                                {categoryList}
                            </select>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={() => toggleTaskModal(null)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskModal;
