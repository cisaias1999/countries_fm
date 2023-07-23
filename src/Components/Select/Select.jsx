export default function Select({ label, options, handleSelectChange }) {
    return (
        <>
        <select onChange={handleSelectChange} className="rounded-md bg-[#FFF] shadow-custom w-[200px] h-[56px] px-[20px] focus:outline-none">
            <option value="">{label}</option>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))} 
        </select>
        </>
    );  
}