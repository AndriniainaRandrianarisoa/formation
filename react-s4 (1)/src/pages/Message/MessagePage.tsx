export default function MessagePage(props: any) {

    const { messages } = props;

    return (
        <>
            <h1> Page des messages </h1>

            { messages && 
                messages.map((message: any, index: number) => (
                    <>
                        <div key={index}>
                            <p> {message.title} </p>
                            <p> {message.category} </p>
                            <p> {message.message} </p>
                        </div>
                        --------------------------
                    </>
                ))
            }
        </>
    )
}