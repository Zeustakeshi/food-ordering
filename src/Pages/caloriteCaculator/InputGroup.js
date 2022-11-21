const InputGroup = ({
    id = "",
    type = "text",
    name = "",
    label = "",
    unit,
    className = "",
    max = 200,
    min = 1,
    setFormData,
}) => {
    return (
        <div
            className={`group flex flex-col min-w-[300px] max-w-[350px] ${className}`}
        >
            <label htmlFor={id} className="text-sm mb-2 font-medium">
                {label}{" "}
                {unit && (
                    <span className="text-sm font-normal text-gray2">{`(${unit})`}</span>
                )}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                max={max}
                min={min}
                className="px-6 py-3 rounded-3xl outline-none border-gray2 border-2 bg-transparent "
                onBlur={(e) => {
                    const value = e.target.value;
                    if (value.trim() == "" || value === 0) return;
                    setFormData((prev) => ({
                        ...prev,
                        [name]: value,
                    }));
                }}
            />
        </div>
    );
};

export default InputGroup;
