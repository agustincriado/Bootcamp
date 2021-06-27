const Column = ({columna}) =>{
    return <div>{columna.map((value) => <h3 className={value}>{value}</h3>)}</div>
}

export default Column;