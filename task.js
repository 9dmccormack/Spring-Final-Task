//The code at the bottom is used to export this file as a module to be used in the client file.
//The fist line sets up my export as well, ignore it.
const TaskExport = function(){

    //returns a task object, similar to pizza
    function createTask(v,t){

        return {
            value:v,
            time:t
        };
    }

    //returns a random integer between 0 and n inclusive
    function rInt(n){
        return Math.round(n*Math.random());

    }
    //returns a list of task objects.
    //You must reference the function above to create them each time
    //make all times range from 0 to 15 and all values range from 0 to 100
    function Factory(n){
      let list =[];
      for(let a=0;a<n;a++){
        let t=createTask(rInt(15),rInt(100));
        list[a]=t;
      }
      return list;
    }

    //do not change anything below there!
    return{
        createTask,
        Factory
    }

}
module.exports = TaskExport;
