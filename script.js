var iteams = [];

for(let g = 0;g<9;g++){
    iteams[g] = [];
}

function act(){
    for(let a=0;a<9;a++){
        for(let b=0;b<9;b++){
            let inp = document.getElementById(a+""+b).value;
            if(inp == ""){
                iteams[a][b] = 0
            }
            else{
                iteams[a][b] = parseInt(inp)
            }
        }
    }
    console.log(iteams)
solve(iteams)
}
    
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
