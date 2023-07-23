export default function Select({ label, options, handleSelectChange }) {
    return (
        <>
            <select onChange={handleSelectChange} className="rounded-md bg-[#FFF] shadow-custom w-[200px] h-[56px] px-[20px] focus:outline-none text-[#111517]">
                <option value="" className="text-[#111517]">{label}</option>
                {options.map((option) => (
                    <option value={option.value} key={option.id} className="text-[#111517]">
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}