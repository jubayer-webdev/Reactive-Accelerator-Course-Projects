// import { forwardRef, useRef } from "react";
import PropTypes from "prop-types";

// const SelectInput = forwardRef(function SelectInput(
//     { className = "", children, ...props },
//     ref
// ) {
const SelectInput = ({ className = "", children, ...props }) => {
    // const innerRef = useRef();
    // const selectRef = ref || innerRef;

    return (
        <select
            className={
                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 " +
                className
            }
            {...props}
            // ref={selectRef}
        >
            {children}
        </select>
    );
};

SelectInput.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default SelectInput;
