document.getElementById('bold').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('font-bold');
})
document.getElementById('italic').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('italic');
})
document.getElementById('underline').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('underline');
})
document.getElementById('left').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('text-left');
    textValue.classList.remove('text-center');
    textValue.classList.remove('text-justify');
    textValue.classList.remove('text-right');
})
document.getElementById('center').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('text-center');
    textValue.classList.remove('text-left');
    textValue.classList.remove('text-justify');
    textValue.classList.remove('text-right');
})
document.getElementById('justify').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('text-justify');
    textValue.classList.remove('text-left');
    textValue.classList.remove('text-center');
    textValue.classList.remove('text-right');
})
document.getElementById('right').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('text-right');
    textValue.classList.remove('text-left');
    textValue.classList.remove('text-justify');
    textValue.classList.remove('text-center');
})
document.getElementById('upper').addEventListener('click',function(){
    const textValue=document.getElementById('text-area');
    textValue.classList.add('uppercase');
})
document.getElementById('size').addEventListener('click',function(event){
    const textValue=document.getElementById('text-area');
    const sizing=event.target.value;
    textValue.style.fontSize=sizing+'px';
})
document.getElementById('colors').addEventListener('click',function(event){
    const textValue=document.getElementById('text-area');
    const colorValue=event.target.value;
    textValue.style.color=colorValue;
})
