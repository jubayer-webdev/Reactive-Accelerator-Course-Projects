import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SearchStringContext = createContext("");

const SearchStringContextProvider = ({ children }) => {
    const [searchString, setSearchString] = useState("");

    return (
        <SearchStringContext.Provider value={{ searchString, setSearchString }}>
            {children}
        </SearchStringContext.Provider>
    );
};

SearchStringContextProvider.propTypes = {
    children: PropTypes.node,
};

export default SearchStringContextProvider;
