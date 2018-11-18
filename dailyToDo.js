// var data;
// $.get(data.json, function(e) {
// data = e;
// });
var days = [];

class notDay {
    constructor() {
        this.didntLookAtScreen = false;        
        this.submittedSleep = false;
        this.drunk = false;
        this.submittedDrunk = false;
    }
}

function resetData() {
    for(var i = 0; i < 31; i++) {
        days.push(new notDay());
    }
}
resetData();

function initDailyToDo(){
    var myCheck = $("#mycheck");
    var myCheck2 = $("#mycheck2");
    var d = new Date()
    var currentDay = d.getDate();
    if (days[currentDay].submittedSleep){
        myCheck.prop('disabled', true);      
    } else {
        myCheck.prop('disabled', false);        
    }

    if(days[currentDay].didntLookAtScreen) {
        myCheck.prop("checked", true)  
    } else {
        myCheck.prop("checked", false)  
    }

    if(days[currentDay].submittedDrunk) {
        myCheck2.prop('disabled', true);        
    } else {
        myCheck2.prop('disabled', false);        
    }
    
    if(days[currentDay].drunk) {
        myCheck2.prop("checked", true);
    } else {
        myCheck2.prop("checked", false);
    }
    
}

function submitDaily() {
    var myCheck = $("#mycheck");
    var myCheck2 = $("#mycheck2");
    var d = new Date()
    var currentDay = d.getDate();
    days[currentDay].didntLookAtScreen = myCheck.is(":checked");
    days[currentDay].drunk = myCheck2.is(":checked");
    days[currentDay].submittedSleep =true;
    days[currentDay].submittedDrunk = true;
    initDailyToDo();
}




