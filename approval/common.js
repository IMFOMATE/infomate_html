

function deComma(inputstr)	{
	var str = inputstr;
	var len = str.length;
	var temp = "";

	for(var i = 0 ; i< len ; i++){
			if(str.charAt(i)!=",") temp += str.charAt(i);
	}
	return temp;
}

function toCurrency(valueStr)
{
	// nonNegetive Integer 인지 확인한다.
	var str = valueStr;
	var len = str.length;
	var temp = "";
	for(var i = 0; i < len; i++) {
		temp += str.charAt(i);
		if( (len-i) > 1 && (len - i) % 3 == 1) temp += ",";
	}
	return temp;
}

function toCurrencyIni(obj)
{
  obj.innerText  = toCurrency(obj.innerText);
}



function delComma(obj) {
  obj.innerText  = deComma(obj.innerText);
}


function FixMenu(doc, tools)
{

  if  (doc == null)  return;

  var w = tools.width;

	tools.parentElement.style.top  = doc.body.scrollTop +  15;
	tools.parentElement.style.left = doc.body.clientWidth + doc.body.scrollLeft - w -10;
}



function FixMenu2(doc, tools)
{

  if  (doc == null)  return;

  var w = 65; //tools.width;

	doc.all.menu.style.top  = doc.body.scrollTop + 5;
	doc.all.menu.style.left =  5;
}

function showhideTools(quickmenu, tools){
  if (tools == null) return;

  if (tools.style.display == '') {
			quickmenu.src="quick_open.gif";
  		tools.style.display = 'none';
  } else {
		quickmenu.src="quick_close.gif";
		tools.style.display = '';
  }
}



function setimgsrc(imgobj, srcfile){
			imgobj.src=srcfile;
}

Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";

    var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
    var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|SSS|kr_a\/p|en_a\/p|en2_a\/p|en3_a\/p|en4_a\/p)/g, function ($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear(); // 년 (4자리)
            case "yy": return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
            case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
            case "dd": return d.getDate().zf(2); // 일 (2자리)
            case "KS": return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
            case "KL": return weekKorName[d.getDay()]; // 요일 (긴 한글)
            case "ES": return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
            case "EL": return weekEngName[d.getDay()]; // 요일 (긴 영어)
            case "HH": return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
			case "H": return d.getHours(); // 시간
            case "h": return ((h = d.getHours() % 12) ? h : 12); // 시간
            case "mm": return d.getMinutes().zf(2); // 분 (2자리)
			case "m": return d.getMinutes(); // 분 
            case "ss": return d.getSeconds().zf(2); // 초 (2자리)
			case "SSS": return d.getMilliseconds().zf(3); // 밀리초 (3자리)
            case "kr_a/p": return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
			case "en_a/p": return d.getHours() < 12 ? "AM" : "PM"; // 오전/오후 구분
			case "en2_a/p": return d.getHours() < 12 ? "A" : "P"; // 오전/오후 구분
			case "en3_a/p": return d.getHours() < 12 ? "am" : "pm"; // 오전/오후 구분
			case "en4_a/p": return d.getHours() < 12 ? "a" : "p"; // 오전/오후 구분
            default: return $1;
        }
    });
};

String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };

function setDateTime(ids, is_editable, format, isToggle) {
	var e = document.getElementById(is_editable);
	if (!e || !(e.contentEditable=='true')) return;// inherit, false, 편집모드 판단가능 컨트롤 없는 경우 편집 불가
	
	var split_ids = ids.split(';');
	var _today = new Date();
	var formated_date;
	if (!format) formated_date = _today.format('yyyy-MM-dd HH:mm:ss');
	else formated_date = _today.format(format);
	
	split_ids.forEach(function (v, i) {
		var t = document.getElementById(v);
		if (!t) return;
		if (isToggle && t.innerText.trim().length > 0) t.innerText = '';
		else t.innerText = formated_date;
	});
}

//-->


