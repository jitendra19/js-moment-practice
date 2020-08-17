// Import stylesheets
import './style.css'; 
import * as moment from 'moment';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// moment.duretion(1, 'day')
console.log(moment.default())
// moment().subtract(Math.abs(value), "days").format('YYYY-MM-DD')
console.log(moment.default().subtract(Math.abs(-3), "days").format('YYYY-MM-DD'))
