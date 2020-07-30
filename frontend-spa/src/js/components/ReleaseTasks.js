export default function ReleaseTasks(releaseTasks) {
    return `
        <h1><u>Release Tasks123</h1></u>
        <section>
        <div class="container">
            <div class="floatLeft">
                <table class="table-1" style="width:100%; float:left">        
                    <tr class="table_header">
                        <th class="table_headerFont">ID</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>DueTime</th>
                        <th>Assigned To</th>
                    </tr>
        ${releaseTasks.map(releaseTask => {
        var dueTime = FormatTime(releaseTask.currentDueTime);
        return `
            <tr class="table1__rowFont">
                <td>${releaseTask.id}</td>
                <td><a href="#" class="releaseTask__info" id="${releaseTask.id}">${releaseTask.name}</a></td>
                <td>${releaseTask.currentStatusID}</td>
                <td>${releaseTask.currentPriorityID}</td>
                <td>${dueTime}</td>
                <td>${releaseTask.assignedEmployeeID}</td>
            </tr>
                `
            }).join("")}
                </table>
            </div>    
        </div>
        </section>
    `
}

function FormatTime(time){
    var date = new Date(time);
    return (date.getHours()<10?'0':'') + date.getHours() + ":" +  (date.getMinutes()<10?'0':'') + date.getMinutes() + ":" + (date.getSeconds()<10?'0':'') + date.getSeconds();
}