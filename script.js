const main = document.querySelector('main');
const btnCreate = document.querySelector('#btn');
const descCont = document.querySelector('.description-container');
const titleTask = document.querySelector('#title-task');
const descTask = document.querySelector('#description-task');
const btnCancel = document.querySelector('#btn-cancel');
const btnSave = document.querySelector('#btn-save');
const collectionUl = document.querySelector('.collection-ul');
const taskPriority = document.querySelector('#task-priority');
const taskdoneParametr = document.querySelector('#task-done');
const taskPriorityParametr = document.querySelector('#taskPriority');
const collection = document.getElementsByClassName('collection');
const search = document.querySelector('#search');
let arrPriority = document.getElementsByClassName('card-collection');
let findPriority;

///// show and hide DONE block
function getValue() {
    if (taskdoneParametr.value === 'done') {
        collection[0].style.display = 'none';
        collection[1].style.display = 'block';
    }
    if (taskdoneParametr.value === 'open') {
        collection[1].style.display = 'none';
        collection[0].style.display = 'block';
    }
    if (taskdoneParametr.value === 'all') {
        collection[0].style.display = 'block';
        collection[1].style.display = 'block';
    }
}

///// Create Btn event 'mainCreate & Cancel'
btnCreate.onclick = function () {
    descCont.style.display = 'block';
};
btnCancel.onclick = function () {
    descCont.style.display = 'none';
};

////done block
let doneBlock = document.createElement('div');
doneBlock.className = 'collection';
main.appendChild(doneBlock);
let doneUl = document.createElement('ul');
doneUl.className = 'collection-ul';
doneBlock.appendChild(doneUl);

