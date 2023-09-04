export default function MessagePage(props:any) {

    const { messages } = props;
    console.log(messages);

    return (
        <>
            <h2> Message Page</h2>
            <div> Ceci est la page des messages </div>

            {
                messages.map((message:any, index:any) => (
                    <div key={index}>
                        <h1> Nom </h1>
                        <p> { message.name } </p>
                       
                        <h1> Categorie </h1>
                        <p> { message.category } </p>
                        
                    </div>
                ))
            }
        </>
    )
}