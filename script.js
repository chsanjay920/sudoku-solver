var iteams = [
                [9,6,0,0,0,0,4,0,0],
                [1,8,5,4,2,0,0,0,0],
                [0,0,0,0,0,1,9,0,8],
                [5,3,0,9,8,0,6,0,0],
                [0,4,9,0,0,0,0,0,1],
                [8,2,7,0,0,0,0,4,9],
                [7,5,0,1,0,6,0,8,0],
                [0,0,6,8,3,0,0,5,0],
                [0,1,8,7,0,0,3,0,6],
            ];
solve(iteams)
console.log(iteams)

function isValid(iteams,row,col,c){
    for(let i=0;i<9;i++){
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (iteams[row][i] == c || iteams[i][col] == c || iteams[m][n] == c)
        return false
        
    }
    return true;
}
function solve(iteams)
{
    for(var i = 0 ;i<9;i++){
        for(var j =0;j<9;j++){
            if(iteams[i][j] == 0){
                for(let c=1;c<=9;c++){
                    if(isValid(iteams,i,j,c)){
                        iteams[i][j] =c;
                        if(solve(iteams)==true){
                            return true
                        }
                        else{
                            iteams[i][j]=0;
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}
