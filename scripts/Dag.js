function dag(){
    var date = new Date();
    
    //maand
    if (date.getMonth() < 9){
        var maand = ""+date.getMonth()+1;
    } else {
        var maand = (date.getMonth())+11;
    }
    
    //dag
    if (date.getDate() < 9){
        var dag = "0"+date.getDate();
    } else {
        var dag = date.getDate();
    }
    
    return date.getFullYear() + "-" + maand + "-" + dag;
};

module.exports = {
    
    //datum
    dag: function(){
        return dag();
    },
    
    //datum
    datum: function(){
        return dag();
    }
};