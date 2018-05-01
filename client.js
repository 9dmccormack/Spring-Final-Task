//imports code from other file
const importTask = require("./task.js");
const Task = new importTask();

/*
    If you want to create a task type....... Task.createTask()
    If you want to create a list of task objects type......Task.Factory()
*/


//function should return a totalValue and totalTime variable wrapped in an object
function totals(list){

    let totalValue = 0;
    let totalTime = 0;

    for(letd=0;d<list.length;d++){
      totalValue=list[d].value+totalValue;
      totalValue

    }

    return {

    }
}

//works the the same as above, but stops short at the kth number in the list
function partialTotals(list,k){



}

//returns a sorted version of the task list from least to greatest according to its time variable
function sortTime(list){

    //provide the criteria to sort the tasks.  They are objects remember.
    return list.sort(/*fill this*/);

}

//returns a sorted version of the task list from least to greatest according to its value variable
function sortValue(list){


}

//returns a sorted version of the task list from least to greatest according to its impact
function sortImpact(list){

    //create a function which returns the impact of a given task
    function impact(task){

    }

    //finishes the sort
    return list.sort(/*fill this*/);

}


//this is the test code to see if your functions work
function mainTest(n){
    let taskList = Task.Factory(n);
    //tests basic totals
    console.log(totals(taskList));
    console.log(partialTotals(taskList, n/4));

    //tests to make sure the sorts are effective
    //both should outperform the original
    let minTime = sortTime(taskList);
    console.log(partialTotals(minTime, n/4));

    let minValue = sortValue(taskList);
    let maxValue = minValue.reverse();
    console.log(partialTotals(maxValue, n/4));

    let minImpact = sortImpact(taskList);
    let maxImpact = minImpact.reverse();
    console.log(partialTotals(maxImpact, n/4));
}

mainTest(60);
