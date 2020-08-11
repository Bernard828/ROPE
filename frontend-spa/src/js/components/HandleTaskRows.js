import apiActions from '../api/apiActions';
import ReleaseTask from './ReleaseTask';
import HandleDropDowns from './HandleDropDowns';
import SelectDropDownID from './SelectDropDownID';


const appDiv = document.querySelector('.app');
const appDivLeft = document.querySelector('.appLeft');
const appDivRight = document.querySelector('.appRight');
var selectedRowId = 0;

function OnSelectedIndexChange(){
    console.log('left status called clicked');
}

function highlightSelectedRow() {
    var table = document.getElementById('table1Id');
    var cells = table.getElementsByTagName('td');
    
    for (let i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.onclick = function () {
            var rowId = this.parentNode.rowIndex;
            selectedRowId = rowId;
            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 1; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "#116466";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.style.backgroundColor = "rgb(173, 204, 209)";
            rowSelected.className += " selected";
            
            const statusDrop = HandleDropDowns.StatusDropDown();
            const releaseTaskId = rowSelected.cells[0].innerHTML;
            
            rowSelected.cells[2].innerHTML = `<select id="${releaseTaskId}" style="width:100px;" class="Leftedit-releaseTask__Status" onChange="${OnSelectedIndexChange()}" type="dropdown">${statusDrop}</select>`;
            SelectDropDownID.selectElement2('.Leftedit-releaseTask__Status',2);
            ////SelectDropDownID.selectElement('LeftstatusDropID',releaseTaskEdit.currentStatusID);
            
            const releaseTaskEndpoint = `https://localhost:44302/api/releaseTask/${releaseTaskId}`;
            const releaseTaskCallback = releaseTask => {
                appDivRight.innerHTML = ReleaseTask(releaseTask);
            };
            apiActions.getRequest(releaseTaskEndpoint, releaseTaskCallback);
        }
    }
    return selectedRowId;
}

function highlightSpecificRow(rowId) {
    var table = document.getElementById('table1Id');
    var rowSelected = table.getElementsByTagName('tr')[rowId];
    rowSelected.style.backgroundColor = "rgb(173, 204, 209)";
    rowSelected.className += " selected";
}

export default {
    highlightSelectedRow,
    highlightSpecificRow
}
