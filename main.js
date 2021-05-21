function button_find(){
	const text = document.getElementById('member_text').value;
	find_units(text);

}
/*
text2idols(`田所あずさ（最上静香役）
	郁原ゆう`) = [最上静香, エミリー]
*/
function text2idols(text){
	let idols = [];
	const items = text.split(/[,:()\t\n、（）]/);
	for (let item of items){
		//名前に空白が入ってそうなので削除
		const name = item.replace(/\s+/g,'');
		//アイドルリストに入っていたらそのまま追加
		if (idol_names.indexOf(name) > -1){
			idols.push(name);
		}
		//声優名だったらアイドル名に変換して追加
		if (cv2idol[name]){
			idols.push(cv2idol[name]);
		}
	}
	return idols;

}
/*
アイドル名リストのメンバーでユニットを構成できるかチェック
*/
function has_all_members(unit_name, idol_list){
	const unit_members = unit2members[unit_name];
	for (let unit_member of unit_members){
		if (idol_list.indexOf(unit_member) < 0) return false;
	}
	return true;
}
function find_units(text){

	const idols = text2idols(text);

	//ユニットの一覧に対して、ユニットの全メンバーがリストに含まれているかチェックする
	const unit_list = Object.keys(unit2members);
	let found_units = [];
	for (let test_unit of unit_list){
		if (has_all_members(test_unit, idols)){
			found_units.push(test_unit);
		}
	}

	//見つかったユニットを出力
	let html = '';


	html += '<h2 class="h4">ユニット名一覧</h2>'
	html += '<ol>';
	for (let found_unit of found_units){
		
		html += `<li>${found_unit}(${unit2members[found_unit].join(', ')})</li>`;
	}
	html += '</ol>';

	
	html += '<h2 class="h4">アイドル名一覧</h2>';
	html += '<ol>';
	for (let idol of idols){
		html += `<li>${idol}</li>`;
	}
	html += '</ol>';


	document.getElementById('results').innerHTML = html;

}

function init(){
	//find_units();
	//console.log(unit2members);
}
window.onload = function(){
	init();
}