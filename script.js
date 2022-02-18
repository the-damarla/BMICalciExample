function checkInputs()
{
    const userName = Uname.value.trim();
    const passWord = password.value.trim();
    const emailId = email.value.trim();
    const heightValue = height.value.trim();
    const weightValue = weight.value.trim();
    flag = 0

    if(userName === '')
    {
        setErrorFor(Uname,"user cannot be blank!")
    }
    else{
        flag++
        setSuccessFor(Uname,"userName is Ok!!")
    }

    if(passWord === '')
    {
        setErrorFor(password,"password cannot be blank!")
    }
    else{
        flag++
        setSuccessFor(password,"password is Ok!!")
    }

    if(emailId === '')
    {
        setErrorFor(email,"email cannot be blank!")
    }
    else if(!isEmail(emailId))
    {
        setErrorFor(email,"is not a valid email")
    }
    else{
        flag++
        setSuccessFor(email,"email is Ok!!")
    }

    if(heightValue <= 70)
    {
        setErrorFor(height, "heigt cannot be less than 70cm")
    }
    else{
        flag++
        setSuccessFor(height,"given CorrectHeight")
    }

    if(weightValue <= 5){
        setErrorFor(weight,"weight cannot be less than 5")
    }
    else{
        flag++
        setSuccessFor(weight,"given weight correct")
    }

    setFullFillMent(flag)
}

function fullFillMentCompletion(flag)
{
    let computation = parseFloat((flag / 5) * 100)
    return computation
}

function setFullFillMent(flag)
{
    if(flag<5)
    {
        document.getElementById('finalError').innerHTML = 'completed only  ' + `${this.fullFillMentCompletion(flag)}` + '% of the details !'
        bomma()
    }
    else{
        document.getElementById('finalError').innerHTML = 'Successs!!' + `${this.fullFillMentCompletion(flag)}` + '%!'
        showResult()
    }
}

function BMICalculator()
{
    const w = parseFloat(weight.value.trim())
    const h = parseFloat(height.value.trim())
    console.log(h + " " + h/100 + " " + w + " " + w/(h/100))
    const res = parseFloat(w / ((h/100)*(h/100)))
    return res
}

function showResult()
{
    document.getElementById('mainDivision').style.display = "none"
    document.getElementById('resultDivision').style.display = "block"
    document.getElementById('givenName').innerHTML = 'ur Name : ' + Uname.value.trim()
    document.getElementById('givenHeight').innerHTML = 'given Height : ' + document.getElementById('height').value.trim()
    document.getElementById('givenWeight').innerHTML = 'given Weight : ' + document.getElementById('weight').value.trim()
    document.getElementById('bmiResult').innerHTML = 'Ur BMI Result is : ' + `${this.BMICalculator()}`
    if(`${this.BMICalculator()}` < 18.5)
    {
        document.getElementById('res').innerHTML = 'ur Under Weight please eat more!!!'
    }
    else if(`${this.BMICalculator()}` < 25)
    {
        document.getElementById('res').innerHTML = 'U r Excellent, Maintain this!!'
    }
    else if(`${this.BMICalculator()}` < 30)
    {
        document.getElementById('res').innerHTML = 'U have to reduce weight eat less!!'
    }
    else{
        document.getElementById('res').innerHTML = 'OBESITY DANGER!!!'
    }
    showBarGraph()
}

function showBarGraph()
{
    var xValues = ["yourBMI","Underweight", "Normal weight", "Overweight", "Obesity"];
    var yValues = [`${this.BMICalculator()}`,18.5, 24.9, 29.9, 50];
    var barColors = ["violet","blue", "green","orange","red"];

    new Chart("resChart", {
        type: "bar",
            data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Weight that has to be in!!"
    }
  }
});

}


function bomma() {
    var xValues = ["Success", "Failure"];
    var yValues = [`${this.fullFillMentCompletion(flag)}`,100-`${this.fullFillMentCompletion(flag)}`];
    var barColors = ["green", "red"];

    new Chart("myChart", {
        type: "pie",
            data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
  options: {
    title: {
      display: true,
      text: "Success and failure!!"
    }
  }
});
};

function setErrorFor(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input, message)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
    small.style.visibility = "none"
}

function isEmail(email)
{
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}

const form = document.getElementById('form');
const Uname = document.getElementById('name');
const password = document.getElementById('pWord');
const email = document.getElementById('email');
const height = document.getElementById('height')
const weight = document.getElementById('weight')
let flag = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});