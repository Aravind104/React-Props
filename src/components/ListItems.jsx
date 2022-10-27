import {people} from './data';
import { getImgUrl } from './utils';
import "./utils.css";
function ListItems(){
    const chemist=people.filter(
        person => person.profession==='chemist'
        )
    const listItems=chemist.map(
        person => 
        <li key={person.id}>
            <img 
            src={getImgUrl(person)}
            alt={person.name}
            className="box"
            />
            <p>
                <b>{person.name}</b>
                {' '+person.profession+' '}
                known for {person.accomplishment}
            </p>
            
        </li>);
    return(
        <ul>
            { listItems}
        </ul>
    )
}
export default ListItems;