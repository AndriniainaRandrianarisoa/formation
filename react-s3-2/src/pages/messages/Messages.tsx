
const Messages = ({ messages }: any) => {
    console.log('message component:', messages)
    return (
        <div>
            <ul>
{
                messages.map((e: any, index: number) => (
                    <li key={index}>
                        <p>{e.title}</p>
                        <p>{e.content}</p>
                        <p>{e.email}</p>
                    </li>
                ))
            }
            </ul>
            
        </div>
    );
};

export default Messages;