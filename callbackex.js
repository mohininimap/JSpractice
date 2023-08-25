function test(callback){
    console.log("This is main function")
    callback();
    }
    function display(){
        console.log("Display first function")
    }
    
    test(display)

    // A callback function is a function passed into another function as an argument, 
    // which is then invoked inside the outer function to complete some kind of routine or action.