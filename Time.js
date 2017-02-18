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


function dag(){
    var month = new Array();
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";

    var date = new Date();
    var maand = month[date.getMonth()];
    
    //dag
    if (date.getDate() < 9){
        var dag = "0"+date.getDate();
    } else {
        var dag = date.getDate();
    }
    
    return date.getFullYear() + "-" + maand + "-" + dag;
};

module.exports = {
    
    //error
    time: function(){
        return time();
    },  
    //log
    dag: function(){
        return dag();
    }
};