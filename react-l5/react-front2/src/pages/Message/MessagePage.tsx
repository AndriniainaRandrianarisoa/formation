export default function MessagePage(props:any) {

    const {messages} = props;


    return (
        <>
            <h2> Page de messages </h2>

            <div>
                {
                    messages.map((message:any, index:number) => (
                        <div key={index}> 
                            <h5> Index : {index }</h5>
                            <h5> Nom : {message.firstname }</h5>
                            <h5> Categorie : {message.category }</h5>
                            <h5> Message : {message.message }</h5>
                        </div>
                    ))
                }
            </div>
        </>
    )
}