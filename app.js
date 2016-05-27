'use strict';
var res = {};
var dataset;
function getTicker(event) {
    var inputBox = document.body.querySelector('input');
    var ticker = inputBox.value.toString().toUpperCase();
    var lowerOutTicker = document.getElementById('lower_output_ticker');
    lowerOutTicker.innerHTML = ticker;
    setTimeout(call, 100);
    setTimeout(one, 600);
    setTimeout(two, 1000);
    setTimeout(three, 1400);
    setTimeout(four, 1800);
    setTimeout(five, 2200);
    setTimeout(six, 2600);
    setTimeout(seven, 3000);
    setTimeout(eight, 3400);
    setTimeout(nine, 3800);
    setTimeout(ten, 4200);
    setTimeout(eleven, 4600);
    setTimeout(twelve, 5000);
    setTimeout(thirteen, 5400);
    setTimeout(fourteen, 5800);
    setTimeout(fifteen, 6200);
    setTimeout(sixteen, 6600);
    setTimeout(companyName, 7000);

      function call(){
          xml('GET', 'https://www.quandl.com/api/v3/datasets/WIKI/' + ticker + '.json?api_key=TX23BV7ZDwU5__yCYyjL', function(err, data){
            dataset = data;
          }, "This is data");
      }
    }
function one(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information -';
  }

function two(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information --';
  }

function three(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ---';
  }

function four(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ----';
  }

function five(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information -----';
  }

function six(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ------';
  }

function seven(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information -------';
  }

function eight(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information --------';
  }

function nine(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ---------';
  }

function ten(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ----------';
  }

function eleven(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information -----------';
  }

function twelve(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ------------';
  }

function thirteen(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information -------------';
  }

function fourteen(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information --------------';
  }

function fifteen(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ---------------';
  }

function sixteen(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = 'Getting Information ----------------';
  }

function companyName(){
    var outTicker = document.getElementById('beginDate');
    outTicker.innerHTML = res.dataset.name;
}

document.querySelector('#search_button').addEventListener('click', getTicker);
document.querySelector('#submit_date').addEventListener('click', openCalendar);
document.querySelector('#submit_amount').addEventListener('click', missedOut);

function xml(method, url, handler, data){
  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    if(this.readyState === 4){
      if(this.status === 200){
        res = JSON.parse(this.responseText);
        handler(null, res);
      } else {
        handler(this.status, null);
        }
      }
    };
  req.open(method, url);
    if (method === 'POST'){
      req.setRequestHeader("Content-type", "application/json");
      req.send(data);
    } else {
      req.send();
    }
}

var inputDate = '';
var beginDate = '';

function openCalendar(event) {

    var inputDate = document.querySelector('#pick_date');
    beginDate = inputDate.value;
    searchDate(beginDate);

}
var bDate = '';
var bPrice = 0;
function searchDate(day){
  for(var i = 0; i < res.dataset.data.length; i++){
    if((res.dataset.data[i][0]) === day){
      bDate = res.dataset.data[i][0];
      bPrice = res.dataset.data[i][4];
      var inputOldTicker = document.getElementById('input_old_info');
      inputOldTicker.innerHTML = bDate;
      var lowerOldTicker = document.getElementById('lower_old_info');
      lowerOldTicker.innerHTML = '$' + bPrice.toFixed(2);
      var inputNewTicker = document.getElementById('input_new_info');
      inputNewTicker.innerHTML = res.dataset.data[0][0];
      var lowerNewTicker = document.getElementById('lower_new_info');
      lowerNewTicker.innerHTML = '$' + res.dataset.data[0][4].toFixed(2);
      break;
    } else{
      var inputError = document.getElementById('input_old_info');
      inputError.innerHTML = "OOPS, that date doesn't exist. Please choose another date";
    }
    }
  }

    var previousCheckId;

         function toggle(chkBox) {
             if (chkBox.checked) {
                  if (previousCheckId) {
                    document.getElementById(previousCheckId).checked = false;
                  }
                  previousCheckId = chkBox.getAttribute('id');
                  //console.log(previousCheckId);
             }
         }

    function missedOut(money){
      money = document.getElementById('invest').value;
     if(previousCheckId === 'dollars'){
       var oldShares = money / bPrice;
       var newPrice = oldShares * res.dataset.data[0][4];
       var missedDollars = document.getElementById('amount_missed');
       missedDollars.innerHTML = "You're " + money + " would be worth " + newPrice.toFixed(2) + " today.";
     }
     else {
       var howMuch = money * bPrice;
       var howMuchNow = money * res.dataset.data[0][4];
        var missedShares = document.getElementById('amount_missed');
        missedShares.innerHTML = "It would of cost you " + howMuch.toFixed( 2 ) + " on " + bDate + " and it would be worth " + howMuchNow.toFixed( 2 ) + " today.";
     }
     }
