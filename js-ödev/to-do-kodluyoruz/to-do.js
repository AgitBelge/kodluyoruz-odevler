let input = document.getElementById("task");
let ulList = document.getElementById("list");
const TOAST_ERROR = document.querySelector(`.toast.error`);
const TOAST_SUCCESS = document.querySelector(`.toast.success`);
let localStore =  localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")): []





window.onload= function(){
    loading();
}

const newElement = () => {
    let val = input.value;
    if(!input.value || input.value.trim() == ''){
        $(TOAST_ERROR).toast(`show`);
        TOAST_ERROR.classList.add(`bg-warning`,`text-light`)
    }
    else if(input.value && input.value != " "){
        addItem(val);
        $(TOAST_SUCCESS).toast(`show`);
        localStore.push(input.value);
        localStorage.setItem(`Tasks`, JSON.stringify(localStore));
    }
    input.value = ""
};



const addItem = (text)=>{
    let liDom = document.createElement("li");
    liDom.innerHTML = text;
    liDom.id = "liText";
    ulList.append(liDom);
    let spanDom = document.createElement("span");
    spanDom.innerHTML = "&times";
    liDom.append(spanDom);
    spanDom.setAttribute(`onclick`,`deleteElement(event)`);
    spanDom.setAttribute(`class`,`close`); 

    liDom.setAttribute(`onclick`,`addCheckedClass(event)`);
}

const deleteElement = (event)=>{
    // Get the node name when click on the element. 
    let node = event.target; 
    // Delete li element.
    node.parentNode.remove();
     // Get the array index no from the node value 
    let arrayIndexOfNodeValue = localStore.indexOf(node.parentNode.childNodes[0].nodeValue);

    // Delete from array 
    localStore.splice(arrayIndexOfNodeValue, 1);

    // Update localstorage from array
    localStorage.setItem(`Tasks`,JSON.stringify(localStore));

    // Delete li element.
    node.parentNode.remove();  
};

const addCheckedClass =(event) =>{
    let evetar = event.target;
    evetar.classList.toggle(`checked`);
}

const loading= ()=>{
    for(var i = 0; i < localStore.length; i++){
    let liDom = document.createElement("li");
    var liNodeTxt = document.createTextNode(localStore[i]);
    ulList.appendChild(liDom);
    liDom.id = "liText";
    liDom.append(liNodeTxt);
    let spanDom = document.createElement("span");
    spanDom.innerHTML = "&times";
    liDom.append(spanDom);
    spanDom.setAttribute(`onclick`,`deleteElement(event)`);
    spanDom.setAttribute(`class`,`close`); 

    liDom.setAttribute(`onclick`,`addCheckedClass(event)`);
    }
}