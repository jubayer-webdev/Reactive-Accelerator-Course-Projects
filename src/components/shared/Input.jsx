import PropTypes from "prop-types";

const Input = ({ disabled = false, className = "", ...props }) => (
    <input
        disabled={disabled}
        className={`${className} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 placeholder:italic`}
        {...props}
    />
);

Input.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Input;
