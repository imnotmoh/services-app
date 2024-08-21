import react from "react"

function NavItems(props) {
    return (
        <div className="NavItem">
            <a href={`./${props.name.toLowerCase()}`}>{props.name}</a>
        </div>

    );
}

export default NavItems;