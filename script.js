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
            if(inp == "" || inp == " "){
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
                        if(flag > 72900){
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
function randomIntFromInterval(min, max) 
{ 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function removeElement(arr,val)
{
    const index = arr.indexOf(val);
    if (index > -1) 
    {
        arr.splice(index, 1);
    }
    return arr;
}
function generate()
{
    var level = document.querySelector('input[name="level"]:checked');
    if(level == null){
        window.alert("choose level");
        return;
    }
    console.log(level.value);
    if(level.value == "hard")
    {
        var NOfCells = randomIntFromInterval(40,60);
    }
    else if( level.value == "medium")
    {
        var NOfCells = randomIntFromInterval(20,30);
    }
    else{
        var NOfCells = 19;
    }
    for(var i=0;i<3;i++)
    {
        var dig = [1,2,3,4,5,6,7,8,9];
        for(var a=0;a<3;a++)
        {
            for(var b=0;b<3;b++)
            {
                var val = Math.floor(Math.random() * dig.length);
                document.getElementById((a+3*i)+""+(b+3*i)).value = dig[val];
                dig = removeElement(dig,dig[val]);
            }
        }
    }
    document.getElementById("sudoku").style.color = "red";
    getInput();
    removeRandomElements(NOfCells);
}

function removeRandomElements(n)
{
    var ar = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '20', '21', '22', '23', '24', '25', '26', '27', '28', '30', '31', '32', '33', '34', '35', '36', '37', '38', '40', '41', '42', '43', '44', '45', '46', '47', '48', '50', '51', '52', '53', '54', '55', '56', '57', '58', '60', '61', '62', '63', '64', '65', '66', '67', '68', '70', '71', '72', '73', '74', '75', '76', '77', '78', '80', '81', '82', '83', '84', '85', '86', '87', '88'];
    for(var i=0;i<n;i++)
    {
        var k =ar[Math.floor(Math.random()*ar.length)];
        console.log(k)
        document.getElementById(k).value = "";
    }
    for(var i=0;i<9;i++)
    {
        for(var j=0;j<9;j++)
        {
            document.getElementById(i+""+j).style.color = "red";   
        }
    }
}
