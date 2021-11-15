var iteams = [];
var flag = 0

//initialize 2dimension array with  
for(let g = 0;g<9;g++){
    iteams[g] = [];
}
//get inputed date into the js variable
function getInput(){
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
    solve(iteams)
}
function refresh(){
    location.reload();
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
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function solve(iteams)
{
    flag = flag+1
    for(var i = 0 ;i<9;i++){
                for(var j =0;j<9;j++){
                    if(iteams[i][j] == 0){
                        for(let c=1;c<=9;c++){
                            if(isValid(iteams,i,j,c)){
                                iteams[i][j] =c;
                                document.getElementById(i+""+j).value = iteams[i][j]; // passing values to the document
                                document.getElementById(i+""+j).style.color = "black";//changing colour
                                if(flag > 7290){
                                    window.alert("Invalid input provided")
                                    return true
                                }
                                // if recursion goes on to the infinity
                                // the above condition break the recursion 
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