///// Create Btn event Save
btnSave.onclick = function () {
    descCont.style.display = 'none';

///////////Create elements
let li = document.createElement('li');
li.className = 'card-collection';
    collectionUl.appendChild(li);
let divContainer = document.createElement('div');
divContainer.className = 'card-container';
    li.appendChild(divContainer);
let divWrapper = document.createElement('div');
divWrapper.className = 'card-wrapper';
    divContainer.appendChild(divWrapper);
let h2 = document.createElement('h2');
h2.className = 'title-item';
    divWrapper.appendChild(h2);
let p = document.createElement('p');
p.className = 'description-item';
    divWrapper.appendChild(p);
let selectPriority = document.createElement('select');
selectPriority.id = 'card-priority';
    divWrapper.appendChild(selectPriority);
let optionHight = document.createElement('option');
optionHight.value = 'high';
optionHight.appendChild(document.createTextNode('high'));
    selectPriority.appendChild(optionHight);
let optionNormal = document.createElement('option');
optionNormal.value = 'normal';
optionNormal.appendChild(document.createTextNode('normal'));
    selectPriority.appendChild(optionNormal);
let optionLow = document.createElement('option');
optionLow .value = 'low';
optionLow .appendChild(document.createTextNode('low'));
    selectPriority.appendChild(optionLow);
let selectProperties= document.createElement('select');
selectProperties.id = 'card-properties';
    divWrapper.appendChild(selectProperties);
let optionAll = document.createElement('option');
optionAll.value = 'all';
optionAll.appendChild(document.createTextNode('all'));
    selectProperties.appendChild(optionAll);
let optionDone = document.createElement('option');
optionDone.value = 'done';
optionDone.appendChild(document.createTextNode('done'));
    selectProperties.appendChild(optionDone);
let optionEdit = document.createElement('option');
optionEdit.value = 'edit';
optionEdit.appendChild(document.createTextNode('edit'));
    selectProperties.appendChild(optionEdit);
let optionDelete = document.createElement('option');
optionDelete.value = 'delete';
optionDelete.appendChild(document.createTextNode('delete'));
    selectProperties.appendChild(optionDelete);

///// fill container item
divContainer.style.display = 'block';
h2.innerHTML = titleTask.value;
p.innerHTML = descTask.value;
collectionUl.style.display = 'flex';
collectionUl.style.flexWrap = 'wrap';
titleTask.value = 'Title';
descTask.value = "Description:";

///// set select attribute
let n = taskPriority.options.selectedIndex;
selectPriority.options[n].setAttribute('selected','selected');

////// set select properties
selectProperties.onchange = function () {
    let selectValue = selectProperties.value;
    if (selectValue === 'delete') {
        li.remove();
    }
    if (selectValue === 'done') {
        divContainer.style.background = 'gray';
        doneUl.appendChild(this.parentNode.parentNode.parentNode);
    }
    if (selectValue === 'edit') {
        descCont.style.display = 'block';
        console.log(h2.innerHTML);
        titleTask.value = h2.innerHTML;
        descTask.value = p.innerHTML;
        divContainer.style.display = 'none';
    }
};

////// set priority vision on change selectPriorirty
selectPriority.onchange = function () {
    if (taskPriorityParametr.value === 'high'){
        if (selectPriority.value === 'high') {
            this.parentNode.parentNode.parentNode.style.display = 'block';
            console.log('h')
        } else {
            this.parentNode.parentNode.parentNode.style.display = 'none';
            console.log('en')
        }
    }
    if (taskPriorityParametr.value === 'normal'){
        if (selectPriority.value === 'normal') {
            this.parentNode.parentNode.parentNode.style.display = 'block';
            console.log('h')
        } else {
            this.parentNode.parentNode.parentNode.style.display = 'none';
            console.log('en')
        }
    }
    if (taskPriorityParametr.value === 'low'){
        if (selectPriority.value === 'low') {
            this.parentNode.parentNode.parentNode.style.display = 'block';
            console.log('h')
        } else {
            this.parentNode.parentNode.parentNode.style.display = 'none';
            console.log('en')
        }
    }
};

////// set priority vision on click btn save
    for (let i = 0; i < arrPriority.length; i++) {
        findPriority = arrPriority[i].childNodes[0].childNodes[0].childNodes[2];
        arrPriority[i].style.display = 'none';
        if (findPriority.value === 'high' && (taskPriorityParametr.value === 'high'|| taskPriorityParametr.value === 'all')){
            arrPriority[i].style.display = 'block';
        }
        if (findPriority.value === 'normal' && (taskPriorityParametr.value === 'normal'|| taskPriorityParametr.value === 'all')){
            arrPriority[i].style.display = 'block';
        }
        if (findPriority.value === 'low' && (taskPriorityParametr.value === 'low'|| taskPriorityParametr.value === 'all')){
            arrPriority[i].style.display = 'block';
        }
    }
};
////// set priority vision on change taskPriorityParametr
taskPriorityParametr.onchange = function () {
    if (taskPriorityParametr.value === 'high') {
    for (let i = 0; i < arrPriority.length; i++) {
        findPriority = arrPriority[i].childNodes[0].childNodes[0].childNodes[2];
        if (findPriority.value === 'high') {
            arrPriority[i].style.display = 'block';
        } else {
            arrPriority[i].style.display = 'none';
        }
    }
}
    if (taskPriorityParametr.value === 'normal') {
        for (let i = 0; i < arrPriority.length; i++) {
            findPriority = arrPriority[i].childNodes[0].childNodes[0].childNodes[2];
            if (findPriority.value === 'normal') {
                arrPriority[i].style.display = 'block';
            } else {
                arrPriority[i].style.display = 'none';
            }
        }
    }
    if (taskPriorityParametr.value === 'low') {
        for (let i = 0; i < arrPriority.length; i++) {
            findPriority = arrPriority[i].childNodes[0].childNodes[0].childNodes[2];
            if (findPriority.value === 'low') {
                arrPriority[i].style.display = 'block';
            } else {
                arrPriority[i].style.display = 'none';
            }
        }
    }
    if (taskPriorityParametr.value === 'all') {
        for (let i = 0; i < arrPriority.length; i++) {
                arrPriority[i].style.display = 'block';
        }
    }
};

///////clean input Task and description
titleTask.onfocus = function () {
    if (titleTask.value === 'Title') {
        titleTask.value = '';
    }
    if (descTask.value === '') {
        descTask.value = 'Description:';
    }
};
descTask.onfocus = function () {
    if (descTask.value === 'Description:') {
        descTask.value = '';
    }
    if (titleTask.value === '') {
        titleTask.value = 'Title';
    }
};
search.onfocus = function () {
    search.value = '';
};
search.onblur = function () {
    if (search.value === ''){
        search.value = 'search by title';
    }

};
///// Set filter
function filters() {
    let text = search.value.toLocaleLowerCase();
    document.querySelectorAll('.card-collection').forEach
        (function (task) {
            let item = task.childNodes[0].childNodes[0].childNodes[0].textContent;
            if(item.toLowerCase().indexOf(text) !== -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
}




