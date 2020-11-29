var person = {
    if( _salary == 'undefined' ) {
        _salary = 1000;
    }
    getSecretSalaryInfo: function (){
        return this._salary;
    }
};

var stoleSalaryInfo = person.getSecretSalaryInfo;

console.log(person.getSecretSalaryInfo()); //принтира 1000
console.log(stoleSalaryInfo()); //принтира undefined