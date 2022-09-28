const input=document.getElementById('dob');
const ageDisplay=document.querySelector('.age');

function getAge(){
   const birthDate=new Date(input.value);   
   return birthDate;
};

function calcAge(){ 
    const DOB=getAge();
    const bYear=DOB.getFullYear();
    const bMonth=DOB.getMonth()+1;
    const bDay=DOB.getDate();
    
    const now=new Date();
    let cYear=now.getFullYear();
    let cMonth=now.getMonth()+1;
    let cDay=now.getDate();

    if(bDay>cDay){
        cMonth=cMonth-1;
        cDay=cDay+31
    }
    if(bMonth>cMonth ){
        cMonth=cMonth+12;
        cYear=cYear-1;
    }
    
    const ageYear=cYear-bYear;
    const ageMonth=cMonth-bMonth;
    const ageDay=cDay-bDay;

    const age=`${ageYear} years ${ageMonth} months ${ageDay} days`;
    return age;
}

function displayAge(){
    const cAge=calcAge();
    ageDisplay.textContent=cAge;
    
}

input.addEventListener('input', displayAge);

