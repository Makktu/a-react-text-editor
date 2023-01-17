const UnorderedList = () => {
    const items = ["cat", "dog", "rabbit", "budgerigar"];

    return (
        <div>
            <ul>
                {items.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
        </div>
    );
};

export default UnorderedList;
