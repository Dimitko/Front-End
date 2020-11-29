let DA = [];
DA.push(new Date());
DA.push(new Date('December 8, 2020 21:00:00'));
let DA2 = DA.map(date => date.getDay());

let DA3 = [];

for( i = 0; i < 2; i++){
    dd = String(DA[i].getDate()).padStart(2, '0');
    mm = String(DA[i].getMonth()).padStart(2, '0');
    yyyy = String(DA[i].getFullYear());
    hh = String(DA[i].getHours()).padStart(2, '0');
    min = String(DA[i].getMinutes()).padStart(2, '0');
    ss = String(DA[i].getSeconds()).padStart(2, '0');
    
    let day;
    switch(DA2[0]){
    case(0):
        day = 'понеделник';
        break;
    
    case(1):
        day = 'вторник';
        break;
    
    case(2):
        day = 'сряда';
        break;
    
    case(3):
        day = 'четвъртък';
        break;
    
    case(4):
        day = 'петък';
        break;
    
    case(5):
        day = 'събота';
        break;
    
    case(6):
        day = 'неделя';
        break;
    }
    DA3.push('Дата: ' + dd + '.' + mm + '.' + yyyy + ', час: ' + hh + ':' + mm + ':' + ss + ', ' + day + ', ');
}
