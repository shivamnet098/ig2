var arr =[
    {
        dp:'https://images.unsplash.com/photo-1600209142000-aa256622e64a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHx8fDA%3D',
        story:'https://plus.unsplash.com/premium_photo-1670161434750-d2798af413d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        username:'Girl 1',
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVufGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1732647169576-49abfdef3348?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        username:'Girl 2',
    },
    {
        dp:'https://images.unsplash.com/photo-1528812969535-4bcefc071532?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVufGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1732677114541-a4ccaa0a8528?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        username:'Girl 3',
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1682096186855-3f32647abe68?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1731432247068-8f7a97773aee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
        username:'Girl 4',
    },
    {
        dp:'https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVufGVufDB8fDB8fHww',
        story:'https://images.unsplash.com/photo-1733592688551-5ba7804a9634?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
        username:'Girl 5',
    },
]
var sum =''
arr.forEach(function(elem,idx){
    // console.log(elem.story)
    sum = sum +`<div class="story">
                <img id="${idx}"src="${elem.dp}" alt="">
            </div>`
})
var storiyan=document.querySelector('#storiyan')
storiyan.innerHTML=sum

var full=document.querySelector('.full')

storiyan.addEventListener('click',function(dets){
    const story= arr[dets.target.id].story

    full.style.display='block'
    full.style.backgroundImage=`url(${story})`


    setTimeout(function(){
        full.style.display='none'
    },3000)
})
