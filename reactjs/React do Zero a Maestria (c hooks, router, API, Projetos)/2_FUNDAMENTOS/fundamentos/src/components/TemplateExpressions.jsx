const TemplateExpressions = () => {
    const name = 'Thiago '
    const date = {
        age: 23,
        job: 'Developer',
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Voce atua como: {date.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX REACT")}</p>
        </div>
    )
}

export default TemplateExpressions;