const image=document.querySelector('.profile-pic-div');
const photo=document.querySelector('#ProfileImage');
const file=document.querySelector('#file');
const uploadBtn=document.querySelector('#uploadBtn');
const submit=document.querySelector("#Save");

//if User hover on profile div

image.addEventListener('mouseenter',function(){
    uploadBtn.style.display='block';

});

image.addEventListener('mouseleave',function(){
    uploadBtn.style.display='none';
});

//For the photo change
file.addEventListener('change',function(){
    const choosedFile=this.files[0];
    if(choosedFile){
        const reader=new FileReader(); 
        //FileReader is a predefined function of Js

        reader.addEventListener('load',function(){
            photo.setAttribute('src',reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
})

//For save 
let arr=new Array();
function addData(){
    DeleteData();
    getData();
    arr.push({
        firstName:document.getElementById('firstName').value,
        lastName:document.getElementById('lastName').value,
        Email:document.getElementById('Email').value,

    });
    localStorage.setItem("UserInfo",JSON.stringify(arr));


}
function getData(){
    let  str = localStorage.getItem("UserInfo");
    if (str!= null)
        arr = JSON.parse(str);
}

function DeleteData(){
    localStorage.clear();
    }
submit.addEventListener('click',addData);
