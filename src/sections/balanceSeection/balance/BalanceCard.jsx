import PropTypes from "prop-types";

const BalanceCard = ({ title, amount }) => {
    return (
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt
                className={`text-base leading-7 text-gray-600 ${
                    amount < 0 ? "text-red-600" : ""
                }`}
            >
                {title}
            </dt>
            <dd
                className={`order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl ${
                    amount < 0 ? "text-red-700" : ""
                }`}
            >
                BDT {amount}
            </dd>
        </div>
    );
};

BalanceCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default BalanceCard;
