const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++){
    console.log(data[i]);
  }
}

// 2. Add Data
function addData() {
  const name=prompt("Enter the name of employee");
  let age=prompt("Enter the age of employee");
  const profession=prompt("Enter the profession of employee");
  age=Number(age);
  if(name && !isNaN(age) && profession){
    newData={name,age,profession};
    data.push(newData);
    console.log("Data Added",data)
  }
  else{
    console.log("Invalid Data")
  }
  
}

// 3. Remove Admins
function removeAdmin() {
  const newData=[];
  for(let i=0;i<data.length;i++){
    if(data[i].profession!=="admin"){
      newData.push(data[i]);
    }
  }

 console.log(newData)
  }

// 4. Concatenate Array
function concatenateArray() {
  const dummyData=[
    { name: "Sheeba", age: 28, profession: "IT" },
    { name: "Zaky", age: 27, profession: "QA Eng" },
  ];

  const concateTwoArray=data.concat(dummyData);
  console.log("Concat two Arrays data+dummyData",concateTwoArray);
}

// 5. Average Age
function averageAge() {
  let totalAge=0;
  for(let i=0;i<data.length;i++){
    totalAge+=data[i].age;
  }
  const avg=totalAge/data.length;
  console.log("Average Age of Employees",avg)

}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person =>person.age>25);
  if(isAbove25){
    console.log("At least one person is above age of 25.");
  }
  else{
    console.log("No person is above the age of 25");
  }
}

function uniqueProfessions() {
  //create an empty object to store unique profession
  const uniqueProfessions ={}
  for(let i =0;i<data.length;i++){
    const profession = data[i].profession;
    uniqueProfessions[profession] = true;
  }
  const uniqueProfessionsArray=Object.keys(uniqueProfessions);
  console.log("Unique Profession",uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) =>a.age - b.age);
  console.log("Sorted",data);
}

// 9. Update Profession
function updateJohnsProfession() {
  //Loop through the data array to find John professin and update his profession
  for(let i =0;i<data.length;i++){
    if(data[i].name ==="john"){
      data[i].profession ="manager";
      break;
    }
  }
  console.log("Updated john's manager",data);
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount =0;
  let adminCount =0;
  for(let i =0;i<data.length;i++){
    const profession = data[i].profession;
    if(profession ==="developer"){
      developerCount++;
    }
    else if(profession ==="admin"){
      adminCount++;
    }
  }
  console.log("Total Developers Count",developerCount);
  console.log("Total Admins Count",adminCount);
}
