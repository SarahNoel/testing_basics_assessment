function grader(grade){
  if(grade >= 97){
    return "A+";
  }
  else if(grade <= 96 && grade >= 94){
    return "A";
  }
  else if(grade <= 93 && grade >= 90){
    return "A-";
  }
  else if(grade <= 89 && grade >= 87){
    return "B+";
  }
  else if(grade <= 86 && grade >= 84){
    return "B";
  }
  else if(grade <= 83 && grade >= 80){
    return "B-";
  }
  else if(grade <= 79 && grade >= 77){
    return "C+";
  }
  else if(grade <= 76 && grade >= 74){
    return "C";
  }
  else if(grade <= 73 && grade >= 70){
    return "C-";
  }
  else if(grade <= 69 && grade >= 67){
    return "D+";
  }
  else if(grade <= 66 && grade >= 64){
    return "D";
  }
  else if(grade <= 63 && grade >= 60){
    return "D-";
  }
  else if(grade <= 59){
    return "F";
  }
}

  function medianScore(scoreArr){
    total = 0;
    scoreArr.map(function(num){
      return total += num;
    });
      return +(total /scoreArr.length).toFixed(2);
  }

  function modeScore(scoreArr){
    var scoreStats = [];
    for (var i = 0; i < scoreArr.length; i++) {
      var scoreObj ={};
      var number = 1;
      for (var j = 0; j < scoreArr.length; j++) {
        if(i != j){
          if(scoreArr[i] === scoreArr[j]){
            number ++;
          }
        }
        scoreObj.value = scoreArr[i];
        scoreObj.count = number;
        scoreStats.push(scoreObj);
      }
    }
    var biggest = scoreStats[0];
    for (var k = 0; k < scoreStats.length; k++) {
      if(scoreStats[k].count > biggest.count){
        biggest = scoreStats[k];
      }
    }
    return biggest.value;
  }



module.exports = {grader:grader,
                  medianScore:medianScore,
                  modeScore:modeScore
                };
