/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let targetArray = word.split('');
    // console.log(board[0][1]);
    let statusArray = [];
    for(let i=0;i<board.length;i++){
      let row = [];
      statusArray.push(row);
      for(let j=0;j<board[0].length;j++){
        row.push(0);
      }
    }
    
    for(let i=0;i<board.length;i++){
      for(let j=0;j<board[0].length;j++){
        
        clearStatus(statusArray);
        console.log(statusArray);
        if(temp = go(i,j,board,targetArray,statusArray,0)){
          console.log(word+'----'+true);
          return true;
        }
      }
    }
    // let result = go(0,0,board,targetArray,statusArray,0);
    console.log(word+'----'+false);
    return false;
};

function clearStatus(statusArray){
  for(let i=0;i<statusArray.length;i++){
    for(let j=0;j<statusArray[0].length;j++){
      statusArray[i][j] = 0;
    }
  }
}

function go(i,j,board,targetArray,statusArray,curLength){
  if(i<0 || j<0 || i==board.length || j==board[0].length){
    return false;
  }
  // console.log(board[i][j]);
  // console.log(statusArray);
  if(board[i][j] == targetArray[curLength] && statusArray[i][j] == 0){
    if(curLength == targetArray.length-1){
      return true;
    }else{
      statusArray[i][j] = 1;
      let temp = null;

      temp = go(i+1,j,board,targetArray,statusArray,curLength+1);
      if(temp){
        return true;
      }else if(i+1<board.length){
        statusArray[i+1][j] == 0;
      }

      temp = go(i-1,j,board,targetArray,statusArray,curLength+1);
      if(temp){
        return true;
      }else if(i-1>=0){
        statusArray[i-1][j] == 0;
      }

      temp = go(i,j+1,board,targetArray,statusArray,curLength+1);
      if(temp){
        return true;
      }else if(j+1<board[0].length){
        statusArray[i][j+1] == 0;
      }

      temp = go(i,j-1,board,targetArray,statusArray,curLength+1);
      if(temp){
        return true;
      }else if(j-1>=0){
        statusArray[i][j-1] == 0;
      }

      return false;
    }
  }
  // statusArray[i][j] == 0;
  // console.log(i,j);
  return false;
}

// let testBoard = [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ];

// exist(testBoard, "ABCCED");
// exist(testBoard, "SEE");
// exist(testBoard, "ABCB");
// exist(testBoard, "FCEDA");
// exist(testBoard, "ESE");
// exist(testBoard, "CCE");
// exist(testBoard, "ABCESEECF");

// let testBoard2 = [
//   ["C","A","A"],
//   ["A","A","A"],
//   ["B","C","D"]
// ];

// exist(testBoard2, "AAB");
// exist(testBoard2, "CAA");
// exist(testBoard2, "AAD");

let testBoard3 = [
  ["A","B","C","E"],
  ["S","F","E","S"],
  ["A","D","E","E"]
];
exist(testBoard3, "ABCESEEEFS");
