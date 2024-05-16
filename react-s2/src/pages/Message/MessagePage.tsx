export default function MessagePage(props) {
  const { prout } = props;
  
  return (
    <>
      <h1> Message Page </h1>

      <p> Ceci est la page des messages</p>
      <ul>
        {prout.map((message, index) => (
          <li key={index}>
            {message.title}, {message.message}
          </li>
        ))}


        {/* {prout.map((message, index) => {
          return (
            <li key={index}>
              {message.title}, {message.message}
            </li>
          );
        })} */}


      </ul>
    </>
  );
}
