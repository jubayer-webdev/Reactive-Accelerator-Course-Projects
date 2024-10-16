import PropTypes from "prop-types";

const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block text-sm font-medium leading-6 text-gray-900`}
        {...props}
    >
        {children}
    </label>
);

Label.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Label;
