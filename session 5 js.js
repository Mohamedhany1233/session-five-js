function createcard(head,imgurl,description){

    let father = document.getElementById("parent")
    let section = document.createElement('section')
    father.appendChild(section)
    //image code
    let image = document.createElement('img')
    image.src =imgurl
    image.style='width:200px; border-radius:200px;'
    section.appendChild(image)
    //heading code
    let heading = document.createElement('h2')
    heading.innerHTML=head
    section.appendChild(heading)
    //paragraph code
    let prag = document.createElement('p')
    prag.innerHTML= description
    section.appendChild(prag)
    //button code
    let btn = document.createElement('button')
    btn.innerHTML='Buy'
    btn.style = 'padding:2px; width:60px; border-color:slateblue; background-color:slateblue; border-radius:5px; font-weight:bold; font-size:14px; color:white; '
    section.appendChild(btn)
    
}
let arr = [
    {
        head : 'Frensh Fries',
        imgurl : 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description : 'this is product 1'
    },
    {
        head : 'Burger',
        imgurl : 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description : 'this is product 2'
    },
    {
        head : 'pizza',
        imgurl : 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description : 'this is product 3'
    },
    {
        head : 'rice',
        imgurl : 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description : 'this is mango 4'
    }

]



arr.forEach(function(item){
    createcard(item.head, item.imgurl, item.description)
})

let inpSearch = document.getElementById('inputsrc')
let inpButton = document.getElementById('inputBtn')


// inpSearch.onmouseenter= function(){

//     inpSearch.style="width:200px;"
// }

// inpSearch.onmouseleave = function(){

//     inpSearch.style="width:auto;"
// }



inpSearch.onkeyup =function(){

    let father = document.getElementById("parent")
    let filterData = arr.filter(function(item){
      if (item.head.includes(inpSearch.value) || item.description.includes(inpSearch.value))
        {
            return item
        }  
    })
    console.log(filterData);
       //| 
        father.innerHTML=''
       filterData.forEach(function(item){
          createcard(item.head, item.imgurl, item.description)
      })
}
//another explain

for (let i = 0; i< filterData.length ; i++)
    {
        let item = filterData[i]
        createcard(item.head , item.imgurl, item.description)
    }