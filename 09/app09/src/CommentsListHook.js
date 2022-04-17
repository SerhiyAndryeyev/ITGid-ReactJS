export default function CommentsListHook({ data }) {

  console.log(data);

  return (

    <div>
      <div>
        {/* <button onClick={onlyEven}>Only even comments</button> */}
      </div>
      {data.map((el, index) => (
        <section key={el.id}>
          <p><b>{index + 1}. {el.email}</b></p>
          <p>{el.body}</p>
        </section>
      ))}
    </div>
  );
}