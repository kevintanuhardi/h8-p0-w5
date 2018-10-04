function highestScore (students) {
result = {};

  /*classes = ['foxes', 'wolves']

  result[classes[0]] = {}
  result.foxes
  result['foxes']

    */
  //cari class
  var classes = []
    for(var i = 0; i < students.length; i++){
      classes.push(students[i].class)
    }
    //buat class unique
  var uniqueClasses = [];
  
  uniqueClasses.push(classes[0])
  for(var j = 0; j < classes.length; j++){
      var isUnique = true;
      for(var k = 0; k < uniqueClasses.length; k++){
          if(classes[j] === uniqueClasses[k]){
              isUnique = false;
          }
      }
      if(isUnique === true){
          uniqueClasses.push(classes[j]);
      }
  }
  // buat object class di result
  for(var i = 0; i < uniqueClasses.length; i++){
    if(classes.length !==0){
      result[uniqueClasses[i]] = {};
      result[uniqueClasses[i]].name = "";
      result[uniqueClasses[i]].score = 0;
    }
  }

  //push nilai max per class

  
  for(var i = 0; i < students.length; i++){
    var check = true;
    for(var j = 0; j < uniqueClasses.length; j++){
      if((students[i].class === uniqueClasses[j]) && students[i].score > result[uniqueClasses[j]].score){
        result[uniqueClasses[j]].score = students[i].score;
        result[uniqueClasses[j]].name = students[i].name;
      }
      
    }
  }
  


  return result
}
  





  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}