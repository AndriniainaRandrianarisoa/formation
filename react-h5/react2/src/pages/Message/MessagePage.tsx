

export default function MessagePage(props:any) {
   
    const { messages } = props;

    return (
        <>
            <h2> Message Page</h2>
            <div> Ceci est la page des messages </div>

            {
                messages.map((element:any, index:any) => (
                    <div key={index}>
                        <h1> Nom </h1>
                        <p> { element.name } </p>
                        <p> { index } </p>
                    </div>
                ))
            }
        </>
    )
}