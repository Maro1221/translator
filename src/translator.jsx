import React, { useState } from 'react';


export function Translator(){
const[inputValue,setinputValue]=useState("");
const[firstValue,setfirstValue]=useState("auto");
const[secondValue,setsecondValue]=useState("pl");





function translate(){

let flag=0
    let link=inputValue;
    if(link.substring(0,8)=="https://"){
link=link.substring(8,link.length)
    }

    for(const i in link){
        
        if(link[i]=="."){
            link=link.replace(link[i],"-")
            
        }
    }

    for(const i in link){
        
        if(link[i]=="/"){
            link=link.replace(link[i],".translate.goog/");
            flag=1

            break
 
        }
    }
if(flag==0){
link=link.concat(".translate.goog/")
}
if(link!=""){
    window.open("https://"+link+"/?_x_tr_sl="+firstValue+"&_x_tr_tl="+secondValue+"&_x_tr_hl=pl&_x_tr_pto=wapp", "_blank");
}
}


    return(
      <div className='content '>
        <div id="translate-pool" className="mx-auto shadow mt-md-2 mt-sm-3 mt-3    ">




    <div className="form1 mt-4">

  <div  className='' >Link:</div>

  <input value={inputValue} className="pointer " type="text" onChange={e => setinputValue(e.target.value)}/>
    </div>
    <div className="form2">

      <div id="rotate2 " className="mt-5  " >Język strony internetowej:
      
   



      </div>


    <select value={firstValue}  onChange={e => setfirstValue(e.target.value)} className=" mt-3  pointer   mx-auto" id="languages1">
      <option value="auto">Wykryj automatycznie</option>
      <option value="af">afrikaans</option>
      <option value="sq">albański</option>
      <option value="am">amharski</option>
      <option value="en">angielski</option>
      <option value="ar">arabski</option>
      <option value="az">azerski</option>
      <option value="eu">baskijski</option>
      <option value="bn">bengalski</option>
      <option value="be">białoruski</option>
      <option value="my">birmański</option>
      <option value="bs">bośniacki</option>
      <option value="bg">bułgarski</option>
      <option value="ceb">cebuański</option>
      <option value="zh-TW">chiński (tradycyjny)</option>
      <option value="zh-CN">chiński (uproszczony)</option>
      <option value="hr">chorwacki</option>
      <option value="cs">czeski</option>
      <option value="ny">cziczewa</option>
      <option value="da">duński</option>
      <option value="eo">esperanto</option>
      <option value="et">estoński</option>
      <option value="tl">filipiński</option>
      <option value="fi">fiński</option>
        <option value="fr">francuski</option>
        <option value="fy">fryzyjski</option>
        <option value="gl">galicyjski</option>
        <option value="el">grecki</option>
        <option value="ka">gruziński</option>
        <option value="gu">gudżarati</option>
        <option value="ha">hausa</option>
        <option value="haw">hawajski</option>
        <option value="iw">hebrajski</option>
        <option value="hi">hindi</option>
        <option value="es">hiszpański</option>
        <option value="hmn">hmong</option>
        <option value="ig">igbo</option>
        <option value="id">indonezyjski</option>
        <option value="ga">irlandzki</option>
        <option value="is">islandzki</option>
        <option value="ja">japoński</option>
        <option value="jw">jawajski</option>
        <option value="yi">jidysz</option>
        <option value="yo">joruba</option>
        <option value="kn">kannada</option>
        <option value="ca">kataloński</option>
        <option value="kk">kazachski</option>
        <option value="km">khmerski</option>
        <option value="ky">kirgiski</option>
        <option value="ko">koreański</option>
        <option value="co">korsykański</option>
        <option value="ht">kreolski (Haiti)</option>
        <option value="ku">kurdyjski</option>
        <option value="lo">laotański</option>
        <option value="lt">litewski</option>
        <option value="lb">luksemburski</option>
        <option value="la">łaciński</option>
        <option value="lv">łotewski</option>
        <option value="mk">macedoński</option>
        <option value="ml">malajalam</option>
        <option value="ms">malajski</option>
        <option value="mg">malgaski</option>
        <option value="mt">maltański</option>
        <option value="mi">maori</option>
        <option value="mr">marathi</option>
        <option value="mn">mongolski</option>
        <option value="ne">nepalski</option>
        <option value="nl">niderlandzki</option>
        <option value="de">niemiecki</option>
        <option value="no">norweski</option>
        <option value="or">orija</option>
        <option value="hy">ormiański</option>
        <option value="ps">paszto</option>
        <option value="pa">pendżabski</option>
        <option value="fa">perski</option>
        <option value="pl">polski</option>
        <option value="pt">portugalski</option>
        <option value="ru">rosyjski</option>
        <option value="rw">ruanda-rundi</option>
        <option value="ro">rumuński</option>
        <option value="sm">samoański</option>
        <option value="sr">serbski</option>
        <option value="sn">shona</option>
        <option value="sd">sindhi</option>
        <option value="sk">słowacki</option>
        <option value="sl">słoweński</option>
        <option value="so">somalijski</option>
        <option value="st">sotho</option>
        <option value="sw">suahili</option>
        <option value="su">sundajski</option>
        <option value="si">syngaleski</option>
        <option value="gd">szkocki gaelicki</option>
        <option value="sv">szwedzki</option>
        <option value="tg">tadżycki</option>
        <option value="th">tajski</option>
        <option value="ta">tamilski</option>
        <option value="tt">tatarski</option>
        <option value="te">telugu</option>
        <option value="tr">turecki</option>
        <option value="tk">turkmeński</option>
        <option value="ug">ujgurski</option>
        <option value="uk">ukraiński</option>
        <option value="ur">urdu</option>
        <option value="uz">uzbecki</option>
        <option value="cy">walijski</option>
        <option value="hu">węgierski</option>
        <option value="vi">wietnamski</option>
        <option value="it">włoski</option>
        <option value="xh">xhosa</option>
        <option value="zu">zulu</option>

    </select>
  </div>
  <div className="form3">

 
    <div id="rotate3" className="mx-auto    mt-5  " >Język na który chcesz przetłumaczyć: </div>
 
    <select   value={secondValue}  onChange={e => setsecondValue(e.target.value)} className=" mt-3 pointer  mx-auto "  id="languages2">
      <option value="af">afrikaans</option>
      <option value="sq">albański</option>
      <option value="am">amharski</option>
      <option value="en">angielski</option>
      <option value="ar">arabski</option>
      <option value="az">azerski</option>
      <option value="eu">baskijski</option>
      <option value="bn">bengalski</option>
      <option value="be">białoruski</option>
      <option value="my">birmański</option>
      <option value="bs">bośniacki</option>
      <option value="bg">bułgarski</option>
      <option value="ceb">cebuański</option>
      <option value="zh-TW">chiński (tradycyjny)</option>
      <option value="zh-CN">chiński (uproszczony)</option>
      <option value="hr">chorwacki</option>
      <option value="cs">czeski</option>
      <option value="ny">cziczewa</option>
      <option value="da">duński</option>
      <option value="eo">esperanto</option>
      <option value="et">estoński</option>
      <option value="tl">filipiński</option>
      <option value="fi">fiński</option>
        <option value="fr">francuski</option>
        <option value="fy">fryzyjski</option>
        <option value="gl">galicyjski</option>
        <option value="el">grecki</option>
        <option value="ka">gruziński</option>
        <option value="gu">gudżarati</option>
        <option value="ha">hausa</option>
        <option value="haw">hawajski</option>
        <option value="iw">hebrajski</option>
        <option value="hi">hindi</option>
        <option value="es">hiszpański</option>
        <option value="hmn">hmong</option>
        <option value="ig">igbo</option>
        <option value="id">indonezyjski</option>
        <option value="ga">irlandzki</option>
        <option value="is">islandzki</option>
        <option value="ja">japoński</option>
        <option value="jw">jawajski</option>
        <option value="yi">jidysz</option>
        <option value="yo">joruba</option>
        <option value="kn">kannada</option>
        <option value="ca">kataloński</option>
        <option value="kk">kazachski</option>
        <option value="km">khmerski</option>
        <option value="ky">kirgiski</option>
        <option value="ko">koreański</option>
        <option value="co">korsykański</option>
        <option value="ht">kreolski (Haiti)</option>
        <option value="ku">kurdyjski</option>
        <option value="lo">laotański</option>
        <option value="lt">litewski</option>
        <option value="lb">luksemburski</option>
        <option value="la">łaciński</option>
        <option value="lv">łotewski</option>
        <option value="mk">macedoński</option>
        <option value="ml">malajalam</option>
        <option value="ms">malajski</option>
        <option value="mg">malgaski</option>
        <option value="mt">maltański</option>
        <option value="mi">maori</option>
        <option value="mr">marathi</option>
        <option value="mn">mongolski</option>
        <option value="ne">nepalski</option>
        <option value="nl">niderlandzki</option>
        <option value="de">niemiecki</option>
        <option value="no">norweski</option>
        <option value="or">orija</option>
        <option value="hy">ormiański</option>
        <option value="ps">paszto</option>
        <option value="pa">pendżabski</option>
        <option value="fa">perski</option>
        <option  value="pl">polski</option>
        <option value="pt">portugalski</option>
        <option value="ru">rosyjski</option>
        <option value="rw">ruanda-rundi</option>
        <option value="ro">rumuński</option>
        <option value="sm">samoański</option>
        <option value="sr">serbski</option>
        <option value="sn">shona</option>
        <option value="sd">sindhi</option>
        <option value="sk">słowacki</option>
        <option value="sl">słoweński</option>
        <option value="so">somalijski</option>
        <option value="st">sotho</option>
        <option value="sw">suahili</option>
        <option value="su">sundajski</option>
        <option value="si">syngaleski</option>
        <option value="gd">szkocki gaelicki</option>
        <option value="sv">szwedzki</option>
        <option value="tg">tadżycki</option>
        <option value="th">tajski</option>
        <option value="ta">tamilski</option>
        <option value="tt">tatarski</option>
        <option value="te">telugu</option>
        <option value="tr">turecki</option>
        <option value="tk">turkmeński</option>
        <option value="ug">ujgurski</option>
        <option value="uk">ukraiński</option>
        <option value="ur">urdu</option>
        <option value="uz">uzbecki</option>
        <option value="cy">walijski</option>
        <option value="hu">węgierski</option>
        <option value="vi">wietnamski</option>
        <option value="it">włoski</option>
        <option value="xh">xhosa</option>
        <option value="zu">zulu</option>

    </select>
    
    <div className="  translateButton pointer mx-auto " onClick={() =>translate()}>Tłumacz stronę internetową</div>



  </div>

  </div></div>
    )
}