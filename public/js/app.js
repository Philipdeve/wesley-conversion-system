const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', function  (e) {
    e.preventDefault();

    const username = document.getElementById('name').value
    const checkBox = document.querySelectorAll('.form-check-input')

    console.log(checkBox[0].value)
    // console.log(checkBox[1].value)
    // console.log(checkBox[2].value)

    
    if (checkBox[0].checked && checkBox[1].checked && checkBox[2].checked && checkBox[3].checked && checkBox[4].checked && checkBox[5].checked && checkBox[6].checked && checkBox[7].checked && checkBox[8].checked  ){
        const message = `${'You are a Full Time Student already '}`
        alert(message)
    } else if (  checkBox[1].checked && checkBox[2].checked && checkBox[3].checked && checkBox[4].checked && checkBox[6].checked && checkBox[8].checked){
        const message2 = `Dear ${username}. You are not allowed to transfer to Full-Time, kindly finish all the course to tranfer `
        alert(message2)
    }else{
        alert("Invalid Course Selection")
    }

})