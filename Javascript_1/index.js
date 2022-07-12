//　コメント
const form = document.getElementById("form");
const input = document.getElementById("input");


form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(input.value);
    add()
});

function add(){
    let todoText = input.value;
//    if (todoText.length > 0){
    if (todoText){
        const li =document.createElement("li");
        li.innerText=todoText;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value="";
        saveData();
    }
}

function saveData(){
    const lists=document.querySelectorAll("li");
};