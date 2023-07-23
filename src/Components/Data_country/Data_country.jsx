export default function Data_country({titulo, dato}) {
    return (
        <section className="flex item-end gap-2 mb-[10px]">
            <h4 className="text-sm font-medium">
                {titulo}: {" "}
            </h4>
            <h5 className="text-sm font-regular">
                { dato}
            </h5>
        </section>
    );
}
