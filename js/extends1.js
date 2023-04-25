/* ** basic extends for sudy */
function runJs(a)
{
	var b=document.createElement("script"); b.type="text/javascript",b.text=a;
	var c=document.getElementsByTagName("body"); c.length?c[0].appendChild(b):document.documentElement.appendChild(b)
}

function loadJs(a)
{
	var b=document.createElement("script"); b.type="text/javascript",b.src=a;
	var c=document.getElementsByTagName("head"); c.length?c[0].appendChild(b):document.documentElement.appendChild(b)
}

function Imgpd(a,b,c,d)
{
	this.title=a,this.url=b,this.text=c,this.src=d
}
	
function getImgJson(p)
{
	var imgJson=[];
	if("undefined"!==eval("typeof imgText"+p))
	{
		eval("var title = imgText"+p+", url = imgLink"+p+", text = imgContent"+p+", img = imgUrl"+p+";");
		var i;
		for(i=1;i<title.length;i++)imgJson[i-1]=new Imgpd(title[i],url[i],text[i],img[i])
	}
	else"undefined"!==eval("typeof w"+p+"imgJsons")&&eval("imgJson = w"+p+"imgJsons");
	return imgJson
}

/* ** load jquery and jquery plugins for sudy */
var EXTEND_PATH, exScripts = document.getElementsByTagName("script"); EXTEND_PATH = exScripts[exScripts.length - 1].getAttribute("src").replace('extends.js','');
document.write('<link rel="stylesheet" type="text/css" href="'+EXTEND_PATH+'extends.css" >');
window.jQuery || document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery.min.js"><\/script>');
document.write('<script type="text/javascript" src="'+EXTEND_PATH+'libs/jquery.sudy.js"><\/script>');

/**qz:跟随页面更换一级菜单高亮**/
function ChangeMenuBg()
{
	var the_pagetitle=document.title;
	var title1="人文党建－首页";
	var title2="党务公开";
	var title3="党建概况";
	var title4="支部生活";
	var title5="党员风采";
	var title6="党校学习";
	var title7="党建动态";
	var title8="制度建设";
	var title9="学习天地";
	var title10="下载中心";
	var title11="立项展示";
	for(i=1;i<=11;i++){document.getElementById("menu_"+i).className="normal";}
	if(the_pagetitle==title1)
	{
		document.getElementById("menu_1").className="pre";
	}
	else if(the_pagetitle===title2)
	{
		document.getElementById("menu_2").className="pre";
	}
	else if(the_pagetitle===title3)
	{
		document.getElementById("menu_3").className="pre";
	}
	else if(the_pagetitle===title4)
	{
		document.getElementById("menu_4").className="pre";
	}
	else if(the_pagetitle===title5)
	{
		document.getElementById("menu_5").className="pre";
	}
	else if(the_pagetitle===title6)
	{
		document.getElementById("menu_6").className="pre";
	}
	else if(the_pagetitle===title7)
	{
		document.getElementById("menu_7").className="pre";
	}
	else if(the_pagetitle===title8)
	{
		document.getElementById("menu_8").className="pre";
	}
	else if(the_pagetitle===title9)
	{
		document.getElementById("menu_9").className="pre";
	}
	else if(the_pagetitle===title10)
	{
		document.getElementById("menu_10").className="pre";
	}
	else if(the_pagetitle===title11)
	{
		document.getElementById("menu_11").className="pre";
	}
}
