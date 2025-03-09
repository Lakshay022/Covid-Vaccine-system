var add_id =[];
var vaccine_name =[];
var trail =[];
var cost =[];

function save()
{
    var x ,v1,v2,v3,v4;

       v1 = document.getElementById("t1").value;
       v2 = document.getElementById("t2").value;
       v3 = document.getElementById("t3").value;
       v4 = document.getElementById("t4").value;
       
       add_id.push(v1);
       vaccine_name.push(v2);
       trail.push(v3);
       cost.push(v4);

       alert("DATA SAVED")
       document.getElementById("t1").value = '';
       document.getElementById("t2").value = '';
       document.getElementById("t3").value = '';
       document.getElementById("t4").value = '';
    
}




function dlt()
{
    console.log("hello"); 
    document.getElementById("t1").value = '';
    document.getElementById("t2").value = '';
    document.getElementById("t3").value = '';
    document.getElementById("t4").value = '';
    
for(let x =0 ; x<trail.length ; x++)
{
    console.log(add_id[x]);
}
}


let s = document.getElementById("search");

s.innerHTML += `  <label for="search">Enter the vaccine id</label>
<input type="text" id ="s1" > 
<input type = "button" value = "search" onclick="srch()">
<br>
 <input type="button" value="reload" onclick="reload()">`

 function reload()
 {
    s.innerHTML = `  <label for="search">Enter the vaccine id</label>
<input type="text" id ="s1" > 
<input type = "button" value = "search" onclick="srch()">
<br>
 <input type="button" value="reload" onclick="reload()">`
 }

function srch()
{


    console.log("hii");
    var idno;
    var x;
    var flag = false;

    let z = document.getElementById("s1").value;
 
    for(x = 0 ; x< add_id.length ; x++)
    {
        if(z ===  add_id[x])
        {
           s.innerHTML += `<table border="1" style="width:100%">
            <tr>
            <th>vaccine id</th>
            <th>Name</th>
            <th>trail phase</th>
            <th>cost</th> 
            <tr>
            <td>${add_id[x]}</td>
            <td>${vaccine_name[x]}</td>
            <td>${trail[x]}</td>
            <td>${cost[x]}</td>
            </tr>`

            flag = true;
            break;
        }
    }

    if(flag == false)
    {
        s.innerHTML = `That vaccine id are not avaliable 
          <br> or <br>
          please Give an another vaccine ID<br>
          click on reload Button 
          <input type="button" value="reload" onclick="reload()">
          ` 
    }

    if(add_id.length === 0){
        alert("pls enter the data");
    }
}


let d = document.getElementById("display");

d.innerHTML += `<input type="button" value="Display" onclick="disp()">`

d.innerHTML += `<input type="button" value="reset" onclick="reset()">`



function disp()
{

    d.innerHTML += 
        `<table border="1" style="width:800px">
                <tr >
                <th style="width:200px">vaccine id</th>
                <th style="width:200px">Name</th>
                <th style="width:200px">trail phase</th>
                <th style="width:200px">cost</th> 
                </tr>`
    for(x = 0 ; x< add_id.length ; x++)
    {
        
    d.innerHTML += 
    `<table border="1" style="width:800px">
    <tr>
    <td style="width:200px">${add_id[x]}</td>
    <td style="width:200px">${vaccine_name[x]}</td>
    <td style="width:200px">${trail[x]}</td>
    <td style="width:200px">${cost[x]}</td>
    </tr>`

   
}
if(add_id.length === 0){
    alert("pls enter the data");
}

}
function reset()
{
    d.innerHTML =`<input type="button" value="Display" onclick="disp()">
    <input type="button" value="reset" onclick="reset()">` ;
}









let sortt =  document.getElementById("sort");

sortt.innerHTML+=`<input type="button" value="Sort and Display" onclick="sort1()">
<br>
<input type ="button" value="back" onclick="back()">`


function back()
{
    sortt.innerHTML =`<input type="button" value="Sort and Display" onclick="sort1()">
    <br>
    <input type = "button" value = "back " onclick="back()">`
}

function sort1()
{
   

        
    for(let i=0 ; i< add_id.length -1 ; i++)
    {
       for(let j=0 ; j< add_id.length -i -1 ; j++)
       {
          if(add_id[j] > add_id[j+1]){

             let temp = add_id[j];
            add_id[j] = add_id[j+1];
             add_id[j+1] = temp;

             let t = vaccine_name[j];
             vaccine_name[j] = vaccine_name[j+1];
             vaccine_name[j+1] = t;

             let t1 = trail[j];
             trail[j] = trail[j+1];
             trail[j+1] = t1;

             let t2 = cost[j];
             cost[j] = cost[j+1];
             cost[j+1] = t2;
          }
       }
    }

    sortt.innerHTML += 
    `<table border="1" style="width:800px">
            <tr >
            <th style="width:200px">vaccine id</th>
            <th style="width:200px">Name</th>
            <th style="width:200px">trail phase</th>
            <th style="width:200px">cost</th> 
            </tr>`

    for(let y = 0 ; y< add_id.length ; y++)
    {

       
    sortt.innerHTML += 
    `<table border="1" style="width:800px">
            <tr>
            <td style="width:200px">${add_id[y]}</td>
            <td style="width:200px">${vaccine_name[y]}</td>
            <td style="width:200px">${trail[y]}</td>
            <td style="width:200px">${cost[y]}</td>
            </tr>`
}

if(add_id.length === 0){
    alert("pls enter the data");
}
}

 const h=10;
  function foo(h)
  {
   console.log(h)
   const h =20;
  }


foo();
