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

function getDefaultCellColor (tableColumnClass, orderNumber) {
  var cellColor;
  var cellElement;

  cellElement = document.getElementsByClassName(tableColumnClass);
  cellColor = cellElement[orderNumber].style.backgroundColor;

  return cellColor;
}

function setDefaultCellColor(tableColumnClass, orderNumber, cellColor) {
  var cellElement;

  cellElement = document.getElementsByClassName(tableColumnClass);
  cellElement[orderNumber].style.backgroundColor = cellColor;
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

// ================================DO JOB ===============================
// ================================DO JOB ===============================
// ================================DO JOB ===============================
// ================================DO JOB ===============================
function doJob() {

    len = document.getElementsByClassName('column_money_amount_view').length;
    money = document.getElementsByClassName('column_money_amount_view');
    click = document.getElementsByClassName('column_clicks_count_view');


    var good = 0; // подсчитываем сколько плохих и хороших полей
    var bad = 0;
    var same = 0;

    // click[0].innerHTML = '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #DCFFBE; font-weight: bold">' + good + '</div>';

    // click[0].innerHTML = click[0].innerHTML + '<div style="display: inline-block; border: solid 1px #D3DBE1; font-weight: bold; background: #DDE4E9;">' + same + '</div>';

    // click[0].innerHTML = click[0].innerHTML + '<div style="display: inline-block; border: solid 1px #D3DBE1; font-weight: bold; background: #FAD7D4;">' + bad + '</div>';
    clearCells();




for (i = 1; i < len; i++) {

click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');




click[i].style.color = 'black';

  

  var cpc = (parseFloat(money[i].innerHTML.replace(' ', '')) / parseInt(click[i].innerHTML)).toFixed(2);

  if (click[i].innerHTML > 0) {
      
      if (CheckBad()) {
        console.log('checkbad');

        if (cpc > Number(getMinus())) {
          // bad++;
          click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
          click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');

          
            click[i].style.color = 'red';
            click[i].style.backgroundColor = '#FAD7D4';
            click[i].style.borderLeft = '3px solid #F08A81';
            click[i].style.borderRight = '3px solid #F08A81';

            click[i].innerHTML = click[i].innerHTML + ' <strong>[CPC: ' + cpc + ' </strong>]&nbsp <img src="https://vk.com/images/emoji/2B07_2x.png" width="16" height="16">';          
        }
      }
      

      if (CheckGood()) {
      if (cpc < Number(getPlus())) {

        // good++;
        click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
        click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
        
        click[i].style.color = 'Green';
        click[i].style.backgroundColor = '#DCFFBE';
        click[i].style.borderLeft = '3px solid #A7EF6A';
        click[i].style.borderRight = '3px solid #A7EF6A';

        click[i].innerHTML = click[i].innerHTML + ' <strong>[CPC: ' + cpc + ' </strong>]&nbsp <img src="https://vk.com/images/emoji/2B06_2x.png" width="16" height="16">';
      }
      } 

      if (CheckGood() || CheckBad()) {
      if (cpc == Number(getPlus())) {
            // same++;
            click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
            click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');

            click[i].style.color = '#558ABB';
            click[i].style.backgroundColor = '#DDE4E9';
            click[i].style.borderLeft = '3px solid #558ABB';
            click[i].style.borderRight = '3px solid #558ABB';
            click[i].innerHTML = click[i].innerHTML + ' <strong>[CPC: ' + cpc + ' </strong>]&nbsp <img src="https://vk.com/images/emoji/2194_2x.png" width="16" height="16">';
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


    // click[0].innerHTML = '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #DCFFBE; font-weight: bold">' + good + '</div>';
    // click[0].innerHTML = click[0].innerHTML + '<div style="display: inline-block; border: solid 1px #D3DBE1; font-weight: bold; background: #DDE4E9;">' + same + '</div>';
    // click[0].innerHTML = click[0].innerHTML + '<div style="display: inline-block; border: solid 1px #D3DBE1; font-weight: bold; background: #FAD7D4;">' + bad + '</div>';
}

        function doCPC() {
          var len = document.getElementsByClassName('column_money_amount_view').length;
          var money = document.getElementsByClassName('column_money_amount_view');
          var click = document.getElementsByClassName('column_clicks_count_view');

          for (i = 1; i < len; i++) {
        // Очистим форматирование столбца кликов+цена за клик
          // clearCells();
          alert(click[i]);
          click[i].innerHTML = click[i].innerHTML.replace(' [ CPC: NaN ]', '');
          click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');

        // Сбросим цвет
        click[i].style.color = 'Black';

        var cpc = (parseFloat(money[i].innerHTML.replace(' ', '')) / parseInt(click[i].innerHTML)).toFixed(2);
        //sred = sred+parseFloat(cpc);

        if (click[i].innerHTML >= 0) {
          click[i].innerHTML = click[i].innerHTML + ' <strong>[ CPC: ' + cpc + ' ]</strong>';
        }
      }
    }

function bannerOff() {
  banner = document.getElementById('bannerDiv');
  banner.style.display='none';
}

    function drawInterface() {

      // drawBorder();

      var menu = document.getElementsByClassName('ads_selecting_subclasses');
      var iface = menu[0].innerHTML;

    // добавляем пустой отступ
    iface = iface + '<div style="height: 20px;"></div>';
    iface = iface + '<img src="http://www.cpateam.ru/styles/basic/xenforo/logo.png"><br/>';
    iface = iface + '<strong>CPATEAM VK Target Assistant Tool</strong>';
    iface = iface + '<div style="height: 20px;"></div>';

    // ================== BANNER =======================================

     iface = iface + '<div id="bannerDiv" style="border: solid 1px #FFE070; background: #FFF4CC; padding: 5px; margin-left: -3px">';

     name = document.getElementsByClassName('top_profile_name').item(0).innerText;
     iface = iface + 'Привет, <strong>'+ name + '</strong>! Секундочку внимания!'; 

     iface = iface + '<br /><br /><input type="checkbox" class="ads_lite_cb" id="banner" onclick=bannerOff()><label for="banner">Хорошо,</label>';
     iface = iface + '</div>';
     // iface = iface + '<div style="height: 20px;"></div>';


    // =================================================================

    iface = iface + '<div style="height: 5px;"></div>';
    //iface = iface + '<h4 style="font-size: 12px; margin: 0px 0px 6px; ">cpateam.ru </h4>';
    iface = iface + '<div style="height: 5px;"></div>';


    // ---------------------------------------------1------------------------------------------------------

    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #E3E9EE; padding: 5px; margin-left: -3px">';

    // Кнопка получения CPC
    iface = iface + '<div class="button_blue"><button title="Получить цену за клик" accesskey="c" onclick=doCPC()>CPC</button></div>';
    iface = iface + '&nbsp';
    // Другая кнопка
    iface = iface + '<div class="button_blue"><button title="Получить средний CPC по общему значению" accesskey="s" onclick=alert()>CPC общее среднее</button></div>';

    iface = iface + '</div>';

    // -----------------------------------------------2----------------------------------------------------

    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #E3E9EE; padding: 5px; margin: +3px">';

    // Другая кнопка
    iface = iface + '<div class="button_blue"><button title="Получить средний CPC по общему значению" accesskey="s" onclick=alert()>CPC общее среднее</button></div>';

    iface = iface + '</div><br/>';

    // -------------------------------------------------3-------------------------------------------------

    //iface = iface + '<div style="height: 5px;"></div>';







    // ==================Блок для первого эдита и пальца зеленый==================================
    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #DCFFBE; padding: 5px; margin-left: -3px">';
        iface = iface + '<img src="https://vk.com/images/emoji/D83DDC4D_2x.png" width="16" height="16">';
        iface = iface + '&nbsp<input type="number" min="0" value="0" name="plus" step="0.01" autocomplete="off" style="width: 50px;">&nbsp&nbsp&nbsp';
        iface = iface + '<input type="checkbox" class="ads_lite_cb" id="CheckGreen">';
    iface = iface + '</div>';

    // ==================Блок для второго эдита и пальца красный==================================
    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #FAD7D4; padding: 5px; margin-left: -3px">';
        iface = iface + '<input type="checkbox" class="ads_lite_cb" id="CheckRed">';
        iface = iface + '&nbsp<input type="number" min="0" value="0" name="minus" step="0.01" autocomplete="off" style="width: 50px;">&nbsp&nbsp&nbsp';
        iface = iface + '<img src="https://vk.com/images/emoji/D83DDC4E_2x.png" width="16" height="16">';
    iface = iface + '</div><br/>';
    // ===========================================================================================









    // Другая кнопка

    // ---------------------------------------------------4------------------------------------------------


    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #E3E9EE; padding: 5px; margin-left: -3px; margin-top: 3px">';




    iface = iface + '<div class="button_blue"><button title="Выделить цветами строки и значения по условию" accesskey="c" onclick=doJob()>Выделить цветами строки и значения по условию</button></div>';

    iface = iface + '</div>';

    
    
    menu[0].innerHTML = iface;
  }


  drawInterface();
  // clearCells();
  // document.cookie="vktargetpop=off";
  // alert(document.cookie);
        

//menu[0].innerHTML = menu[0].innerHTML + '&nbsp&nbsp&nbsp&nbsp<a href="http://vk.com/robo9"><img src="https://vk.com/images/emoji/D83CDF4D_2x.png" width="16" height="16" alt=":)"></a><br/><input type="checkbox" name="CheckBad">';
/*menu[0].innerHTML = menu[0].innerHTML + ' | <img src="https://vk.com/images/emoji/2795_2x.png" width="16" height="16"><input type="number" name="plus" size="5" value="3.00">';
menu[0].innerHTML = menu[0].innerHTML + ' | <img src="https://vk.com/images/emoji/2796_2x.png" width="16" height="16"><input type="number" name="minus" size="5" value="5.00">';
menu[0].innerHTML = menu[0].innerHTML + ' | <input value="Подсветить" type="button" onclick="doJob()" name="color_button">';
menu[0].innerHTML = menu[0].innerHTML + ' | <div class="button_blue"><input value="CPC" type="button" onclick="doCPC()" class="button_blue"></div>';
menu[0].innerHTML = menu[0].innerHTML + ' | <div class="button_blue"><button onclick=alert()>Кнопка</button></div>'
*/
