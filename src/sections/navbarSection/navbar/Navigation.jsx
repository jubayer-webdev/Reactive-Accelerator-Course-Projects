const Navigation = () => {
    const navItems = [
        { id: crypto.randomUUID(), label: "Home" },
        { id: crypto.randomUUID(), label: "App" },
        { id: crypto.randomUUID(), label: "Account" },
        { id: crypto.randomUUID(), label: "Export" },
    ];
    return (
        <ul className="flex gap-4 text-gray-500 font-medium">
            {navItems?.map((item) => (
                <li key={item?.id}>{item?.label}</li>
            ))}
        </ul>
    );
};

export default Navigation;
