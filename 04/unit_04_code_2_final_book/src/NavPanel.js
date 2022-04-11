function NavPanel (props) {

    const data = props.data;

    return (
        <div className="navigation">
            <h4>{data.title}</h4>
            <ul>
                {data.links.map(item => <li key={item.text}><a href={item.url}>{item.text}</a></li>)}
            </ul>
        </div>
    );
}

export default NavPanel;