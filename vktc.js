
drawFace();
drawCalc();
drawCalc2();


function drawFace() {
	// If not main bar in the DOM then place it
	if (!document.getElementById('idVktcBar')) {

		var parent = document.getElementById('paginated_table_control0');
		
		var captionTextHtml = document.createElement('div');
			captionTextHtml.id = 'idCaptionText';
			captionTextHtml.style.fontSize = '24px';
			captionTextHtml.innerHTML = '<h4>Cpateam Vk Target Assistant 1.0a&nbsp<sup><a target="_blank" href="https://vk.com/robo9"><img title="'+ getUserName() +', добавляйся в друзья! =)" src="http://vk.com/favicon.ico"></a><a target="_blank" href="http://cpateam.ru"><img title="Форум для арбитражников" src="http://cpateam.ru/favicon.ico"></a></sup></h4>';
		parent.appendChild(captionTextHtml);

		if (!document.cookie.search('vkta_banner=off')) {
				// Creating and paste banner in to DOM
				var banner = document.createElement('div');
					banner.id = 'idBanner';
					banner.className = 'classBanner';
					banner.style.border = 'solid 3px #FFE070';
					banner.style.backgroundColor = '#FFF4CC';
					banner.style.padding = '5px';
					userName = getUserName();
					banner.innerHTML='Привет, <strong>'+ userName+'</strong>! <br/><br/>';
				parent.appendChild(banner);

				// Creating and paste banner close button in to banner element
				var okButton = document.createElement('div');
					okButton.id = 'idBannerButtonClose'
					okButton.className = 'button_blue';
					okButton.innerHTML = '<button title="Закрыть и больше не показывать" onclick="closeBannerSetCookie()"> OK! </button>';
				banner.appendChild(okButton);
				// Banner end
		}

		// Creating and paste main interface bar
		var vktcBar = document.createElement('div');
			vktcBar.id = 'idVktcBar'
			vktcBar.className = 'vktcBar';
			vktcBar.innerHTML = '<p>Привет мир! Работать с javascript и DOM-деревом необычайно прикольно и захватывающе! Мне нравится делать со страницами HTML то, что я захочу!</p>';
		parent.appendChild(vktcBar);

		// Create and show CPC calc button
		var elem = document.createElement('div');
		elem.id = 'ifaceButtonCPC'
		elem.style.float = 'left';
		elem.className = 'button_blue';

		elem.innerHTML = '<button title="Расчет цены клика" accesskey="c" onclick="doCPC()" style="height: 38px;"> CPC </button>&nbsp&nbsp&nbsp';
		

		parent = document.getElementById('idVktcBar');
		parent.appendChild(elem);

		
		// .... edit elements
		// green
		var elem = document.createElement('div');
			elem.id = 'idColoredEdit';

			elem.style.border='solid 1px #D3DBE1';
			elem.style.backgroundColor = '#DCFFBE';
			elem.style.padding = '5px';
			elem.style.float = 'left';
			elem.innerHTML = '<img src="https://vk.com/images/emoji/D83DDC4D_2x.png" width="16" height="16">';
			elem.innerHTML = elem.innerHTML + '&nbsp<input type="number" min="0" value="0" name="plus" step="0.01" autocomplete="off" style="width: 50px;">&nbsp&nbsp&nbsp';
			elem.innerHTML = elem.innerHTML + '<input type="checkbox" class="ads_lite_cb" id="CheckGreen">';

		parent.appendChild(elem);

		// red
		var elem = document.createElement('div');
			elem.id = 'idColoredEdit';

			elem.style.border='solid 1px #D3DBE1';
			elem.style.backgroundColor = '#FAD7D4';
			elem.style.padding = '5px';
			elem.style.float = 'left';
			elem.innerHTML = '<input type="checkbox" class="ads_lite_cb" id="CheckRed">';
			elem.innerHTML = elem.innerHTML + '&nbsp<input type="number" min="0" value="0" name="minus" step="0.01" autocomplete="off" style="width: 50px;">&nbsp&nbsp&nbsp';
			elem.innerHTML = elem.innerHTML + '<img src="https://vk.com/images/emoji/D83DDC4E_2x.png" width="16" height="16">';

		parent.appendChild(elem);

			var elem = document.createElement('div');
				elem.id = 'ifaceButtonCPC'
				elem.style.float = 'left';
				elem.className = 'button_blue';

				elem.innerHTML = '&nbsp<button title="Расчет цены клика" accesskey="c" onclick="doJob()" style="height: 38px;"> Выбрать по условию </button>&nbsp&nbsp&nbsp';
		
		parent.appendChild(elem);

	}
}