////////////////////////계산스크립트 180413 BSY///////////////
//금액을 한글로 표시
function toHanCurrency(valueStr) {
  var NumberChar = new Array(10);
  NumberChar[0] = '영';
  NumberChar[1] = '일';
  NumberChar[2] = '이';
  NumberChar[3] = '삼';
  NumberChar[4] = '사';
  NumberChar[5] = '오';
  NumberChar[6] = '육';
  NumberChar[7] = '칠';
  NumberChar[8] = '팔';
  NumberChar[9] = '구';

  var LevelChar = new Array(4);
  LevelChar[0] = '';
  LevelChar[1] = '십';
  LevelChar[2] = '백';
  LevelChar[3] = '천';

  var DecimalChar = new Array(6);
  DecimalChar[0] = '';
  DecimalChar[1] = '만';
  DecimalChar[2] = '억';
  DecimalChar[3] = '조';
  DecimalChar[4] = '경';
  DecimalChar[5] = '현';


  var S = '';
  var UseDecimal = false;
  var i = 0;
  var Level  = 0;
  var Result = '';
  var sLen   = 0;
  var prefix = "";

  if(Number(valueStr) < 0)
	prefix = "-";
  S           = String(Math.abs(valueStr));
  sLen        = S.length;
  UseDecimal  = false;

  for (i=0; i< sLen; i++) {
    Level = sLen - (i+1);

    if (S.charAt(i) != '0') {
      UseDecimal = true;
      if ((Level % 4) == 0) {
        Result = Result + NumberChar[ Number(S.charAt(i)) ] + DecimalChar[ Level / 4 ];
        UseDecimal = false;
      }  else {
        Result = Result + NumberChar[ Number(S.charAt(i)) ] + LevelChar[ Level % 4 ];
      }
    } else if ( ( (Level % 4) == 0 ) && UseDecimal ) {
      Result = Result + DecimalChar[ Level / 4 ];
      UseDecimal = false;
    }
  }

  if(Result.length == 0)
     return prefix+Result;
  else
     return prefix+Result+' 원정';
}




// 금액입력폼 콤마 제거 후 텍스트 셀렉트
function del_focus(obj)
{
	
	var range = document.body.createTextRange();	
	obj.innerText = deComma(obj.innerText);	
  range.moveToElementText(obj);
  range.select();
}

//금액입력폼 콤마 표시
function vComma(obj) {
	var str = "" + obj.replace(/,/gi,''); // 콤마 제거
	var regx = new RegExp(/(-?\d+)(\d{3})/);
	var bExists = str.indexOf(".",0);
	var strArr = str.split('.');
	while(regx.test(strArr[0])){
		strArr[0] = strArr[0].replace(regx,"$1,$2");
	}
	if (bExists > -1)
		obj = strArr[0] + "." + strArr[1];
	else
		obj = strArr[0];
		
	return obj;
}

//금액입력폼 콤마 표시
function common_comma(paramObj)
{	
	paramObj.innerText = vComma(paramObj.innerText);
}




//특정 아이디에 값 표시
function common_value(paramPrefix, paramIndex, paramValue)
{	
	eval(paramPrefix+paramIndex).innerText = vComma(String(paramValue));	
	if(paramValue == '0') eval(paramPrefix+paramIndex).innerText = "";
}


// 덧셈
function common_calc_plus(paramValue1, paramValue2)
{
	return Number(paramValue1) + Number(paramValue2);
}

// 뺄셈
function common_calc_minus(paramValue1, paramValue2)
{
	return Number(paramValue1) - Number(paramValue2);
}


// 곱셈
function common_calc_mult(paramValue1, paramValue2)
{
	return Number(paramValue1) * Number(paramValue2);
}

// 나눗셈
function common_calc_division(paramValue1, paramValue2)
{
	return paramValue1 / paramValue2;
}

//넘버 형태로 변환
function common_number(paramPrefix, paramIndex)
{
	return Number(deComma(document.getElementById(paramPrefix+paramIndex).innerText));
}



//공급가 합계
function calc_all_sum(paramPrefix)
{
	var result = 0;
	var elements = document.getElementsByTagName('*'); //엘리먼트 전체 
	//for(var i=0; i<elements.length; i++)
	
	for(var i=0; i<elements.length; i++)
	{
		if (elements[i].id.substring(0, 2) == paramPrefix )
		{
			result += Number(deComma(elements[i].innerText));
		}		
	}
	
	return result;
}



