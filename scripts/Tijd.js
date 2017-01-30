function time(){
    var date = new Date();
    
     //maand
    if (date.getMonth() <= 9){
        var maand = ""+date.getMonth()+1;
    } else {
        var maand = (date.getMonth())+11;
    }
    
    //dag
    if (date.getDate() <= 9){
        var dag = "0"+date.getDate();
    } else {
        var dag = date.getDate();
    }
    
    //uur
    if (date.getHours()  <= 9){
        var uur = "0"+date.getHours();
    } else {
        var uur = date.getHours();
    }
    
    //minut
    if (date.getMinutes()  <= 9){
        var minut = "0"+date.getMinutes();
    } else {
        var minut = date.getMinutes();
    }
    
    //sec
    if (date.getSeconds()  <= 9){
        var sec = "0"+date.getSeconds();
    } else {
        var sec = date.getSeconds();
    }    
    
    return uur + ":" + minut + ":" + sec;  
}

module.exports = {
    
    //tijd export
    tijd: function(){
        return time();
    }
};