function blur(){
  let row = 4;
  let col = 4;
  let image = [
                [1,2,3,4],
                [5,6,7,8,],
                [9,10,11,12],
                [13,14,15,16]
              ];
         
              
  for (let i = 0; i <= height ; i++){ 
    for (let j = 0; j <= width ; j++){
        let starting_row = -1;
        let starting_col = -1;
        let ending_row = -1;
        let ending_col = -1;
    
        if(i == 0 && j == 0){
              starting_row = 0;
              starting_col = 0;
              ending_row = 1;
              ending_col = 1;
            }else if( i == 0 && j == width){
              starting_row = 0;
              starting_col = j - 1;
              ending_row = 1;
              ending_col = j; 
            }else if( i == height && j == 0){
              starting_row = i - 1;
              starting_col = 0;
              ending_row = i;
              ending_col = j + 1; 
            }else if( i == height && j == width){
              starting_row = i - 1;
              starting_col = j - 1;
              ending_row = i;
              ending_col = j; 
            }else if (i == 0 && (j > 0 && j < width)){
              starting_row = 0;
              starting_col = j - 1;
              ending_row = 1;
              ending_col = j + 1;
             }else if( i == height && (j > 0 && j < width)){
              starting_row = i - 1;
              starting_col = j - 1;
              ending_row = i;
              ending_col = j + 1;
             }else if( i > 0 && j == 0){
              starting_row = i - 1;
              starting_col = 0;
              ending_row = i + 1;
              ending_col = j + 1;
            }else if( i > 0 && j == width){
              starting_row = i - 1;
              starting_col = j-1;
              ending_row = i + 1;
              ending_col = j;
             }else{
              starting_row = i - 1;
              ending_row = i + 1;
              starting_col= j - 1;
              ending_col = j + 1;
            }
        let neighbours = [];
        if(starting_row > -1){
          for(let c = starting_row; c <= ending_row ; c++){
            for(let v = starting_col; v <= ending_col ; v++){
              neighbours.push(image[c][v]);
            }
          }
        }
        if(neighbours.length > 0){
          console.log("Neighbours"+ image[i][j], neighbours)
        }
    }  
  } 
}


blur();
