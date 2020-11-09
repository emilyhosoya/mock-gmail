import React from 'react'

function AllEmails(props){
    let allUserEmail = props.emails.map(each =>
        <tr key={`${each.id}`}>
            <td key="Subject">{each.subject}</td>
            <td key="Sender">{each.sender}</td>
        </tr>)

return(
<div>     
    <table key="AllEmails">
        <thead style={{fontWeight: "bold"}}>
            <tr>
                <td>Subject</td>
                <td>Sender</td>
            </tr>
        </thead>
        <tbody>
            {allUserEmail}
        </tbody>
    </table>
    </div>
        )
    }
    
export default AllEmails;