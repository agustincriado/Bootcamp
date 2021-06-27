const Button = ({col, handle, dir}) => {
    return <div>
        {col.length > 0 ? <button onClick={handle}>Move to {dir}</button> : <button disabled>Move to {dir}</button>}
    </div>
}

export default Button;