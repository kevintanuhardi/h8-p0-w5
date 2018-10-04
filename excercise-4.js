function graduates (students) {
    result = {};
    // Cari Class
    classes = [];
    uniqueClasses = [];
    
    for(var i = 0; i < students.length; i++){
        classes.push(students[i].class)
    }
    //cari unique Class
    uniqueClasses.push(classes[0]);
    for(var i = 0; i < classes.length; i++){
        isUnique = true;
        for(var j = 0; j < uniqueClasses.length; j++){
            if(classes[i] === uniqueClasses[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique == true){
            uniqueClasses.push(classes[i])
        }
    }
    //buat object class di result
    for(var i = 0; i < uniqueClasses.length; i++){
        if(classes.length !==0){
            result[uniqueClasses[i]] = []
        }
    }

    // buat nilai yang lulus

    for(var i = 0; i < uniqueClasses.length; i++){
        
        for(var j = 0; j < students.length; j++){
            row = {};
            if((students[j].score >=75) && uniqueClasses[i] === students[j].class){
                row.name = students[j].name;
                row.score = students[j].score;
                result[uniqueClasses[i]].push(row)
            }
            
        }
    }


    return result;
  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}