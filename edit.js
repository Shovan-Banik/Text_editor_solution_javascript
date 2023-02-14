function inputValue(id){
    const inputField=document.getElementById(id);
    const inputFieldValue=inputField.value;
    return inputFieldValue; 
}
function setValue(id,result){
    document.getElementById(id).value=result;
}
document.getElementById('bold').addEventListener('click',function(){
    const textValue=inputValue('text-area');
    textValue.classList.add('font-bold');
    // const boldIcon=document.getElementById('boldI');
    // boldIcon.classList.add('mota');
    // setValue('text-area',textValue);

})