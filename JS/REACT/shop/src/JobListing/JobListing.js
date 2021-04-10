import { useState, useEffect } from 'react';
import Item from '../Item';

export default function JobListing() {
    const [person, setPerson] = useState([{name: 'Rick', skills: 'FullStack'}])
    const [name, setName] = useState('');
    const [skills, setSkills] = useState();

    const saveItem = () => {
        setPerson([...person, {name: name, skills: skills}])
        console.log('product changed')
        console.log(person)
    }

    const personChange = (event) => {
        setName(event.target.value);
    }

    const skillsChange = (event) => {
        setSkills(event.target.value);
    }
    return (
        <div>
            <div>
                <input name="name" placeholder="Add Name" onChange={(event) => personChange(event)}></input>
                <input name="skills" placeholder="Skills" onChange={(event) => skillsChange(event)}></input>
                <button onClick={saveItem}>Add Item</button>
            </div>
            <section>
                    {
                        person.map((el, index) => (
                            <div key={index}>
                                <div>{el.name} {el.skills}</div>
                                <button onClick={() => deleteItem(el)}>Delete</button>
                            </div>
                        ))
                    }
            </section>
        </div>
    )
}