function doJob() {

    len = document.getElementsByClassName('column_money_amount_view').length;
    money = document.getElementsByClassName('column_money_amount_view');
    click = document.getElementsByClassName('column_clicks_count_view');


    var good = 0; // подсчитываем сколько плохих и хороших полей
    var bad = 0;
    var same = 0;

    clearCells();

	for (i = 1; i < len; i++) {

	click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
	click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
	click[i].innerHTML = click[i].innerHTML.replace(/\s\[.*/, '');

	click[i].style.color = 'black';

  	var cpc = (parseFloat(money[i].innerHTML.replace(' ', '')) / parseInt(click[i].innerHTML)).toFixed(2);

  	if (click[i].innerHTML > 0) {
      
      if (CheckBad()) {
        console.log('checkbad');

        if (cpc > Number(getMinus())) {
	   		click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
        	click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
          	click[i].innerHTML = click[i].innerHTML.replace(/\s\[.*/, '');

            click[i].style.color = 'red';
            click[i].style.backgroundColor = '#FAD7D4';
            click[i].style.borderLeft = '3px solid #F08A81';
           
            click[i].innerHTML = click[i].innerHTML + ' [CPC: ' + cpc + ' ]&nbsp <img src="https://vk.com/images/emoji/2B07_2x.png" width="16" height="16">';          
        }
      }
      

      	if (CheckGood()) {
	      if (cpc < Number(getPlus())) {

	        click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
	        click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
	        click[i].innerHTML = click[i].innerHTML.replace(/\s\[.*/, '');
	        
	        click[i].style.color = 'Green';
	        click[i].style.backgroundColor = '#DCFFBE';
	        click[i].style.borderLeft = '3px solid #A7EF6A';

	        click[i].innerHTML = click[i].innerHTML + ' [CPC: ' + cpc + ' ]&nbsp <img src="https://vk.com/images/emoji/2B06_2x.png" width="16" height="16">';
	      }
	    } 

      if (CheckGood() || CheckBad()) {
      	if (cpc == Number(getPlus())) {

            click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
            click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
            click[i].innerHTML = click[i].innerHTML.replace(/\s\[.*/, '');

            click[i].style.color = '#558ABB';
            click[i].style.backgroundColor = '#DDE4E9';
            click[i].style.borderLeft = '3px solid #558ABB';
            //click[i].style.borderRight = '3px solid #558ABB';
            click[i].innerHTML = click[i].innerHTML + ' [CPC: ' + cpc + ' ]&nbsp <img src="https://vk.com/images/emoji/2194_2x.png" width="16" height="16">';
      	}
      }
    }     
}
    
    
    for (i=1; i<len;i++) {
       if (click[i].style.backgroundColor == 'rgb(250, 215, 212)') bad++ ;
      if (click[i].style.backgroundColor == 'rgb(220, 255, 190)') good++ ;
      if (click[i].style.backgroundColor == 'rgb(221, 228, 233)') same++ ;
    }

    click[0].innerHTML = '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #DCFFBE; font-weight: bold">' + good + '</div>';

    click[0].innerHTML = click[0].innerHTML + '<div style="display: inline-block; border: solid 1px #D3DBE1; font-weight: bold; background: #DDE4E9;">' + same + '</div>';

    click[0].innerHTML = click[0].innerHTML + '<div style="display: inline-block; border: solid 1px #D3DBE1; font-weight: bold; background: #FAD7D4;">' + bad + '</div>';
}

 function doCPC() {
          var len = document.getElementsByClassName('column_money_amount_view').length;
          var money = document.getElementsByClassName('column_money_amount_view');
          var click = document.getElementsByClassName('column_clicks_count_view');
          clearCells();
          for (i = 1; i < len; i++) {
          
          // Очистим форматирование столбца кликов+цена за клик
         
          click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
          click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
          click[i].innerHTML = click[i].innerHTML.replace(/\s\[.*/, '');


          // Сбросим цвет
          click[i].style.color = 'Black';

          var cpc = (parseFloat(money[i].innerHTML.replace(' ', '')) / parseInt(click[i].innerHTML)).toFixed(2);

        if (click[i].innerHTML >= 0) {
          click[i].innerHTML = click[i].innerHTML + ' [ CPC: ' + cpc + ' ]';
        }
      }
    }


function createButton() {
	var elem = document.createElement('div');
		elem.id = 'ifaceButtonCPC'
		elem.style.float = 'left';
		elem.className = 'button_blue';

		elem.innerHTML = '<button title="Расчет цены клика" accesskey="c" onclick="doCPC()"> CPC </button>';
		
		elem.innerHTML = elem.innerHTML + '&nbsp<div id="idSeparator" style="height: 30px; width: 1px; background-color: #558ABB; float: right"></div><br/><br/>';
		
		parent = document.getElementById('idVktcBar');
		parent.appendChild(elem);

}

function getUserName() {
	userName = document.getElementsByClassName('top_profile_name').item(0).innerText;
	return userName;
}

function closeBannerSetCookie() {
	banner = document.getElementById('idBanner');
	banner.style.display = 'none';
	document.cookie="vkta_banner=off";
}

function clearCells() {
  var white = '#FFF';
  var blue = '#F0F2F4';
  var row = document.getElementsByClassName('column_clicks_count_view');
  var len = document.getElementsByClassName('column_clicks_count_view').length;

  for (i = 1; i < len; i++) {
    console.log(row[i]);
    if (i % 2 != 0) {
      row[i].style.backgroundColor = white;
    } else {
      row[i].style.backgroundColor = blue;
    }
    row[i].style.borderLeft = '0px';
  }
  
}

function CheckBad() {
  return document.getElementById('CheckRed').checked;
}

function CheckGood() {
  return document.getElementById('CheckGreen').checked;
}

function getPlus() {
  return parseFloat(document.getElementsByName('plus')[0].value).toFixed(2);
}

function getMinus() {
  return parseFloat(document.getElementsByName('minus')[0].value).toFixed(2);
}


function drawCalc() {

	if (!document.getElementById('myCpmCalcPanel')) {
		panel = document.getElementsByClassName('page_block ui_rmenu ui_rmenu_pr')[0].cloneNode();
		panel.id = 'myCpmCalcPanel';
		parent = document.getElementById('ads_navigation');
		parent.appendChild(panel);
		panel.innerHTML= panel.innerHTML + '<h4>CPM калькулятор</h4>';

		panel.innerHTML= panel.innerHTML + '<br/>Показы: <input type="number" name="calcShows" style="width: 75px; float: right;">';
		panel.innerHTML= panel.innerHTML + '<br/><br/>CPM: <input type="number" name="calcCPM" style="width: 75px; float: right;">';

		panel.innerHTML= panel.innerHTML + '<br/><br/>CTR: <input type="number" name="calcCTR" style="width: 75px; float: right;">';

		panel.innerHTML= panel.innerHTML + '<br/><br/>CR: <input type="number" name="calcCR" style="width: 75px; float: right;">';

		panel.innerHTML= panel.innerHTML + '<br/><br/>Выплаты: <input type="number" name="calcPay" style="width: 75px; float: right;">';

		panel.innerHTML= panel.innerHTML + '<br/><br/>Аппрув: <input type="number" name="calcApprove" style="width: 75px; float: right;">';


		panel.innerHTML= panel.innerHTML + '<br/><br/><div style="font-size: 10px">* Идея калькулятора с сайта wildo.ru</div>';


		panel.innerHTML = panel.innerHTML + '<br/><div class="button_blue"><button title="Расчет цены клика" onclick="doROI()"> CPC </button></div>';


		panel.style.padding = '20px';
}



}


function drawCalc2() {

	if (!document.getElementById('myCpcCalcPanel')) {
		panel = document.getElementsByClassName('page_block ui_rmenu ui_rmenu_pr')[0].cloneNode();
		panel.id = 'myCpcCalcPanel';
		parent = document.getElementById('ads_navigation');
		parent.appendChild(panel);
		panel.innerHTML= panel.innerHTML + '<h4>CPC калькулятор</h4>';

		panel.innerHTML= panel.innerHTML + '<br/>Клики: <input type="number" name="calcClicks" style="width: 75px; float: right;">';
		panel.innerHTML= panel.innerHTML + '<br/><br/>CPС: <input type="number" name="calcCPC" style="width: 75px; float: right;">';

		panel.innerHTML= panel.innerHTML + '<br/><br/>CR: <input type="number" name="calcCR" style="width: 75px; float: right;">';


		panel.innerHTML= panel.innerHTML + '<br/><br/>Выплаты: <input type="number" name="calcPay" style="width: 75px; float: right;">';

		panel.innerHTML= panel.innerHTML + '<br/><br/>Аппрув: <input type="number" name="calcApprove" style="width: 75px; float: right;">';


		panel.innerHTML= panel.innerHTML + '<br/><br/><div style="font-size: 10px">* Идея калькулятора с сайта wildo.ru</div>';


		panel.innerHTML = panel.innerHTML + '<br/><div class="button_blue"><button title="Расчет цены клика" onclick="doROI()"> CPC </button></div>';


		panel.style.padding = '20px';
}



}
