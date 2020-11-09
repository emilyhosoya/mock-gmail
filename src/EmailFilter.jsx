import React from 'react'

function EmailFilter(props){
    return(
        <div>     
            <label>Choose an Email: </label>
            <select onChange={props.onSelectMessage}>
                <option key="All" name='All'>Display All</option>
                    {props.emails.map((each)=><option key={each.id} name={each.subject}>"{each.subject}" from {each.sender}</option>)}
            </select>
        </div>
        )
    }
    
export default EmailFilter;