const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {

  for(let i of data)
  {
    if(i.profession === 'developer') // checks whether the person is developer or not
    console.log(i);                  //if person is developer, prints his details
  }
}

// 2. Add Data
function addData() {

  const newData = {
    name: prompt("Enter a name:"),              // receives person's name
    age: parseInt(prompt("Enter an age:")),     // receives person's age
    profession: prompt("Enter a profession:"),  // receives person's profession
  };
  data.push(newData);                           // to add person data into array
  console.log("New data added:", newData);      // prints details of new person


}

// 3. Remove Admins
function removeAdmin() {

  for(let i in data)                      //initiates loop through-out length of array
  {
    if(data[i].profession === 'admin')    //checks person's profession 
    {
      data.splice(i,1)                    // if person is admin, removes that fellow
    }
  }
  console.log(data)                       // prints new data


}

// 4. Concatenate Array
function concatenateArray() {

  //duplicate array..

  let arr1 = [                                                    
    { name: 'gokul', age: 23, profession: 'developer' },
    { name: 'rajesh', age: 24, profession: 'singer' },
  ];

  let arr = data.concat(arr1);                    //joins duplicate array to main array
  console.log("concatenated array:",arr);         //prints concatenated array


}

// 5. Average Age
function averageAge() {
  console.log("The average age of all individuals:")
  let sum=0;
  for(let i in data){                // iterates through-out array to sumup the ages of persons 
    sum+=data[i].age;
  }
  console.log(sum/data.length)        // prints average age of the persons in data

}

// 6. Age Check
function checkAgeAbove25() {
    let count =0;
  for(let i in data){
    if(data[i].age>25){       //checks persons age, whether it is >25 or not
      count++;                  // if >25 increases count from 0 --> updated value
    }
  }
  if(count==0){
    console.log("There is no-one with age above 25");
  }
  else{
    console.log("There is atleast person with age above 25");
  }

}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {

  data.sort((a,b)=>a.age - b.age);                      // compares age of persons and sort the data based on their age
  console.log("Sorted data based on age of professionals",data);

}

// 9. Update Profession
function updateJohnsProfession() {
  console.log("john profession is updated to manager");
  for(let i in data){
    if(data[i].name === 'john'){              // if person name is john, this condition changes his profession to manager
      data[i].profession = 'manager';
      console.log(data[i]);
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let noOFprofessionals=0;
  for(let i in data){
    if(data[i].profession=='developer'||data[i].profession=='admin'){        // this block runs if person profession is developer or admin
      noOFprofessionals++;
    }
  }
  console.log("The total count of developers and admins",noOFprofessionals);  //returns total no.of professionals (developer/admin)

}
