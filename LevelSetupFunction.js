let levels = []

var l = [[20, 0, 20, 760],[20, 760, 120, 880],[120, 880, 1180, 880]] 
function temp(cors){
  let testLevel = new Level();
  for(var i = 0;i<cors.length;i++){
    var cr = cors[i]
    testLevel.lines.push(new Line(cr[0],cr[1],cr[2],cr[3]))
  }
  return testLevel
}

function levelSetup(){
  levels.push(tempLevel);
}