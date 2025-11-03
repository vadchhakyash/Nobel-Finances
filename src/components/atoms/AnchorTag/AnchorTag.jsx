function Anchor({clasName,name,href,onclick}){
    return(
        <a href={href} onClick={onclick} className={clasName}>{name}</a>
    )
}

export default Anchor;