/* A NavItem component includes the button and menu that opens when you press that button
on the Nav */

function NavItem(props) {

  

  return (
    <>

    <div className="navButton navButton1" onClick={props.onClicked} menunum={props.id}>

    </div>

    <div className="navMenu navMenu1" menunum={props.id}>
      {props.content}
    </div>

    </>

  )
}

export default NavItem;