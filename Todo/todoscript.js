// let h = document.createElement('h1')

// let myval = document.createTextNode('hello world')

// h.appendChild(myval)

// document.querySelector('h1').appendChild(h)

//While loop

// let val = 10

// while(val>0){
//     console.log(val)
//     val--
// }

var ul = document.getElementById('list')
var li;
// var para = document.createElement('p')
// var para1=para.textContent='Enter Todo.'

let addbutton = document.getElementById('add')

addbutton.addEventListener('click',additem)



let removebutton = document.getElementById('remove')

removebutton.addEventListener('click',removeitem)
    // console.log('Delete the button')

//Function for add item.



function additem(){
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if(item===''){
        return false
    }else{
        var li = document.createElement('li')
        var checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')
        var label = document.createElement('label')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)

        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className='visual'
        }, 2);


        input.value = ''
    }

}



function removeitem(){
    li = ul.children
     for (let index = 0; index < li.length; index++) {
          while (li[index] && li[index].children[0].checked) {
              ul.removeChild(li[index])
           }
        
    }
}
// let allbutton = document.getElementById('button3')

// allbutton.addEventListener('click',removeall)

// function removeall(){
//     li=ul.children
    
//     for (let index = 0; index < li.length; index++) {
//         while(li[index] && li[index].children[0]){
//             ul.removeChild(li[index])
//         }
        
//     }
// }