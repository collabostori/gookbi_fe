<!--

function changeDlocal(form,LCode) {
	
	var form = document.form;
	for (i=0;i<form.Dlocal.length;i++) {
		
		if (form.Dlocal[i].value.slice(0,5) == LCode) {
			form.Dlocal[i].selected = true;
			break;	
		}
	}	
}

function changeLlocal(form) {
	
	var form = document.form;
	var SLocal = form.Llocal.value.slice(0,3);

	selClear('Dlocal');

	switch (SLocal) {
		    case 'NNN':
			
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			break;
		case 'L01':
		
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('강남구', 'L0101|강남구', true);
			form.Dlocal.options[02]    = new Option('강동구', 'L0102|강동구', true);
			form.Dlocal.options[03]    = new Option('강북구', 'L0103|강북구', true);
			form.Dlocal.options[04]    = new Option('강서구', 'L0104|강서구', true);
			form.Dlocal.options[05]    = new Option('관악구', 'L0105|관악구', true);
			form.Dlocal.options[06]    = new Option('광진구', 'L0106|광진구', true);
			form.Dlocal.options[07]    = new Option('구로구', 'L0107|구로구', true);
			form.Dlocal.options[08]    = new Option('금천구', 'L0108|금천구', true);
			form.Dlocal.options[09]    = new Option('노원구', 'L0109|노원구', true);
			form.Dlocal.options[10]    = new Option('도봉구', 'L0110|도봉구', true);
			form.Dlocal.options[11]    = new Option('동대문구', 'L0111|동대문구', true);
			form.Dlocal.options[12]    = new Option('동작구', 'L0112|동작구', true);
			form.Dlocal.options[13]    = new Option('마포구', 'L0113|마포구', true);
			form.Dlocal.options[14]    = new Option('서대문구', 'L0114|서대문구', true);
			form.Dlocal.options[15]    = new Option('서초구', 'L0115|서초구', true);
			form.Dlocal.options[16]    = new Option('성동구', 'L0116|성동구', true);
			form.Dlocal.options[17]    = new Option('성북구', 'L0117|성북구', true);
			form.Dlocal.options[18]    = new Option('송파구', 'L0118|송파구', true);
			form.Dlocal.options[19]    = new Option('양천구', 'L0119|양천구', true);
			form.Dlocal.options[20]    = new Option('영등포구', 'L0120|영등포구', true);
			form.Dlocal.options[21]    = new Option('용산구', 'L0121|용산구', true);
			form.Dlocal.options[22]    = new Option('은평구', 'L0122|은평구', true);
			form.Dlocal.options[23]    = new Option('종로구', 'L0123|종로구', true);
			form.Dlocal.options[24]    = new Option('중구', 'L0124|중구', true);
			form.Dlocal.options[25]    = new Option('중랑구', 'L0125|중랑구', true);
			form.Dlocal.options[26]    = new Option('전지역', 'L0126|전지역', true);
			break;			
		case 'L02':	
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('강화군', 'L0201|강화군', true);
			form.Dlocal.options[02]    = new Option('계양구', 'L0202|계양구', true);
			form.Dlocal.options[03]    = new Option('남구', 'L0203|남구', true);
			form.Dlocal.options[04]    = new Option('남동구', 'L0204|남동구', true);
			form.Dlocal.options[05]    = new Option('동구', 'L0205|동구', true);
			form.Dlocal.options[06]    = new Option('부평구', 'L0206|부평구', true);
			form.Dlocal.options[07]    = new Option('서구', 'L0207|서구', true);
			form.Dlocal.options[08]    = new Option('연수구', 'L0208|연수구', true);
			form.Dlocal.options[09]    = new Option('옹진군', 'L0209|옹진군', true);
			form.Dlocal.options[10]    = new Option('중구', 'L0210|중구', true);	
			form.Dlocal.options[11]    = new Option('전지역', 'L0211|전지역', true);
			break;			
		case 'L03':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('강서구', 'L0301|강서구', true);
			form.Dlocal.options[02]    = new Option('금정구', 'L0302|금정구', true);
			form.Dlocal.options[03]    = new Option('기장군', 'L0303|기장군', true);
			form.Dlocal.options[04]    = new Option('남구', 'L0304|남구', true);
			form.Dlocal.options[05]    = new Option('동래구', 'L0305|동래구', true);
			form.Dlocal.options[06]    = new Option('부산진구', 'L0306|부산진구', true);
			form.Dlocal.options[07]    = new Option('북구', 'L0307|북구', true);
			form.Dlocal.options[08]    = new Option('사상구', 'L0308|사상구', true);
			form.Dlocal.options[09]    = new Option('사하구', 'L0309|사하구', true);
			form.Dlocal.options[10]    = new Option('서구', 'L0310|서구', true);
			form.Dlocal.options[11]    = new Option('수영구', 'L0311|수영구', true);
			form.Dlocal.options[12]    = new Option('연제구', 'L0312|연제구', true);
			form.Dlocal.options[13]    = new Option('영도구', 'L0313|영도구', true);
			form.Dlocal.options[14]    = new Option('중구', 'L0314|중구', true);
			form.Dlocal.options[15]    = new Option('해운대구', 'L0315|해운대구', true);
			form.Dlocal.options[16]    = new Option('동구', 'L0316|동구', true);	
			form.Dlocal.options[17]    = new Option('전지역', 'L0317|전지역', true);
			break;
		case 'L04':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('광산구', 'L0401|광산구', true);
			form.Dlocal.options[02]    = new Option('남구', 'L0402|남구', true);
			form.Dlocal.options[03]    = new Option('동구', 'L0403|동구', true);
			form.Dlocal.options[04]    = new Option('북구', 'L0404|북구', true);
			form.Dlocal.options[05]    = new Option('서구', 'L0405|서구', true);	
			form.Dlocal.options[06]    = new Option('전지역', 'L0406|전지역', true);	
			break;
		case 'L05':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('대덕구', 'L0501|대덕구', true);
			form.Dlocal.options[02]    = new Option('동구', 'L0502|동구', true);
			form.Dlocal.options[03]    = new Option('서구', 'L0503|서구', true);
			form.Dlocal.options[04]    = new Option('유성구', 'L0504|유성구', true);
			form.Dlocal.options[05]    = new Option('중구', 'L0505|중구', true);	
			form.Dlocal.options[06]    = new Option('전지역', 'L0506|전지역', true);
			break;
		case 'L06':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('남구', 'L0601|남구', true);
			form.Dlocal.options[02]    = new Option('달서구', 'L0602|달서구', true);
			form.Dlocal.options[03]    = new Option('달성군', 'L0603|달성군', true);
			form.Dlocal.options[04]    = new Option('동구', 'L0604|동구', true);
			form.Dlocal.options[05]    = new Option('북구', 'L0605|북구', true);
			form.Dlocal.options[06]    = new Option('서구', 'L0606|서구', true);
			form.Dlocal.options[07]    = new Option('수성구', 'L0607|수성구', true);
			form.Dlocal.options[08]    = new Option('중구', 'L0608|중구', true);		
			form.Dlocal.options[09]    = new Option('전지역', 'L0609|전지역', true);
			break;
		case 'L07':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('남구', 'L0701|남구', true);
			form.Dlocal.options[02]    = new Option('동구', 'L0702|동구', true);
			form.Dlocal.options[03]    = new Option('북구', 'L0703|북구', true);
			form.Dlocal.options[04]    = new Option('울주군', 'L0704|울주군', true);
			form.Dlocal.options[05]    = new Option('중구', 'L0705|중구', true);	
			form.Dlocal.options[06]    = new Option('전지역', 'L0706|전지역', true);
			break;
		case 'L08':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('가평군', 'L0801|가평군', true);
			form.Dlocal.options[02]    = new Option('고양시', 'L0802|고양시', true);
			form.Dlocal.options[03]    = new Option('과천시', 'L0803|과천시', true);
			form.Dlocal.options[04]    = new Option('광명시', 'L0804|광명시', true);
			form.Dlocal.options[05]    = new Option('광주시', 'L0805|광주시', true);
			form.Dlocal.options[06]    = new Option('구리시', 'L0806|구리시', true);
			form.Dlocal.options[07]    = new Option('군포시', 'L0807|군포시', true);
			form.Dlocal.options[08]    = new Option('김포시', 'L0808|김포시', true);
			form.Dlocal.options[09]    = new Option('남양주시', 'L0809|남양주시', true);
			form.Dlocal.options[10]    = new Option('동두천시', 'L0810|동두천시', true);
			form.Dlocal.options[11]    = new Option('부천시', 'L0811|부천시', true);
			form.Dlocal.options[12]    = new Option('성남시', 'L0812|성남시', true);
			form.Dlocal.options[13]    = new Option('수원시', 'L0813|수원시', true);
			form.Dlocal.options[14]    = new Option('시흥시', 'L0814|시흥시', true);
			form.Dlocal.options[15]    = new Option('안산시', 'L0815|안산시', true);
			form.Dlocal.options[16]    = new Option('안성시', 'L0816|안성시', true);
			form.Dlocal.options[17]    = new Option('안양시', 'L0817|안양시', true);
			form.Dlocal.options[18]    = new Option('양주군', 'L0818|양주군', true);
			form.Dlocal.options[19]    = new Option('양평군', 'L0819|양평군', true);
			form.Dlocal.options[20]    = new Option('여주군', 'L0820|여주군', true);
			form.Dlocal.options[21]    = new Option('연천군', 'L0821|연천군', true);
			form.Dlocal.options[22]    = new Option('오산시', 'L0822|오산시', true);
			form.Dlocal.options[23]    = new Option('용인시', 'L0823|용인시', true);
			form.Dlocal.options[24]    = new Option('의왕시', 'L0824|의왕시', true);
			form.Dlocal.options[25]    = new Option('의정부시', 'L0825|의정부시', true);
			form.Dlocal.options[26]    = new Option('이천시', 'L0826|이천시', true);
			form.Dlocal.options[27]    = new Option('파주시', 'L0827|파주시', true);
			form.Dlocal.options[28]    = new Option('평택시', 'L0828|평택시', true);
			form.Dlocal.options[29]    = new Option('포천군', 'L0829|포천군', true);
			form.Dlocal.options[30]    = new Option('하남시', 'L0830|하남시', true);
			form.Dlocal.options[31]    = new Option('화성군', 'L0831|화성군', true);
			form.Dlocal.options[32]    = new Option('전지역', 'L0832|전지역', true);		
			break;
		case 'L09':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('강릉시', 'L0901|강릉시', true);
			form.Dlocal.options[02]    = new Option('고성군', 'L0902|고성군', true);
			form.Dlocal.options[03]    = new Option('동해시', 'L0903|동해시', true);
			form.Dlocal.options[04]    = new Option('삼척시', 'L0904|삼척시', true);
			form.Dlocal.options[05]    = new Option('속초시', 'L0905|속초시', true);
			form.Dlocal.options[06]    = new Option('양구군', 'L0906|양구군', true);
			form.Dlocal.options[07]    = new Option('양양군', 'L0907|양양군', true);
			form.Dlocal.options[08]    = new Option('영월군', 'L0908|영월군', true);
			form.Dlocal.options[09]    = new Option('원주시', 'L0909|원주시', true);
			form.Dlocal.options[10]    = new Option('인제군', 'L0910|인제군', true);
			form.Dlocal.options[11]    = new Option('정선군', 'L0911|정선군', true);
			form.Dlocal.options[12]    = new Option('철원군', 'L0912|철원군', true);
			form.Dlocal.options[13]    = new Option('춘천시', 'L0913|춘천시', true);
			form.Dlocal.options[14]    = new Option('태백시', 'L0914|태백시', true);
			form.Dlocal.options[15]    = new Option('평창군', 'L0915|평창군', true);
			form.Dlocal.options[16]    = new Option('홍천군', 'L0916|홍천군', true);
			form.Dlocal.options[17]    = new Option('화천군', 'L0917|화천군', true);
			form.Dlocal.options[18]    = new Option('횡성군', 'L0918|횡성군', true);	
			form.Dlocal.options[19]    = new Option('전지역', 'L0919|전지역', true);
			break;
		case 'L10':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('괴산군', 'L1001|괴산군', true);
			form.Dlocal.options[02]    = new Option('단양군', 'L1002|단양군', true);
			form.Dlocal.options[03]    = new Option('보은군', 'L1003|보은군', true);
			form.Dlocal.options[04]    = new Option('영동군', 'L1004|영동군', true);
			form.Dlocal.options[05]    = new Option('옥천군', 'L1005|옥천군', true);
			form.Dlocal.options[06]    = new Option('음성군', 'L1006|음성군', true);
			form.Dlocal.options[07]    = new Option('제천시', 'L1007|제천시', true);
			form.Dlocal.options[08]    = new Option('진천군', 'L1008|진천군', true);
			form.Dlocal.options[09]    = new Option('청원군', 'L1009|청원군', true);
			form.Dlocal.options[10]    = new Option('청주시', 'L1010|청주시', true);
			form.Dlocal.options[11]    = new Option('충주시', 'L1011|충주시', true);	
			form.Dlocal.options[12]    = new Option('전지역', 'L1012|전지역', true);	
			break;
		case 'L11':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('공주시', 'L1101|공주시', true);
			form.Dlocal.options[02]    = new Option('금산군', 'L1102|금산군', true);
			form.Dlocal.options[03]    = new Option('논산시', 'L1103|논산시', true);
			form.Dlocal.options[04]    = new Option('당진군', 'L1104|당진군', true);
			form.Dlocal.options[05]    = new Option('보령시', 'L1105|보령시', true);
			form.Dlocal.options[06]    = new Option('부여군', 'L1106|부여군', true);
			form.Dlocal.options[07]    = new Option('서산시', 'L1107|서산시', true);
			form.Dlocal.options[08]    = new Option('서천군', 'L1108|서천군', true);
			form.Dlocal.options[09]    = new Option('아산시', 'L1109|아산시', true);
			form.Dlocal.options[10]    = new Option('연기군', 'L1110|연기군', true);
			form.Dlocal.options[11]    = new Option('예산군', 'L1111|예산군', true);
			form.Dlocal.options[12]    = new Option('천안시', 'L1112|천안시', true);
			form.Dlocal.options[13]    = new Option('함양군', 'L1113|함양군', true);
			form.Dlocal.options[14]    = new Option('태안군', 'L1114|태안군', true);
			form.Dlocal.options[15]    = new Option('홍성군', 'L1115|홍성군', true);
			form.Dlocal.options[16]    = new Option('전지역', 'L1116|전지역', true);	
			break;
		case 'L12':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('경산시', 'L1201|경산시', true);
			form.Dlocal.options[02]    = new Option('고령군', 'L1202|고령군', true);
			form.Dlocal.options[03]    = new Option('구미시', 'L1203|구미시', true);
			form.Dlocal.options[04]    = new Option('군위군', 'L1204|군위군', true);
			form.Dlocal.options[05]    = new Option('김천시', 'L1205|김천시', true);
			form.Dlocal.options[06]    = new Option('문경시', 'L1206|문경시', true);
			form.Dlocal.options[07]    = new Option('봉화군', 'L1207|봉화군', true);
			form.Dlocal.options[08]    = new Option('상주시', 'L1208|상주시', true);
			form.Dlocal.options[09]    = new Option('성주군', 'L1209|성주군', true);
			form.Dlocal.options[10]    = new Option('안동시', 'L1210|안동시', true);
			form.Dlocal.options[11]    = new Option('영덕군', 'L1211|영덕군', true);
			form.Dlocal.options[12]    = new Option('영양군', 'L1212|영양군', true);
			form.Dlocal.options[13]    = new Option('영주시', 'L1213|영주시', true);
			form.Dlocal.options[14]    = new Option('영천시', 'L1214|영천시', true);
			form.Dlocal.options[15]    = new Option('예천군', 'L1215|예천군', true);
			form.Dlocal.options[16]    = new Option('울릉군', 'L1216|울릉군', true);
			form.Dlocal.options[17]    = new Option('울진군', 'L1217|울진군', true);
			form.Dlocal.options[18]    = new Option('의성군', 'L1218|의성군', true);
			form.Dlocal.options[19]    = new Option('청도군', 'L1219|청도군', true);
			form.Dlocal.options[20]    = new Option('청송군', 'L1220|청송군', true);
			form.Dlocal.options[21]    = new Option('칠곡군', 'L1221|칠곡군', true);
			form.Dlocal.options[22]    = new Option('포항시', 'L1222|포항시', true);	
			form.Dlocal.options[23]    = new Option('전지역', 'L1223|전지역', true);
			break;
		case 'L13':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('거제시', 'L1301|거제시', true);
			form.Dlocal.options[02]    = new Option('거창군', 'L1302|거창군', true);
			form.Dlocal.options[03]    = new Option('고성군', 'L1303|고성군', true);
			form.Dlocal.options[04]    = new Option('김해시', 'L1304|김해시', true);
			form.Dlocal.options[05]    = new Option('남해군', 'L1305|남해군', true);
			form.Dlocal.options[06]    = new Option('마산시', 'L1306|마산시', true);
			form.Dlocal.options[07]    = new Option('밀양시', 'L1307|밀양시', true);
			form.Dlocal.options[08]    = new Option('사천시', 'L1308|사천시', true);
			form.Dlocal.options[09]    = new Option('산청군', 'L1309|산청군', true);
			form.Dlocal.options[10]    = new Option('양산시', 'L1310|양산시', true);
			form.Dlocal.options[11]    = new Option('의령군', 'L1311|의령군', true);
			form.Dlocal.options[12]    = new Option('진주시', 'L1312|진주시', true);
			form.Dlocal.options[13]    = new Option('진해시', 'L1313|진해시', true);
			form.Dlocal.options[14]    = new Option('창녕군', 'L1314|창녕군', true);
			form.Dlocal.options[15]    = new Option('창원시', 'L1315|창원시', true);
			form.Dlocal.options[16]    = new Option('통영시', 'L1316|통영시', true);
			form.Dlocal.options[17]    = new Option('하동군', 'L1317|하동군', true);
			form.Dlocal.options[18]    = new Option('함안군', 'L1318|함안군', true);
			form.Dlocal.options[19]    = new Option('함양군', 'L1319|함양군', true);
			form.Dlocal.options[20]    = new Option('합천군', 'L1320|합천군', true);
			form.Dlocal.options[21]    = new Option('전지역', 'L1321|전지역', true);		
			break;
		case 'L14':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('고창군', 'L1401|고창군', true);
			form.Dlocal.options[02]    = new Option('군산시', 'L1402|군산시', true);
			form.Dlocal.options[03]    = new Option('김제시', 'L1403|김제시', true);
			form.Dlocal.options[04]    = new Option('남원시', 'L1404|남원시', true);
			form.Dlocal.options[05]    = new Option('무주군', 'L1405|무주군', true);
			form.Dlocal.options[06]    = new Option('부안군', 'L1406|부안군', true);
			form.Dlocal.options[07]    = new Option('순창군', 'L1407|순창군', true);
			form.Dlocal.options[08]    = new Option('완주군', 'L1408|완주군', true);
			form.Dlocal.options[09]    = new Option('익산시', 'L1409|익산시', true);
			form.Dlocal.options[10]    = new Option('임실군', 'L1410|임실군', true);
			form.Dlocal.options[11]    = new Option('장수군', 'L1411|장수군', true);
			form.Dlocal.options[12]    = new Option('전주시', 'L1412|전주시', true);
			form.Dlocal.options[13]    = new Option('정읍시', 'L1413|정읍시', true);
			form.Dlocal.options[14]    = new Option('진안군', 'L1414|진안군', true);	
			form.Dlocal.options[15]    = new Option('전지역', 'L1415|전지역', true);	
			break;
		case 'L15':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('강진군', 'L1501|강진군', true);
			form.Dlocal.options[02]    = new Option('고흥군', 'L1502|고흥군', true);
			form.Dlocal.options[03]    = new Option('곡성군', 'L1503|곡성군', true);
			form.Dlocal.options[04]    = new Option('광양시', 'L1504|광양시', true);
			form.Dlocal.options[05]    = new Option('구례군', 'L1505|구례군', true);
			form.Dlocal.options[06]    = new Option('나주시', 'L1506|나주시', true);
			form.Dlocal.options[07]    = new Option('담양군', 'L1507|담양군', true);
			form.Dlocal.options[08]    = new Option('목포시', 'L1508|목포시', true);
			form.Dlocal.options[09]    = new Option('무안군', 'L1509|무안군', true);
			form.Dlocal.options[10]    = new Option('보성군', 'L1510|보성군', true);
			form.Dlocal.options[11]    = new Option('순천시', 'L1511|순천시', true);
			form.Dlocal.options[12]    = new Option('신안군', 'L1512|신안군', true);
			form.Dlocal.options[13]    = new Option('여수시', 'L1513|여수시', true);
			form.Dlocal.options[14]    = new Option('영광군', 'L1514|영광군', true);
			form.Dlocal.options[15]    = new Option('영암군', 'L1515|영암군', true);
			form.Dlocal.options[16]    = new Option('완도군', 'L1516|완도군', true);
			form.Dlocal.options[17]    = new Option('장성군', 'L1517|장성군', true);
			form.Dlocal.options[18]    = new Option('장흥군', 'L1518|장흥군', true);
			form.Dlocal.options[19]    = new Option('진도군', 'L1519|진도군', true);
			form.Dlocal.options[20]    = new Option('함평군', 'L1520|함평군', true);
			form.Dlocal.options[21]    = new Option('해남군', 'L1521|해남군', true);
			form.Dlocal.options[22]    = new Option('화순군', 'L1522|화순군', true);		
			form.Dlocal.options[23]    = new Option('전지역', 'L1523|전지역', true);
			break;
		case 'L16':
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);
			form.Dlocal.options[01]    = new Option('남제주군', 'L1601|남제주군', true);
			form.Dlocal.options[02]    = new Option('북제주군', 'L1602|북제주군', true);
			form.Dlocal.options[03]    = new Option('서귀포시', 'L1603|서귀포시', true);
			form.Dlocal.options[04]    = new Option('제주시', 'L1604|제주시', true);	
			form.Dlocal.options[05]    = new Option('전지역', 'L1605|전지역', true);	
			break;
		case 'L17':	
			form.Dlocal.options[00]    = new Option('- 구군명선택 -', 'NNNNN', true);					
			form.Dlocal.options[01]    = new Option('기타', 'L1701|기타', true);	
			break;
		default:				
			break;
	}
	
	form.Dlocal[0].selected = true;
		
}

function selClear(sName) {
	while (document.form[sName].length > 1) {
		Cnt	= document.form[sName].length;
		
		for (i=0; i < Cnt; i++) {
			document.form[sName].options[i]	= null;
		}
	}
}
-->