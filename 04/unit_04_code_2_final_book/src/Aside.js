import NavPanel from './NavPanel';

function Aside () {

    const navigation1 = {
        title : "Main navigation",
        links : [
          {text: 'Main', url : '/'},
          {text: 'About', url : '/about'},
          {text: 'Contacts', url : '/contacts'},
        ]
      };
      
      const topPages = {
        title : "Top pages",
        links : [
          {text: 'Notebooks', url : '/cat/notebooks'},
          {text: 'iPads', url : '/cat/ipads'},
          {text: 'Phone', url : '/cat/phones'},
        ]
      };
      
      const lastComments = {
        title : "Last comments",
        links : [
          {text: 'some text...', url : '/comments/29424'},
          {text: 'comments 2', url : '/comments/293434'},
          {text: 'some comments 3', url : '/comments/29314'},
        ]
      };

    return (
        <>
            <NavPanel data = {navigation1} />
            <NavPanel data = {topPages} />
            <NavPanel data = {lastComments} />
        </>
    )
}

export default Aside;