// 좌우 동시계산
function calc_sum_xy(paramPrefix)
{
 var result = 0;
 var elements = document.getElementsByTagName('*'); //엘리먼트 전체 
 //for(var i=0; i<elements.length; i++)
 
 for(var i=0; i<elements.length; i++)
 {
  
   if (elements[i].id.substring(0, 3) == paramPrefix )
   {
    result += Number(deComma(elements[i].innerText));
   } 
   if (elements[i].id.substring(3, 6) == paramPrefix )
   {
    result += Number(deComma(elements[i].innerText));
   } 
  
 }
 
 //result = result.toFixed(2);
 return result;
}

//좌우 동시계산 합계
function calc_all_tot(paramPrefix)
{
	var result = 0;

	var elements = document.getElementsByTagName('*'); //엘리먼트 전체 
	//for(var i=0; i<elements.length; i++)
	
	for(var i=0; i<elements.length; i++)
	{
		if (elements[i].id.substring(0, 6) == paramPrefix )
		{
			result += Number(deComma(elements[i].innerText));
		}		
	}
	
	//result = result.toFixed(2);
	return result;
	
	
}


// 가로세로 계산
function calc_xy(obj)
{
 
 var id_pre = (obj.id).substring(0, 3);//앞자리 3자리
 var id_end = (obj.id).substring(3, 6);//뒷자리 3자리
 var id_two = (obj.id).substring(0, 2);//앞자리 2자리
 
 
 var sum_pre = "sum_"+id_pre; 
 common_value(sum_pre, "", calc_sum_xy(id_pre));
 
 var sum_end = "sum_"+id_end; 
 common_value(sum_end, "", calc_sum_xy(id_end)); 
 
 var sum_tot = "sum_"+id_two;
 common_value("amt_"+id_two, "", calc_all_tot(sum_tot)); 
 
    
}

 
//수량, 단가 합계 평션
function calc_value1(obj1, obj2, obj3)

{   

	var id_p = (obj1.id).substring(0, 2);//앞자리 2자리
	var id_e = (obj1.id).substring(2, 4);//뒷자리 1자리
	
	var aa = common_number(id_p, id_e);	
	var bb = common_number(obj2, id_e);		
    var cc = common_calc_mult(aa, bb);	
		
	common_value(obj3+id_e, "", cc);
	common_value("sum_"+obj3, "", calc_all_sum(obj3));
	common_comma(obj1);
	

}

//수량, 단가 합계, 부가세, 총합계
function calc_value2(obj1, obj2, obj3)

{   

	var id_p = (obj1.id).substring(0, 2);//앞자리 2자리
	var id_e = (obj1.id).substring(2, 4);//뒷자리 1자리
	
	var aa = common_number(id_p, id_e);	
	var bb = common_number(obj2, id_e);		
    var cc = common_calc_mult(aa, bb);	
		
	common_value(obj3+id_e, "", cc);
	common_value("sum_"+obj3, "", calc_all_sum(obj3));
	common_comma(obj1);
	
	
	var iTot =  calc_all_sum("cc");
	var fTax = (iTot*0.1).toFixed(0);//toFixed(0) 안에 숫자값으로 소수점자리수 조정하면 됨.
	
	var totSum = Number(iTot)+Number(fTax);

	common_value("sum_vat", "", fTax);
	common_value("sum_all", "", totSum);
		 
}



//수량, 단가 합계 부가세, 총금액, 한글표시
function calc_value3(obj1, obj2, obj3)

{   

	var id_p = (obj1.id).substring(0, 2);//앞자리 2자리
	var id_e = (obj1.id).substring(2, 4);//뒷자리 1자리
	
	var aa = common_number(id_p, id_e);	
	var bb = common_number(obj2, id_e);		
    var cc = common_calc_mult(aa, bb);	
		
	common_value(obj3+id_e, "", cc);
	common_value("sum_"+obj3, "", calc_all_sum(obj3));
	common_comma(obj1);
	
	
	var iTot =  calc_all_sum("cc");
	var fTax = (iTot*0.1).toFixed(0);//toFixed(0) 안에 숫자값으로 소수점자리수 조정하면 됨.
	
	var totSum = Number(iTot)+Number(fTax);

	common_value("sum_vat", "", fTax);
	common_value("sum_all", "", totSum);
	eval('hantot').innerText = toHanCurrency(String(Math.round(totSum)));	 
}
 


/////////////////////////////////////끝//////////////////

