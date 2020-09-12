var button = document.querySelector('.button');
var input = document.querySelector('.inputValue');

var namevalue = document.getElementById('name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var display = document.querySelector('.display');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=5a2a1dfd2c6391727d981b6e5864a80a')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data.name;
        var tempValue ='Temperature:  '+ data.main.temp+'&#8457';
        var descValue = data.weather[0].description;
        console.log(nameValue);
        console.log(namevalue);
        
        namevalue.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        if(display.style.display='none')
            display.style.display='block'
    })
    .catch(err => console.log(err));
});