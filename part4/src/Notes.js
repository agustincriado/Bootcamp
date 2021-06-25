export const Notitas = ({id, content, date}) => {

    return  <li key={id}>
         <p>{content}</p>
         <small>{date}</small>
     </li>
}