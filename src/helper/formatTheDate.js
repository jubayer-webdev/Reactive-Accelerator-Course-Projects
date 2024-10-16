const formatTheDate = (date) => {
    // Convert the input string to a Date object
    const dateObj = new Date(date);
    // Format the date
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-GB", options);

    return formattedDate;
};

export default formatTheDate;
