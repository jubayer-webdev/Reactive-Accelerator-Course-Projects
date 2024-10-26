import { categoryOptions } from "../data/categoryOptions";

export const categoryList = () => {
    return categoryOptions.map((category) => (
        <option key={category.id} value={category?.value}>
            {category?.name}
        </option>
    ));
};
