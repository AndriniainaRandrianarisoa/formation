export default function MessagePage(props) {
  const { sendToMessage } = props;
  return (
    <>
      <h1> Message Page </h1>
       <p>{sendToMessage} </p>
    </>
  );
}
