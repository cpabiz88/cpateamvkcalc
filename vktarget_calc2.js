// изменение 1

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


function getCheckBad() {
  return document.getElementsByName('CheckBad')[0].checked;
}

function getPlus() {
  return parseFloat(document.getElementsByName('plus')[0].value).toFixed(2);
}

function getMinus() {
  return parseFloat(document.getElementsByName('minus')[0].value).toFixed(2);
}

function doJob() {

  len = document.getElementsByClassName('column_money_amount_view').length;
    //chklen = 0;

    money = document.getElementsByClassName('column_money_amount_view');
    click = document.getElementsByClassName('column_clicks_count_view');

    clear_clicks = 0;

    items_count = (len - 3);

    for (i = 1; i < len; i++) {

      // var tmp[];
      tmp[i] = getDefaultCellColor('column_clicks_count_view', i);
      alert(tmp);

      click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
      click[i].style.color = 'black';

      var cpc = (parseFloat(money[i].innerHTML.replace(' ', '')) / parseInt(click[i].innerHTML)).toFixed(2);

      if (click[i].innerHTML > 0) {
        if (cpc > Number(getMinus())) {
          click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
          click[i].style.color = 'red';
          click[i].style.backgroundColor = '#FCD2BD';
          click[i].innerHTML = click[i].innerHTML + ' <strong>[CPC: ' + cpc + ' </strong>]&nbsp <img src="https://vk.com/images/emoji/D83DDC4E_2x.png" width="16" height="16">';

                //chk = document.getElementById('cb_row_' + chklen + '_0');

                /*				if (getCheckBad())
                				{
                					if (chklen < len - 2)
                					{
                						chk.click();
                						chklen++;
                					}
                        }*/
                      }



            //click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
            if (cpc < Number(getPlus())) {
              click[i].innerHTML = click[i].innerHTML.replace(/\s\<strong>\[CPC:.*/, '');
              click[i].style.color = 'Green';
              click[i].style.backgroundColor = '#DCFFBE';
              click[i].innerHTML = click[i].innerHTML + ' <strong>[CPC: ' + cpc + ' </strong>]&nbsp <img src="https://vk.com/images/emoji/D83DDC4D_2x.png" width="16" height="16">';

                //chklen++;
              }
            }
          }
        }

        function doCPC() {
          var len = document.getElementsByClassName('column_money_amount_view').length;
          var money = document.getElementsByClassName('column_money_amount_view');
          var click = document.getElementsByClassName('column_clicks_count_view');

          for (i = 1; i < len; i++) {
        // Очистим форматирование столбца кликов+цена за клик
        click[i].innerHTML = click[i].innerHTML.replace(/\s\[.*/, '');
        // Сбросим цвет
        click[i].style.color = 'Black';

        var cpc = (parseFloat(money[i].innerHTML.replace(' ', '')) / parseInt(click[i].innerHTML)).toFixed(2);
        //sred = sred+parseFloat(cpc);

        if (click[i].innerHTML >= 0) {
          click[i].innerHTML = click[i].innerHTML + ' <strong>[ CPC: ' + cpc + ' ]</strong>';
        }
      }
    }



    function drawInterface() {

      var menu = document.getElementsByClassName('ads_selecting_subclasses');
      var iface = menu[0].innerHTML;

    // добавляем пустой отступ
    iface = iface + '<div style="height: 20px;"></div>';
    // iface = iface + '<img src="http://www.cpateam.ru/styles/basic/xenforo/logo.png"><br/>';
    iface = iface + '<strong>VK Target Assistant Tool</strong>';
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

    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #E3E9EE; padding: 5px; margin-left: -3px">';


    iface = iface + '<img src="https://vk.com/images/emoji/D83DDC4D_2x.png" width="16" height="16">';

    iface = iface + '&nbsp<input type="number" name="plus" step="0.01" autocomplete="off" style="width: 50px;">&nbsp&nbsp&nbsp';

    iface = iface + '<img src="https://vk.com/images/emoji/D83DDC4E_2x.png" width="16" height="16">';

    iface = iface + '&nbsp<input type="number" name="minus" step="0.01" autocomplete="off" style="width: 50px;">&nbsp&nbsp&nbsp';


    iface = iface + '</div><br/>';
    // Другая кнопка

    // ---------------------------------------------------4------------------------------------------------


    iface = iface + '<div style="display: inline-block; border: solid 1px #D3DBE1; background: #E3E9EE; padding: 5px; margin-left: -3px; margin-top: 3px">';




    iface = iface + '<div class="button_blue"><button title="Выделить цветами строки и значения по условию" accesskey="c" onclick=doJob()>Выделить цветами строки и значения по условию</button></div>';

    iface = iface + '</div>';

    menu[0].innerHTML = iface;
  }


  var tmp = [];
  drawInterface();




//menu[0].innerHTML = menu[0].innerHTML + '&nbsp&nbsp&nbsp&nbsp<a href="http://vk.com/robo9"><img src="https://vk.com/images/emoji/D83CDF4D_2x.png" width="16" height="16" alt=":)"></a><br/><input type="checkbox" name="CheckBad">';
/*menu[0].innerHTML = menu[0].innerHTML + ' | <img src="https://vk.com/images/emoji/2795_2x.png" width="16" height="16"><input type="number" name="plus" size="5" value="3.00">';
menu[0].innerHTML = menu[0].innerHTML + ' | <img src="https://vk.com/images/emoji/2796_2x.png" width="16" height="16"><input type="number" name="minus" size="5" value="5.00">';
menu[0].innerHTML = menu[0].innerHTML + ' | <input value="Подсветить" type="button" onclick="doJob()" name="color_button">';
menu[0].innerHTML = menu[0].innerHTML + ' | <div class="button_blue"><input value="CPC" type="button" onclick="doCPC()" class="button_blue"></div>';
menu[0].innerHTML = menu[0].innerHTML + ' | <div class="button_blue"><button onclick=alert()>Кнопка</button></div>'
*/
