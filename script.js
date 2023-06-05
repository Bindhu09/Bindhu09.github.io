var data1={image:"Bindhu1.jpg",name:"Kondabala Bindhu",designation:"Intern"};
var data2={image:"Bindhu2.jpg",name:"Indhu",designation:"software developer"};
var isdata1=true;
var displaydata;
var changemypic=function(){
    if(isdata1){
        displaydata=data2;
        isdata1=false
    }
    else{
        displaydata=data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    
}