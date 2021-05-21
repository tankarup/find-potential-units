/*
SELECT distinct ?label ?cv ?s
WHERE {
 ?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Idol>.
 ?s <http://www.w3.org/2000/01/rdf-schema#label> ?label.
 ?s <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#cv> ?cv.
}
*/
const sparql_idols = {
	"head": {
	  "vars": [ "label" , "cv" , "s" ]
	} ,
	"results": {
	  "bindings": [
		{
		  "label": { "type": "literal" , "value": "双葉杏" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/五十嵐裕美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双葉杏" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "五十嵐裕美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双葉杏" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q5770504" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "相葉夕美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18048266" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "相葉夕美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/木村珠莉" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "相葉夕美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "木村珠莉" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "村上巴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "花井美春" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "label": { "type": "literal" , "value": "村上巴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q44395473" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "label": { "type": "literal" , "value": "東豪寺麗華" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q843178" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togoji_Reika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "東豪寺麗華" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "今野宏美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togoji_Reika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "東豪寺麗華" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/今野宏美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togoji_Reika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "浜口あやめ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/田澤茉純" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "label": { "type": "literal" , "value": "浜口あやめ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田澤茉純" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "label": { "type": "literal" , "value": "浜口あやめ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18048349" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "label": { "type": "literal" , "value": "一ノ瀬志希" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/藍原ことみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "一ノ瀬志希" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24875182" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "一ノ瀬志希" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "藍原ことみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "華村翔真" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "バレッタ裕" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hanamura_Shoma" }
		} ,
		{
		  "label": { "type": "literal" , "value": "華村翔真" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/バレッタ裕" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hanamura_Shoma" }
		} ,
		{
		  "label": { "type": "literal" , "value": "華村翔真" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24865667" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hanamura_Shoma" }
		} ,
		{
		  "label": { "type": "literal" , "value": "結城晴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "小市眞琴" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "結城晴" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/小市眞琴" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "結城晴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20039931" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "萩原雪歩" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q8191313" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "萩原雪歩" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "浅倉杏美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "萩原雪歩" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/浅倉杏美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "市川雛菜" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "岡咲美保" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichikawa_Hinana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "市川雛菜" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q51676463" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichikawa_Hinana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "幽谷霧子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/結名美月" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yukoku_Kiriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "幽谷霧子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "結名美月" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yukoku_Kiriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "幽谷霧子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17225022" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yukoku_Kiriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "有栖川夏葉" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "涼本あきほ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Arisugawa_Natsuha" }
		} ,
		{
		  "label": { "type": "literal" , "value": "有栖川夏葉" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q43426885" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Arisugawa_Natsuha" }
		} ,
		{
		  "label": { "type": "literal" , "value": "永吉昴" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/斉藤佑圭" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "永吉昴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "斉藤佑圭" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "永吉昴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1064842" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大崎甘奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "黒木ほの香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Amana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大崎甘奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q30929032" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Amana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木村龍" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/濱健人" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Ryu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木村龍" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20042322" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Ryu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木村龍" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "濱健人" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Ryu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "関裕美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "会沢紗弥" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "関裕美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q41585491" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "早坂美玲" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/朝井彩加" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "早坂美玲" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17685820" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "早坂美玲" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "朝井彩加" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "冬美旬" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/永塚拓馬" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fuyumi_Jun" }
		} ,
		{
		  "label": { "type": "literal" , "value": "冬美旬" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "永塚拓馬" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fuyumi_Jun" }
		} ,
		{
		  "label": { "type": "literal" , "value": "冬美旬" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20760484" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fuyumi_Jun" }
		} ,
		{
		  "label": { "type": "literal" , "value": "本田未央" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q333320" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "本田未央" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/原紗友里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "本田未央" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "原紗友里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木下ひなた" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11576902" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木下ひなた" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/田村奈央" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木下ひなた" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田村奈央" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "label": { "type": "literal" , "value": "星輝子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17230362" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "星輝子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/松田颯水" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "星輝子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "松田颯水" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "清澄九郎" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/中田祐矢" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiyosumi_Kuro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "清澄九郎" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11366741" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiyosumi_Kuro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "清澄九郎" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "中田祐矢" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiyosumi_Kuro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "卯月巻緒" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/児玉卓也" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Uzuki_Makio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "卯月巻緒" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24865377" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Uzuki_Makio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "卯月巻緒" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "児玉卓也" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Uzuki_Makio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桑山千雪" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20040525" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuwayama_Chiyuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桑山千雪" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/芝崎典子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuwayama_Chiyuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桑山千雪" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "芝崎典子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuwayama_Chiyuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊吹翼" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "Machico" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊吹翼" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/Machico" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊吹翼" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11232628" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白石紬" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "南早紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白石紬" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/南早紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白石紬" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q28690521" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ジュリア" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11457880" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ジュリア" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "愛美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ジュリア" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/愛美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "道明寺歌鈴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17212219" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "道明寺歌鈴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "新田ひより" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "道明寺歌鈴" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/新田ひより" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "信玄誠司" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/増元拓也" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shingen_Seiji" }
		} ,
		{
		  "label": { "type": "literal" , "value": "信玄誠司" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17230347" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shingen_Seiji" }
		} ,
		{
		  "label": { "type": "literal" , "value": "信玄誠司" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "増元拓也" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shingen_Seiji" }
		} ,
		{
		  "label": { "type": "literal" , "value": "宮尾美也" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "桐谷蝶々" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "宮尾美也" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/桐谷蝶々" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "宮尾美也" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17157954" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "和泉愛依" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1050949" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Izumi_Mei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "和泉愛依" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/北原沙弥香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Izumi_Mei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "和泉愛依" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "北原沙弥香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Izumi_Mei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水谷絵理" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/花澤香菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水谷絵理" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q49524" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水谷絵理" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "花澤香菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三峰結華" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q56886205" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitsumine_Yuika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三峰結華" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "成海瑠奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitsumine_Yuika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "依田芳乃" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q22125278" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "label": { "type": "literal" , "value": "依田芳乃" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/高田憂希" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "label": { "type": "literal" , "value": "依田芳乃" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "高田憂希" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "label": { "type": "literal" , "value": "野々原茜" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/小笠原早紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "野々原茜" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "小笠原早紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "野々原茜" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11463365" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "砂塚あきら" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "富田美憂" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sunazuka_Akira" }
		} ,
		{
		  "label": { "type": "literal" , "value": "砂塚あきら" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/富田美憂" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sunazuka_Akira" }
		} ,
		{
		  "label": { "type": "literal" , "value": "砂塚あきら" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q22131362" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sunazuka_Akira" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜守歌織" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q30932235" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜守歌織" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "香里有佐" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "舞浜歩" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/戸田めぐみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "舞浜歩" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16003597" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "舞浜歩" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "戸田めぐみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神崎蘭子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q44552" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神崎蘭子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "内田真礼" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神崎蘭子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/内田真礼" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊集院北斗" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/神原大地" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Hokuto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊集院北斗" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "神原大地" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Hokuto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊集院北斗" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q8977305" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Hokuto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黒埼ちとせ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11383006" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurosaki_Chitose" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黒埼ちとせ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "佐倉薫" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurosaki_Chitose" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黒埼ちとせ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/佐倉薫" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurosaki_Chitose" }
		} ,
		{
		  "label": { "type": "literal" , "value": "岡村直央" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24897980" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okamura_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "岡村直央" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "矢野奨吾" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okamura_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "岡村直央" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/矢野奨吾" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okamura_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "東雲荘一郎" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/天崎滉平" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinonome_Soichiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "東雲荘一郎" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20038507" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinonome_Soichiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "東雲荘一郎" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "天崎滉平" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinonome_Soichiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "田中摩美々" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q48765622" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Mamimi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "田中摩美々" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "菅沼千紗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Mamimi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "田中摩美々" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/菅沼千紗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Mamimi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "百瀬莉緒" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山口立花子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "百瀬莉緒" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11467404" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "百瀬莉緒" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/山口立花子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "五十嵐響子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "種崎敦美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "五十嵐響子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/種崎敦美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "五十嵐響子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q3183413" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "市原仁奈" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/久野美咲" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "市原仁奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "久野美咲" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "市原仁奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11369771" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天海春香" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q911795" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天海春香" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/中村繪里子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天海春香" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "中村繪里子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "藤原肇" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q22129371" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "label": { "type": "literal" , "value": "藤原肇" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "鈴木みのり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "label": { "type": "literal" , "value": "藤原肇" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/鈴木みのり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大崎甜花" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/前川涼子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Tenka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大崎甜花" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "前川涼子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Tenka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大崎甜花" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24820042" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Tenka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "新田美波" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/洲崎綾" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "新田美波" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q888218" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "新田美波" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "洲崎綾" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "櫻井桃華" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11567752" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "櫻井桃華" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/照井春佳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "櫻井桃華" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "照井春佳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "七尾百合子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "伊藤美来" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "七尾百合子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16264202" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "七尾百合子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/伊藤美来" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神谷奈緒" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11529115" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神谷奈緒" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "松井恵理子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神谷奈緒" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/松井恵理子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黛冬優子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "幸村恵理" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mayuzumi_Fuyuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黛冬優子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q59141816" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mayuzumi_Fuyuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "緒方智絵里" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/大空直美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "緒方智絵里" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "大空直美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "緒方智絵里" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q15731362" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "輿水幸子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1204576" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "輿水幸子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/竹達彩奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "輿水幸子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "竹達彩奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "葛之葉雨彦" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "笠間淳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuzunoha_Amehiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "葛之葉雨彦" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/笠間淳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuzunoha_Amehiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "葛之葉雨彦" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27150536" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuzunoha_Amehiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高山紗代子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "駒形友梨" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高山紗代子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/駒形友梨" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高山紗代子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11668361" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北条加蓮" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "渕上舞" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北条加蓮" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/渕上舞" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北条加蓮" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q9307208" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黒野玄武" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "深町寿成" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurono_Genbu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黒野玄武" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/深町寿成" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurono_Genbu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "黒野玄武" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17230037" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurono_Genbu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "所恵美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11622668" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "所恵美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/藤井ゆきよ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "所恵美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "藤井ゆきよ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "南条光" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "神谷早矢佳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "南条光" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q60296629" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "斑鳩ルカ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/川口莉奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikaruga_Luca" }
		} ,
		{
		  "label": { "type": "literal" , "value": "斑鳩ルカ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q106152263" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikaruga_Luca" }
		} ,
		{
		  "label": { "type": "literal" , "value": "斑鳩ルカ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "川口莉奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikaruga_Luca" }
		} ,
		{
		  "label": { "type": "literal" , "value": "春日未来" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山崎はるか" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "label": { "type": "literal" , "value": "春日未来" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/山崎はるか" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "label": { "type": "literal" , "value": "春日未来" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1661535" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "label": { "type": "literal" , "value": "中野有香" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17159583" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "中野有香" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/下地紫野" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "中野有香" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "下地紫野" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "風野灯織" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/近藤玲奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "風野灯織" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27151126" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "風野灯織" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "近藤玲奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "円城寺道流" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "濱野大輝" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Enjoji_Michiru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "円城寺道流" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/濱野大輝" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Enjoji_Michiru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "円城寺道流" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20042330" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Enjoji_Michiru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北上麗花" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11482546" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北上麗花" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/平山笑美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北上麗花" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "平山笑美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神谷幸広" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "狩野翔" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Yukihiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神谷幸広" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/狩野翔" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Yukihiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神谷幸広" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17686378" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Yukihiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐々木千枝" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q8972760" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐々木千枝" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/今井麻夏" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐々木千枝" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "今井麻夏" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "label": { "type": "literal" , "value": "若里春名" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "白井悠介" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakazato_Haruna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "若里春名" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/白井悠介" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakazato_Haruna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "若里春名" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11579372" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakazato_Haruna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "アナスタシア" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q874605" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "アナスタシア" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/上坂すみれ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "アナスタシア" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "上坂すみれ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷺沢文香" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "Ｍ・Ａ・Ｏ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷺沢文香" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1186964" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷺沢文香" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/市道真央" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "前川みく" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/高森奈津美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "前川みく" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1107456" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "前川みく" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "高森奈津美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水本ゆかり" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17211589" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水本ゆかり" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/藤田茜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水本ゆかり" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "藤田茜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "周防桃子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/渡部恵子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "周防桃子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "渡部恵子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "周防桃子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17217372" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐竹美奈子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16264714" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐竹美奈子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "大関英里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐竹美奈子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/大関英里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "アスラン=BBⅡ世" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11411149" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asselin_BB_2" }
		} ,
		{
		  "label": { "type": "literal" , "value": "アスラン=BBⅡ世" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/古川慎" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asselin_BB_2" }
		} ,
		{
		  "label": { "type": "literal" , "value": "アスラン=BBⅡ世" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "古川慎" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asselin_BB_2" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白菊ほたる" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "天野聡美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白菊ほたる" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/天野聡美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白菊ほたる" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q62023684" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "西城樹里" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q62024310" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saijo_Juri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "西城樹里" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "永井真里子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saijo_Juri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "都築圭" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "土岐隼一" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuzuki_Kei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "都築圭" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18457703" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuzuki_Kei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "都築圭" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/土岐隼一" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuzuki_Kei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "中谷育" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "原嶋あかり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "中谷育" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/原嶋あかり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "中谷育" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11409597" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "的場梨沙" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "集貝はな" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "箱崎星梨花" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "麻倉もも" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "箱崎星梨花" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/麻倉もも" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "箱崎星梨花" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16263653" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "乙倉悠貴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "中島由貴" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "乙倉悠貴" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/中島由貴" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "乙倉悠貴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q22123863" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "横山奈緒" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "渡部優衣" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "横山奈緒" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11562757" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "横山奈緒" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/渡部優衣" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白瀬咲耶" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "八巻アンナ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirase_Sakuya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白瀬咲耶" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q56059704" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirase_Sakuya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "紅井朱雀" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/益山武明" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akai_Suzaku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "紅井朱雀" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17222626" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akai_Suzaku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "紅井朱雀" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "益山武明" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akai_Suzaku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "棟方愛海" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q56118632" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "棟方愛海" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "藤本彩花" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "七草にちか" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "紫月杏朱彩" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanakusa_Nichika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "安部菜々" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "三宅麻理恵" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "安部菜々" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/三宅麻理恵" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "安部菜々" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q6127820" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "月岡恋鐘" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "礒部花凜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukioka_Kogane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "月岡恋鐘" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/礒部花凜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukioka_Kogane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "月岡恋鐘" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18990383" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukioka_Kogane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "松田亜利沙" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "村川梨衣" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "松田亜利沙" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q2811985" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "松田亜利沙" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/村川梨衣" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "上条春菜" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20041809" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "上条春菜" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "長島光那" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "上条春菜" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/長島光那" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "堀裕子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "鈴木絵理" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "堀裕子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17160003" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "堀裕子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/鈴木絵理" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "星井美希" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q901104" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "星井美希" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/長谷川明子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "星井美希" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "長谷川明子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "舞田類" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "榎木淳弥" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maita_Rui" }
		} ,
		{
		  "label": { "type": "literal" , "value": "舞田類" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/榎木淳弥" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maita_Rui" }
		} ,
		{
		  "label": { "type": "literal" , "value": "舞田類" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16264591" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maita_Rui" }
		} ,
		{
		  "label": { "type": "literal" , "value": "辻野あかり" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "梅澤めぐ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsujino_Akari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "四条貴音" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "原由実" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "四条貴音" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/原由実" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "四条貴音" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q901521" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大槻唯" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17223371" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大槻唯" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山下七海" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大槻唯" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/山下七海" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "label": { "type": "literal" , "value": "八宮めぐる" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "峯田茉優" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hachimiya_Meguru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "八宮めぐる" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q48764554" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hachimiya_Meguru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "龍崎薫" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24875141" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "龍崎薫" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "春瀬なつみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "龍崎薫" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/春瀬なつみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "森久保乃々" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "高橋花林" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "label": { "type": "literal" , "value": "森久保乃々" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20041113" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "label": { "type": "literal" , "value": "森久保乃々" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/高橋花林" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "label": { "type": "literal" , "value": "我那覇響" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/沼倉愛美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "我那覇響" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q3844242" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "我那覇響" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "沼倉愛美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "渋谷凛" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "福原綾香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "渋谷凛" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11591879" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "渋谷凛" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/福原綾香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "向井拓海" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17221306" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "向井拓海" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/原優子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "向井拓海" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "原優子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "蒼井享介" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16746698" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Kyosuke" }
		} ,
		{
		  "label": { "type": "literal" , "value": "蒼井享介" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山谷祥生" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Kyosuke" }
		} ,
		{
		  "label": { "type": "literal" , "value": "蒼井享介" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/山谷祥生" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Kyosuke" }
		} ,
		{
		  "label": { "type": "literal" , "value": "久川颯" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/長江里加" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Hayate" }
		} ,
		{
		  "label": { "type": "literal" , "value": "久川颯" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27150470" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Hayate" }
		} ,
		{
		  "label": { "type": "literal" , "value": "久川颯" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "長江里加" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Hayate" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐藤心" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/花守ゆみり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐藤心" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17219891" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐藤心" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "花守ゆみり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ナターリア" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q66736457" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ナターリア" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "生田輝" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "label": { "type": "literal" , "value": "豊川風花" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "末柄里恵" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "豊川風花" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/末柄里恵" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "豊川風花" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17159842" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月律子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q3870205" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月律子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "若林直美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月律子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/若林直美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "塩見周子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/ルゥ・ティン" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "塩見周子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "ルゥ・ティン" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "塩見周子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24869202" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小日向美穂" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/津田美波" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小日向美穂" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "津田美波" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小日向美穂" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q901835" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "園田智代子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "白石晴香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sonoda_Chiyoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "園田智代子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/白石晴香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sonoda_Chiyoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "園田智代子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17993659" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sonoda_Chiyoko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小宮果穂" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q43427019" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komiya_Kaho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小宮果穂" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "河野ひより" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komiya_Kaho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高坂海美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/上田麗奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高坂海美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16264425" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高坂海美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "上田麗奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜井夢子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "矢作紗友里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Yumeko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜井夢子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1193033" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Yumeko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜井夢子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/矢作紗友里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Yumeko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "橘ありす" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "佐藤亜美菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "橘ありす" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/佐藤亜美菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "橘ありす" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1150583" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高森藍子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/金子有希" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高森藍子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q4358562" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高森藍子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "金子有希" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "浅倉透" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "和久井優" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asakura_Toru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "浅倉透" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q23948953" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asakura_Toru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "浅倉透" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/和久井優" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asakura_Toru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北沢志保" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "雨宮天" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北沢志保" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/雨宮天" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北沢志保" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q14635194" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小早川紗枝" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "立花理香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小早川紗枝" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q9046310" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小早川紗枝" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/立花理香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋山隼人" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "千葉翔也" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akiyama_Hayato" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋山隼人" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/千葉翔也" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akiyama_Hayato" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋山隼人" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11406719" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akiyama_Hayato" }
		} ,
		{
		  "label": { "type": "literal" , "value": "山下次郎" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/中島ヨシキ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamashita_Jiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "山下次郎" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11364383" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamashita_Jiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "山下次郎" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "中島ヨシキ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamashita_Jiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大河タケル" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17161534" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Taiga_Takeru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大河タケル" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/寺島惇太" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Taiga_Takeru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大河タケル" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "寺島惇太" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Taiga_Takeru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "城ヶ崎莉嘉" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山本希望" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "城ヶ崎莉嘉" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q9080262" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "城ヶ崎莉嘉" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/山本希望" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天ヶ瀬冬馬" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "寺島拓篤" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amagase_Toma" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天ヶ瀬冬馬" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/寺島拓篤" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amagase_Toma" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天ヶ瀬冬馬" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1041912" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amagase_Toma" }
		} ,
		{
		  "label": { "type": "literal" , "value": "矢吹可奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "木戸衣吹" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "矢吹可奈" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/木戸衣吹" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "矢吹可奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q2276072" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "label": { "type": "literal" , "value": "奥空心白" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田中あいみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuzora_Kohaku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "奥空心白" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17160813" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuzora_Kohaku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "奥空心白" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/田中あいみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuzora_Kohaku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "橘志狼" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/古畑恵介" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Shiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "橘志狼" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "古畑恵介" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Shiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "橘志狼" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27150521" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Shiro" }
		} ,
		{
		  "label": { "type": "literal" , "value": "夢見りあむ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q35172322" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yumemi_Riamu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "夢見りあむ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "星希成奏" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yumemi_Riamu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "真壁瑞希" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16263736" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "真壁瑞希" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "阿部里果" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "真壁瑞希" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/阿部里果" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木村夏樹" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11451654" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木村夏樹" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "安野希世乃" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "木村夏樹" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/安野希世乃" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "榊夏来" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17217594" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakaki_Natsuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "榊夏来" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/渡辺紘" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakaki_Natsuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "榊夏来" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "渡辺紘" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakaki_Natsuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "握野英雄" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "熊谷健太郎" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akuno_Hideo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "握野英雄" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/熊谷健太郎" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akuno_Hideo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "握野英雄" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24865804" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akuno_Hideo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "宮本フレデリカ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/髙野麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "label": { "type": "literal" , "value": "宮本フレデリカ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "髙野麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "label": { "type": "literal" , "value": "宮本フレデリカ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q62024404" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "label": { "type": "literal" , "value": "杜野凛世" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q56702852" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morino_Rinze" }
		} ,
		{
		  "label": { "type": "literal" , "value": "杜野凛世" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "丸岡和佳奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morino_Rinze" }
		} ,
		{
		  "label": { "type": "literal" , "value": "樋口円香" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "土屋李央" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Higuchi_Madoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "樋口円香" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q67821352" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Higuchi_Madoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "最上静香" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田所あずさ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "最上静香" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/田所あずさ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "最上静香" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q247629" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "徳川まつり" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/諏訪彩花" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "徳川まつり" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11631872" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "徳川まつり" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "諏訪彩花" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "label": { "type": "literal" , "value": "御手洗翔太" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/松岡禎丞" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitarai_Shota" }
		} ,
		{
		  "label": { "type": "literal" , "value": "御手洗翔太" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q957795" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitarai_Shota" }
		} ,
		{
		  "label": { "type": "literal" , "value": "御手洗翔太" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "松岡禎丞" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitarai_Shota" }
		} ,
		{
		  "label": { "type": "literal" , "value": "硲道夫" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/伊東健人" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hazama_Michio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "硲道夫" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16264168" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hazama_Michio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "硲道夫" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "伊東健人" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hazama_Michio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桐生つかさ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/河瀬茉希" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桐生つかさ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "河瀬茉希" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桐生つかさ" } ,
		  "cv": { "type": "uri" , "value": "https://www.wikidata.org/wiki/Q24867153" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "松永涼" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q6356324" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "松永涼" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/千菅春香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "松永涼" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "千菅春香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "島原エレナ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16265138" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "label": { "type": "literal" , "value": "島原エレナ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "角元明日香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "label": { "type": "literal" , "value": "島原エレナ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/角元明日香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "label": { "type": "literal" , "value": "篠宮可憐" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/近藤唯" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "label": { "type": "literal" , "value": "篠宮可憐" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "近藤唯" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "label": { "type": "literal" , "value": "篠宮可憐" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11638757" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "label": { "type": "literal" , "value": "椎名法子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17161754" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "椎名法子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/都丸ちよ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "椎名法子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "都丸ちよ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "速水奏" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11666486" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "label": { "type": "literal" , "value": "速水奏" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "飯田友子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "label": { "type": "literal" , "value": "速水奏" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/飯田友子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "label": { "type": "literal" , "value": "城ヶ崎美嘉" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "佳村はるか" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "城ヶ崎美嘉" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/佳村はるか" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "城ヶ崎美嘉" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11385438" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小関麗奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q30108577" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "小関麗奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "長野佑紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊瀬谷四季" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18460273" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Iseya_Shiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊瀬谷四季" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/野上翔" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Iseya_Shiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "伊瀬谷四季" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "野上翔" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Iseya_Shiki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "芹沢あさひ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田中有紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Serizawa_Asahi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "芹沢あさひ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/田中有紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Serizawa_Asahi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "芹沢あさひ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q62078438" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Serizawa_Asahi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天空橋朋花" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/小岩井ことり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天空橋朋花" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11460022" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天空橋朋花" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "小岩井ことり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "田中琴葉" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "種田梨沙" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "label": { "type": "literal" , "value": "田中琴葉" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/種田梨沙" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "label": { "type": "literal" , "value": "田中琴葉" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q130125" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷹富士茄子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "森下来奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷹富士茄子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/森下来奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷹富士茄子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q55875405" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q958874" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/三瓶由布子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "三瓶由布子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷹城恭二" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18225739" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takajo_Kyoji" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷹城恭二" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/梅原裕一郎" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takajo_Kyoji" }
		} ,
		{
		  "label": { "type": "literal" , "value": "鷹城恭二" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "梅原裕一郎" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takajo_Kyoji" }
		} ,
		{
		  "label": { "type": "literal" , "value": "猫柳キリオ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/山下大輝" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nekoyanagi_Kirio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "猫柳キリオ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山下大輝" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nekoyanagi_Kirio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "猫柳キリオ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q15975368" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nekoyanagi_Kirio" }
		} ,
		{
		  "label": { "type": "literal" , "value": "牙崎漣" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/小松昌平" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kizaki_Ren" }
		} ,
		{
		  "label": { "type": "literal" , "value": "牙崎漣" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24877064" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kizaki_Ren" }
		} ,
		{
		  "label": { "type": "literal" , "value": "牙崎漣" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "小松昌平" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kizaki_Ren" }
		} ,
		{
		  "label": { "type": "literal" , "value": "菊地真" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "平田宏美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "菊地真" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q224847" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "菊地真" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/平田宏美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "緋田美琴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "山根綺" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aketa_Mikoto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "緋田美琴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q57314549" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aketa_Mikoto" }
		} ,
		{
		  "label": { "type": "literal" , "value": "櫻木真乃" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q52319813" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuragi_Mano" }
		} ,
		{
		  "label": { "type": "literal" , "value": "櫻木真乃" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "関根瞳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuragi_Mano" }
		} ,
		{
		  "label": { "type": "literal" , "value": "片桐早苗" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "和氣あず未" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "label": { "type": "literal" , "value": "片桐早苗" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/和氣あず未" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "label": { "type": "literal" , "value": "片桐早苗" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q23948485" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "label": { "type": "literal" , "value": "十時愛梨" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/原田ひとみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "十時愛梨" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "原田ひとみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "十時愛梨" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1046994" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "喜多見柚" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "武田羅梨沙多胡" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "喜多見柚" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q40039788" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "荒木比奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田辺留依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "荒木比奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16336231" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "荒木比奈" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/田辺留依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "エミリー" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/郁原ゆう" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "label": { "type": "literal" , "value": "エミリー" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17349881" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "label": { "type": "literal" , "value": "エミリー" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "郁原ゆう" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜庭薫" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/内田雄馬" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuraba_Kaoru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜庭薫" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "内田雄馬" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuraba_Kaoru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "桜庭薫" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17349748" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuraba_Kaoru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水瀬伊織" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/釘宮理恵" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水瀬伊織" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q49554" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水瀬伊織" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "釘宮理恵" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "渡辺みのり" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q21019125" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Watanabe_Minori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "渡辺みのり" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "高塚智人" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Watanabe_Minori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "渡辺みのり" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/高塚智人" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Watanabe_Minori" }
		} ,
		{
		  "label": { "type": "literal" , "value": "朝比奈りん" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "阿澄佳奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asahina_Rin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "朝比奈りん" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q49474" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asahina_Rin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "朝比奈りん" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/阿澄佳奈" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asahina_Rin" }
		} ,
		{
		  "label": { "type": "literal" , "value": "玲音" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "茅原実里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Leon" }
		} ,
		{
		  "label": { "type": "literal" , "value": "玲音" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/茅原実里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Leon" }
		} ,
		{
		  "label": { "type": "literal" , "value": "玲音" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q256910" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Leon" }
		} ,
		{
		  "label": { "type": "literal" , "value": "姫野かのん" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "村瀬歩" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himeno_Kanon" }
		} ,
		{
		  "label": { "type": "literal" , "value": "姫野かのん" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/村瀬歩" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himeno_Kanon" }
		} ,
		{
		  "label": { "type": "literal" , "value": "姫野かのん" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11523377" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himeno_Kanon" }
		} ,
		{
		  "label": { "type": "literal" , "value": "如月千早" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "今井麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "如月千早" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/今井麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "如月千早" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1042804" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "label": { "type": "literal" , "value": "姫川友紀" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/杜野まこ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "姫川友紀" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11523609" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "姫川友紀" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "杜野まこ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "及川雫" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/のぐちゆり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "及川雫" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q28690535" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "及川雫" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "のぐちゆり" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双海亜美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/下田麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双海亜美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1070511" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双海亜美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "下田麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "サイネリア" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/ゆりん" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzuki_Ayane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "サイネリア" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q8061678" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzuki_Ayane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "サイネリア" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "ゆりん" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzuki_Ayane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高槻やよい" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1096256" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高槻やよい" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "仁後真耶子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高槻やよい" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/仁後真耶子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天道輝" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/仲村宗悟" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tendo_Teru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天道輝" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "仲村宗悟" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tendo_Teru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "天道輝" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q22125229" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tendo_Teru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "脇山珠美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "嘉山未紗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "脇山珠美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18701078" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "脇山珠美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/嘉山未紗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐久間まゆ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1372615" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐久間まゆ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "牧野由依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐久間まゆ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/牧野由依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "福丸小糸" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "田嶌紗蘭" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukumaru_Koito" }
		} ,
		{
		  "label": { "type": "literal" , "value": "福丸小糸" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q88349126" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukumaru_Koito" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三村かな子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/大坪由佳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三村かな子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "大坪由佳" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三村かな子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q3211762" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "九十九一希" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "比留間俊哉" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukumo_Kazuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "九十九一希" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/比留間俊哉" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukumo_Kazuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "九十九一希" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q48749453" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukumo_Kazuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "望月杏奈" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/夏川椎菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "望月杏奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17226876" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "望月杏奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "夏川椎菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "label": { "type": "literal" , "value": "久川凪" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "立花日菜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Nagi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "赤城みりあ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "黒沢ともよ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "label": { "type": "literal" , "value": "赤城みりあ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1955926" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "label": { "type": "literal" , "value": "赤城みりあ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/黒沢ともよ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双海真美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1070511" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双海真美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "下田麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "双海真美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/下田麻美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "label": { "type": "literal" , "value": "福田のり子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "浜崎奈々" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "福田のり子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/浜崎奈々" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "福田のり子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11557669" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "label": { "type": "literal" , "value": "古論クリス" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/駒田航" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koron_Chris" }
		} ,
		{
		  "label": { "type": "literal" , "value": "古論クリス" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "駒田航" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koron_Chris" }
		} ,
		{
		  "label": { "type": "literal" , "value": "古論クリス" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20040112" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koron_Chris" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三船美優" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "原田彩楓" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三船美優" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27507360" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北村想楽" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27150533" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitamura_Sora" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北村想楽" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "汐谷文康" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitamura_Sora" }
		} ,
		{
		  "label": { "type": "literal" , "value": "北村想楽" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/汐谷文康" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitamura_Sora" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高垣楓" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "早見沙織" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高垣楓" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/早見沙織" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "label": { "type": "literal" , "value": "高垣楓" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1153079" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "label": { "type": "literal" , "value": "諸星きらり" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/松嵜麗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "諸星きらり" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q391799" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "諸星きらり" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "松嵜麗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白雪千夜" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "関口理咲" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirayuki_Chiyo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白雪千夜" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q62024487" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirayuki_Chiyo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "佐城雪美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "中澤ミナ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q958874" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_315" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/三瓶由布子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_315" }
		} ,
		{
		  "label": { "type": "literal" , "value": "秋月涼" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "三瓶由布子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_315" }
		} ,
		{
		  "label": { "type": "literal" , "value": "柏木翼" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/八代拓" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kashiwagi_Tsubasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "柏木翼" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "八代拓" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kashiwagi_Tsubasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "柏木翼" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q23846671" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kashiwagi_Tsubasa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ロコ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/中村温姫" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ロコ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q20041868" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ロコ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "中村温姫" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神楽麗" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "永野由祐" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kagura_Rei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "神楽麗" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q26043734" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kagura_Rei" }
		} ,
		{
		  "label": { "type": "literal" , "value": "難波笑美" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/伊達朱里紗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "難波笑美" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17160797" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "難波笑美" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "伊達朱里紗" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "二階堂千鶴" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "野村香菜子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "二階堂千鶴" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17215985" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "二階堂千鶴" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/野村香菜子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "label": { "type": "literal" , "value": "馬場このみ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/高橋未奈美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "馬場このみ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "髙橋ミナミ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "馬場このみ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q14756009" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白坂小梅" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "桜咲千依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白坂小梅" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q19653797" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "label": { "type": "literal" , "value": "白坂小梅" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/桜咲千依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "label": { "type": "literal" , "value": "二宮飛鳥" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "青木志貴" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "二宮飛鳥" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/青木志貴" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "二宮飛鳥" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q23948723" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "label": { "type": "literal" , "value": "藤本里奈" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/金子真由美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "藤本里奈" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "金子真由美" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "藤本里奈" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q41695472" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "蒼井悠介" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/菊池勇成" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Yusuke" }
		} ,
		{
		  "label": { "type": "literal" , "value": "蒼井悠介" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "菊池勇成" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Yusuke" }
		} ,
		{
		  "label": { "type": "literal" , "value": "蒼井悠介" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24865828" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Yusuke" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大神環" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "稲川英里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大神環" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q16264225" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大神環" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/稲川英里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水嶋咲" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/小林大紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizushima_Saki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水嶋咲" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24865397" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizushima_Saki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "水嶋咲" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "小林大紀" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizushima_Saki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "詩花" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17160610" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "詩花" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "高橋李依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "詩花" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/高橋李依" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shika" }
		} ,
		{
		  "label": { "type": "literal" , "value": "日高愛" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q50025" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hidaka_Ai" }
		} ,
		{
		  "label": { "type": "literal" , "value": "日高愛" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/戸松遥" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hidaka_Ai" }
		} ,
		{
		  "label": { "type": "literal" , "value": "日高愛" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "戸松遥" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hidaka_Ai" }
		} ,
		{
		  "label": { "type": "literal" , "value": "喜多日菜子" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "深川芹亜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "喜多日菜子" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/深川芹亜" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "喜多日菜子" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q17209690" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三浦あずさ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q1149403" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三浦あずさ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/たかはし智秋" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三浦あずさ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "たかはし智秋" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "label": { "type": "literal" , "value": "島村卯月" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/大橋彩香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "島村卯月" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "大橋彩香" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "島村卯月" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q9125022" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三条ともみ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q256910" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sanjo_Tomomi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三条ともみ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "茅原実里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sanjo_Tomomi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "三条ともみ" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/茅原実里" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sanjo_Tomomi" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ピエール" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "堀江瞬" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Pierre" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ピエール" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q22129969" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Pierre" }
		} ,
		{
		  "label": { "type": "literal" , "value": "ピエール" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/堀江瞬" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Pierre" }
		} ,
		{
		  "label": { "type": "literal" , "value": "多田李衣菜" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/青木瑠璃子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "多田李衣菜" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11661791" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "多田李衣菜" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "青木瑠璃子" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "label": { "type": "literal" , "value": "兜大吾" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "浦尾岳大" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kabuto_Daigo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "兜大吾" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q27150535" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kabuto_Daigo" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大和亜季" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q11522955" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大和亜季" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/村中知" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "大和亜季" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "村中知" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "遊佐こずえ" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "花谷麻妃" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "label": { "type": "literal" , "value": "遊佐こずえ" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q24873835" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "label": { "type": "literal" , "value": "日野茜" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q5100189" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "日野茜" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "赤﨑千夏" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "日野茜" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/赤﨑千夏" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "label": { "type": "literal" , "value": "上田鈴帆" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/春野ななみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "上田鈴帆" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "春野ななみ" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "上田鈴帆" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q18818006" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "label": { "type": "literal" , "value": "川島瑞樹" } ,
		  "cv": { "type": "uri" , "value": "http://www.wikidata.org/entity/Q865906" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "川島瑞樹" } ,
		  "cv": { "type": "uri" , "value": "http://ja.dbpedia.org/resource/東山奈央" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "label": { "type": "literal" , "value": "川島瑞樹" } ,
		  "cv": { "type": "literal" , "xml:lang": "ja" , "value": "東山奈央" } ,
		  "s": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		}
	  ]
	}
  };

/*
声優名→アイドル名に変換する辞書
一人二役の下田の扱いが難しい
cv2idol = {
	東山奈央: 川島瑞樹,
	春野ななみ: 上田鈴帆,
}
*/
/*
URI→アイドル名に変換する辞書
uri2idol = {
	https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki : 川島瑞樹,
}
*/
let cv2idol = {}, uri2idol = {}, idol_names = [];
for (let item of sparql_idols.results.bindings){
	const cv = item.cv;
	if (cv['xml:lang']){
		cv2idol[cv.value] = item.label.value;
		uri2idol[item.s.value] = item.label.value;
		idol_names.push(item.label.value);
	}
}


/*
SELECT distinct ?unit ?member
WHERE {
 ?s <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#Unit>.
 ?s <http://www.w3.org/2000/01/rdf-schema#label> ?unit.
 ?s <http://schema.org/member> ?member.
}
*/

const sparql_units = {
	"head": {
	  "vars": [ "unit" , "member" ]
	} ,
	"results": {
	  "bindings": [
		{
		  "unit": { "type": "literal" , "value": "オリジナル・カラーズ feat. 和" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オリジナル・カラーズ feat. 和" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム山形" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム山形" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム山形" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女神たちの夏宴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女神たちの夏宴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女神たちの夏宴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジェスティック・ジュエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジェスティック・ジュエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジェスティック・ジュエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパイスダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパイスダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE虎牙道" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Taiga_Takeru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE虎牙道" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Enjoji_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE虎牙道" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kizaki_Ren" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイトビット・ワンダラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイトビット・ワンダラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイトビット・ワンダラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲くオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲くオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲くオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲くオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲くオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマー・チャーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマー・チャーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマー・チャーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "港町のお嬢様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "港町のお嬢様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "勝手知ったる古株使用人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "勝手知ったる古株使用人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "勝手知ったる古株使用人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラー服と調教鞭" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラー服と調教鞭" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "爆笑スマイリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "爆笑スマイリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "爆笑スマイリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クイーンズ・マジェスティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クイーンズ・マジェスティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クイーンズ・マジェスティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クイーンズ・マジェスティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クイーンズ・マジェスティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真奈美と時子の青春の日々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真奈美と時子の青春の日々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちくわみながら" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちくわみながら" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちくわみながら" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湧水の精霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湧水の精霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キバ師匠とかつての英雄" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キバ師匠とかつての英雄" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キバ師匠とかつての英雄" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒートアップ☆チアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒートアップ☆チアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒートアップ☆チアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！傘美人錦揃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！傘美人錦揃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！傘美人錦揃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラウドシャウトビーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラウドシャウトビーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラウドシャウトビーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魅力の歌い手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魅力の歌い手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魅力の歌い手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "W" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Yusuke" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "W" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aoi_Kyosuke" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクチェックスクール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクチェックスクール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクチェックスクール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モルフェウス・チルドレン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モルフェウス・チルドレン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モルフェウス・チルドレン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーヒーロー・サクラ＆フォーチュンヒーロー・トモ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーヒーロー・サクラ＆フォーチュンヒーロー・トモ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "暗黒三銃士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "暗黒三銃士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "暗黒三銃士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファニートラベラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファニートラベラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "高貴なる女王の楽の間" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "高貴なる女王の楽の間" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "高貴なる女王の楽の間" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桃源郷の夢姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桃源郷の夢姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桃源郷の夢姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SLEEPING BEAUTY" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SLEEPING BEAUTY" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SLEEPING BEAUTY" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バリスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バリスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダリングスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダリングスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダリングスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダリングスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春霞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春霞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春霞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春霞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春霞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディライトフル・ホリデー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディライトフル・ホリデー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディライトフル・ホリデー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンチェイン・シグナル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンチェイン・シグナル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンチェイン・シグナル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "三冠の姫達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "三冠の姫達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "三冠の姫達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "唄うウンディーネ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "唄うウンディーネ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超☆大掃除委員会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超☆大掃除委員会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超☆大掃除委員会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デア・アウローラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デア・アウローラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "天下の傾奇者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヤムヤム・チャーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヤムヤム・チャーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリー・ミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリー・ミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリー・ミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリー・ミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリー・ミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王ト魔界ノ使徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王ト魔界ノ使徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王ト魔界ノ使徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク華ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク華ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク華ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャパン・ワールド・ダンサブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャパン・ワールド・ダンサブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャパン・ワールド・ダンサブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクラム組んで闘えホームラン!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクラム組んで闘えホームラン!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクラム組んで闘えホームラン!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アートインフォール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アートインフォール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アートインフォール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・ド・ピーカン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・ド・ピーカン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・ド・ピーカン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・ド・ピーカン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・ド・ピーカン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリックガーデン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリックガーデン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Swing Girls" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Swing Girls" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マウンテンカントリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マウンテンカントリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マウンテンカントリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "砂海を渡る花の精" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "砂海を渡る花の精" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "砂海を渡る花の精" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お伽のトレジャーハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お伽のトレジャーハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お伽のトレジャーハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はっぴーえなじー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はっぴーえなじー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はっぴーえなじー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パジャマパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パジャマパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パジャマパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パジャマパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パジャマパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーションwith城ヶ崎美嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーションwith城ヶ崎美嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーションwith城ヶ崎美嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーションwith城ヶ崎美嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園軽音部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園軽音部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園軽音部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "囚われの令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "囚われの令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニューイヤースタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニューイヤースタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニューイヤースタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "UKスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "UKスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "UKスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "UKスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンドロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンドロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンドロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーンブリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーンブリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーンブリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "礼と千奈美のフェアレディレッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "礼と千奈美のフェアレディレッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "礼と千奈美のフェアレディレッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "加加阿浪漫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "加加阿浪漫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "加加阿浪漫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダブルエース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダブルエース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "のんびり町娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "のんびり町娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女帝フェイフェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルーナフロース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルーナフロース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルーナフロース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗チーム・カインドハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗チーム・カインドハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のメイド姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のメイド姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hachimiya_Meguru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Arisugawa_Natsuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saijo_Juri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichikawa_Hinana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuwayama_Chiyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirase_Sakuya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asakura_Toru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Sol" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mayuzumi_Fuyuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "善良なサンタクロース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリタニア親善使節" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリタニア親善使節" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリタニア親善使節" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏祭りのお色気大作戦♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏祭りのお色気大作戦♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏祭りのお色気大作戦♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "la Roseraie" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "la Roseraie" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "la Roseraie" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "la Roseraie" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "la Roseraie" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリアサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリアサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリアサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリアサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花道乱舞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花道乱舞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花道乱舞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディープブルー・デビリッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディープブルー・デビリッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディープブルー・デビリッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フランメ・ルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フランメ・ルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フランメ・ルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "道を説く者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "道を説く者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランプ兵～スペード～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランプ兵～スペード～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホワイトネイビー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホワイトネイビー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダイヤモンドダイバー◇" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダイヤモンドダイバー◇" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダイヤモンドダイバー◇" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "清風明月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "清風明月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キング・オブ・ロックハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンドデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンドデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンドデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンドデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンドデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワスウィーティーなボクはぁと(仮)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワスウィーティーなボクはぁと(仮)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Dance for Dreams" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Dance for Dreams" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Dance for Dreams" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルフレンズ '17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルフレンズ '17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルフレンズ '17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルフレンズ '17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "捕虜お姉さんとイケナイ監視官" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "捕虜お姉さんとイケナイ監視官" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷちっとナイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷちっとナイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷちっとナイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タウラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タウラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タウラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハウリングデザイア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハウリングデザイア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "DLFオマツリ・トライアングル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "DLFオマツリ・トライアングル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "DLFオマツリ・トライアングル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "伊達政宗" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももぺあ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももぺあ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.R.S.(Love-Rock-Songs)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.R.S.(Love-Rock-Songs)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Xs" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Xs" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Xs" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Xs" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅剣士と剣闘士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅剣士と剣闘士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もりくぼぱーりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もりくぼぱーりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もりくぼぱーりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もりくぼぱーりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "洞窟の小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "洞窟の小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "洞窟の小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Love Yell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Love Yell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Love Yell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Love Yell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Love Yell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュフルーティーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュフルーティーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィルゴ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィルゴ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィルゴ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イノセント・アニマ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イノセント・アニマ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イノセント・アニマ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロワ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロワ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロワ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TRICK&TREAT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TRICK&TREAT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・デュオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・デュオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "こどもの日 ～大人の場合～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "こどもの日 ～大人の場合～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "こどもの日 ～大人の場合～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイバーグラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイバーグラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キルシュ with 凛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キルシュ with 凛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キルシュ with 凛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "19フォーチュンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "19フォーチュンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウルフェン☆ハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウルフェン☆ハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Cleasky" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Cleasky" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジューシーフルーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジューシーフルーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジューシーフルーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もふもふえん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okamura_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もふもふえん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Shiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もふもふえん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himeno_Kanon" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "悪の女幹部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "悪の女幹部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "街に住む令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "街に住む令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミニナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "古の守護神と踊り子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "古の守護神と踊り子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京都親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京都親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京都親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビビッドカラーエイジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビビッドカラーエイジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビビッドカラーエイジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルサマー 千秋・洋子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルサマー 千秋・洋子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももなおちゃ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももなおちゃ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももなおちゃ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大泥棒・ヒカル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライブドライブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライブドライブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お城のパティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お城のパティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お城のパティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お城のパティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界のフルーツ農園" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界のフルーツ農園" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！アメノウズメの娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！アメノウズメの娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！アメノウズメの娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋内運動部連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋内運動部連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋内運動部連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "陽気なケセランパサラン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "陽気なケセランパサラン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクストニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "テーマパーク'13" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "テーマパーク'13" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "テーマパーク'13" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗・リサ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトブルーレザー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトブルーレザー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の音楽公演" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の音楽公演" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トラスト × スチュワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トラスト × スチュワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765ProAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイランド・スプリングス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイランド・スプリングス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイランド・スプリングス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアウェル × スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアウェル × スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアウェル × スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアウェル × スノゥメモリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルカーニバル！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルカーニバル！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルカーニバル！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルカーニバル！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルカーニバル！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "長屋の娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "長屋の娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナツキ・ロイバー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マキノ先生のお勉強タイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マキノ先生のお勉強タイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マキノ先生のお勉強タイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BlueMoon Harmony" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すまいるはっぴーもんすたー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すまいるはっぴーもんすたー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "星纏天女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "星纏天女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "thinE/Dasein" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "thinE/Dasein" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "thinE/Dasein" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のならず者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のならず者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルスタディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルスタディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルスタディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うたかた☆ふらわーず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うたかた☆ふらわーず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クライマー・クライマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クライマー・クライマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピー・ハズ・カム☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピー・ハズ・カム☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピー・ハズ・カム☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユーレイバスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユーレイバスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユーレイバスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超ゆかころころ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超ゆかころころ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超ゆかころころ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢色パレット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢色パレット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "kNiGHT of WALPURGiS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "kNiGHT of WALPURGiS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "kNiGHT of WALPURGiS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うっかりハイキング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うっかりハイキング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うっかりハイキング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いきなり☆ファッションショー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いきなり☆ファッションショー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いきなり☆ファッションショー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いきなり☆ファッションショー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シックステール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シックステール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シックステール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お菓子大好きこどもクラブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お菓子大好きこどもクラブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お菓子大好きこどもクラブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "虹色ドリーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "虹色ドリーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "虹色ドリーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギャルズ(?)プレゼント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギャルズ(?)プレゼント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギャルズ(?)プレゼント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレイン＆バニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレイン＆バニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エゴイスティック・セーラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エゴイスティック・セーラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "るーむ・ますたーず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "るーむ・ますたーず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "るーむ・ますたーず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SSMI-Dance!2017" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SSMI-Dance!2017" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SSMI-Dance!2017" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "白の宮廷" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "白の宮廷" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "白の宮廷" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリープレゼント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリープレゼント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリープレゼント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブパッション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブパッション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブパッション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルエンジェルス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルエンジェルス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルエンジェルス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパスパ・ジャパネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパスパ・ジャパネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパスパ・ジャパネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーフタイムチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーフタイムチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーフタイムチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーフタイムチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イージーノイジーライダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イージーノイジーライダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イージーノイジーライダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルヒーラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルヒーラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルヒーラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニングゴッドチェリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニングゴッドチェリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニングゴッドチェリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スペーススタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スペーススタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スペーススタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鬼が島親善大使?" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鬼が島親善大使?" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CAERULA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CAERULA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CAERULA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CAERULA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CAERULA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイレントスクリーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイレントスクリーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーダイナーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーダイナーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンセットノスタルジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンセットノスタルジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンセットノスタルジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももぺあべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももぺあべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももぺあべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル料理SHOW" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル料理SHOW" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル料理SHOW" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴはぴ☆2DAYSばーすでー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴはぴ☆2DAYSばーすでー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴはぴ☆2DAYSばーすでー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スーパー美食コンビ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スーパー美食コンビ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マッシブライダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マッシブライダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マッシブライダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "陽気で平和な町娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "陽気で平和な町娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトアーティザン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトアーティザン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトアーティザン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドキッ! アイドル大運動会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドキッ! アイドル大運動会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドキッ! アイドル大運動会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エース瑞樹と助っ人茜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エース瑞樹と助っ人茜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋敷に宿る守護霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋敷に宿る守護霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋敷に宿る守護霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニュージェネレーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニュージェネレーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニュージェネレーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレイジーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレイジーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレイジーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デモニッシュレディース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デモニッシュレディース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソウル・デバウアー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソウル・デバウアー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソウル・デバウアー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーエゴイスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーエゴイスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビューティーアダルト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビューティーアダルト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビューティーアダルト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春宵妖華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春宵妖華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春宵妖華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンデージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンデージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンデージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンデージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンデージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンデージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トライスタービジョン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トライスタービジョン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トライスタービジョン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヴォーパル・ドーナツ・ソード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Rock the Beat" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Rock the Beat" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "吸血伯爵と侯爵夫人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "吸血伯爵と侯爵夫人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "陽気な看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "陽気な看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シルクロードの案内人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シルクロードの案内人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーバレンタイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーバレンタイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーバレンタイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーバレンタイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーティー☆キャットナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーティー☆キャットナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーティー☆キャットナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Le Ciel Aile" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Le Ciel Aile" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Le Ciel Aile" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーエゴイスト mode-Darkness" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーエゴイスト mode-Darkness" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーエゴイスト mode-Darkness" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔法つかいトウコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー'12" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー'12" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー'12" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンタウンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンタウンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンタウンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯めぐり娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯めぐり娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯めぐり娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぽっぷる☆ぽっぷ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぽっぷる☆ぽっぷ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぽっぷる☆ぽっぷ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ご奉仕メイド's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ご奉仕メイド's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ご奉仕メイド's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "WAHAHA☆GIRL" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "WAHAHA☆GIRL" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "WAHAHA☆GIRL" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "書道部ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "書道部ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロボフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロボフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗・リサ＆執事・オトハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗・リサ＆執事・オトハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絵心アイドルの絵画教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絵心アイドルの絵画教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絵心アイドルの絵画教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絵心アイドルの絵画教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトハンターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトハンターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトハンターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリアー・グラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリアー・グラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ALTAIR" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ALTAIR" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ALTAIR" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "文化部連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "文化部連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "文化部連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花の妖精たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花の妖精たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花の妖精たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花の妖精たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花の妖精たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリーナイト・ブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリーナイト・ブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリーナイト・ブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリムゾン・クイーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリムゾン・クイーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリムゾン・クイーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル・シネマ・パラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル・シネマ・パラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル・シネマ・パラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アルテ・オーセンティカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アルテ・オーセンティカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アルテ・オーセンティカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナのバースデーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナのバースデーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナのバースデーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナのバースデーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドクラス・ティーチャーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドクラス・ティーチャーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドクラス・ティーチャーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクールプールガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクールプールガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクールプールガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "星河の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "星河の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "星河の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "星河の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "幻奏ハルモニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "幻奏ハルモニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レイジー・レイジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レイジー・レイジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔法つかいトウコ＆いたずら妖精レイナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔法つかいトウコ＆いたずら妖精レイナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シング・マイ・ウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シング・マイ・ウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シング・マイ・ウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "街の音楽隊 from L.M.B.G." } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "街の音楽隊 from L.M.B.G." } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "街の音楽隊 from L.M.B.G." } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERI☆EMI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERI☆EMI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クロッカス・ウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クロッカス・ウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クロッカス・ウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアスアイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアスアイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王エンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togoji_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王エンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asahina_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王エンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sanjo_Tomomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "High×Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akiyama_Hayato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "High×Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fuyumi_Jun" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "High×Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakaki_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "High×Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakazato_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "High×Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Iseya_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレイト・ライン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレイト・ライン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレイト・ライン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夕暮乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夕暮乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夕暮乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと野球どすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと野球どすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと野球どすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Legenders" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuzunoha_Amehiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Legenders" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitamura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Legenders" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koron_Chris" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マイティーセーラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マイティーセーラーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "赤薔薇花束" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "赤薔薇花束" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "荒野のアウトロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "荒野のアウトロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハピネスメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハピネスメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピースフル・ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピースフル・ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピースフル・ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花鳥風月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花鳥風月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "EScape" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "EScape" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "EScape" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "武田信玄･島津義弘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "武田信玄･島津義弘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鈴帆＆ケイト from ぷちコレ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鈴帆＆ケイト from ぷちコレ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "頑張る受験生たちへ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "頑張る受験生たちへ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "頑張る受験生たちへ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・1st" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・1st" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・1st" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Dimension-3" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Dimension-3" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユカリ・フェアヘイレン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "P♡U" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "P♡U" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はいさいフューチャースター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はいさいフューチャースター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はいさいフューチャースター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラフメイカーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラフメイカーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラフメイカーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "灼熱少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "灼熱少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "灼熱少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "灼熱少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "灼熱少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Black/White-Roses" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Black/White-Roses" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Black/White-Roses" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Black/White-Roses" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sweetches" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sweetches" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sweetches" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sweetches" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sweetches" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バブリーグローリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バブリーグローリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バブリーグローリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バブリーグローリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鍵の妖精・コハル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "甘辛アヤサヤシスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "甘辛アヤサヤシスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フクーヤ王国ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フクーヤ王国ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フクーヤ王国ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッスルスポーツオーバー20" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッスルスポーツオーバー20" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッスルスポーツオーバー20" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルモデル Age26" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルモデル Age26" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルモデル Age26" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "園芸師とマンドラゴラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "園芸師とマンドラゴラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美紗希の女子力レッスン ～オトナ編～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美紗希の女子力レッスン ～オトナ編～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美紗希の女子力レッスン ～オトナ編～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルースプラッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルースプラッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルースプラッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トラレーン城の従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トラレーン城の従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トラレーン城の従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オペラセリア・煌輝座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オペラセリア・煌輝座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オペラセリア・煌輝座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オペラセリア・煌輝座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はむはむ☆うまうま" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はむはむ☆うまうま" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はむはむ☆うまうま" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔性の果実たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔性の果実たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔性の果実たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔性の果実たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B・D・D" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B・D・D" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B・D・D" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "着ぐるみぐるみ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "着ぐるみぐるみ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "着ぐるみぐるみ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すのーまんず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すのーまんず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すのーまんず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "you-i" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "you-i" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "you-i" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "書肆・乙女堂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "書肆・乙女堂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "書肆・乙女堂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブラック＆ホワイトシーブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブラック＆ホワイトシーブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "凸レーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンの愉快な仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンの愉快な仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イタズラ☆プリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イタズラ☆プリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イタズラ☆プリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BIRTH" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BIRTH" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BIRTH" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BIRTH" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BIRTH" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "野生の目覚め" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "野生の目覚め" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "野生の目覚め" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム香川" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム香川" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム香川" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くノ一あやめ忍法帖" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "岡山親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "岡山親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大根の村" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大根の村" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大根の村" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "over the blue" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "over the blue" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "over the blue" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインラヴァーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインラヴァーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインラヴァーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "≡君彩≡" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "≡君彩≡" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "≡君彩≡" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LOVE LAIKA with Rosenburg Engel" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LOVE LAIKA with Rosenburg Engel" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LOVE LAIKA with Rosenburg Engel" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "littlebell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "littlebell" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "館の三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "館の三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "館の三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アキ・シュラーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラシカル・アンサンブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラシカル・アンサンブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラシカル・アンサンブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディテクティブヴァーサス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディテクティブヴァーサス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブパッション 茜＆未央" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポジティブパッション 茜＆未央" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイキックヒーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイキックヒーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "らぶりーエプロンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "らぶりーエプロンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "らぶりーエプロンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドバラード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドバラード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドバラード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドバラード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドバラード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "願わくば、花の盛りに\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "願わくば、花の盛りに\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "願わくば、花の盛りに\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Four Wind Colors" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Four Wind Colors" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Four Wind Colors" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Four Wind Colors" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鬼退治一行(友情出演)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "鬼退治一行(友情出演)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・急" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・急" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・急" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと142's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと142's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと142's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズ・パワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズ・パワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズ・パワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス 詩織・響子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス 詩織・響子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お掃除メイド隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お掃除メイド隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お掃除メイド隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "正義の鉄拳ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "正義の鉄拳ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紅葉温泉LIVE2015" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紅葉温泉LIVE2015" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紅葉温泉LIVE2015" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NEX-US" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NEX-US" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NEX-US" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NEX-US" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NEX-US" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーバニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーバニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーバニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水の精霊三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水の精霊三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水の精霊三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お祭り警備隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お祭り警備隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お祭り警備隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超人ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超人ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超人ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワーウルフ軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワーウルフ軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の自警団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の自警団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の自警団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "現役JK社長と秘書" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "現役JK社長と秘書" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "爽快サクセション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "爽快サクセション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "爽快サクセション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "合唱部をサポートし隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "合唱部をサポートし隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "合唱部をサポートし隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪のハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪のハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪のハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイド 愛結奈・紗南" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイド 愛結奈・紗南" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "悪霊退散☆見習い巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "悪霊退散☆見習い巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーコックとパン職人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーコックとパン職人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大学部合唱チーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大学部合唱チーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大学部合唱チーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアルコーラル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアルコーラル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファントムキャッツ！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファントムキャッツ！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "miroir" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Nagi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "miroir" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hisakawa_Hayate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "幻魔転生～センゴク☆ランブ外伝～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "幻魔転生～センゴク☆ランブ外伝～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いにしえの霊・アンズ＆ハル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いにしえの霊・アンズ＆ハル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー巡査長・サナエ＆コドモ巡査・カオルちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー巡査長・サナエ＆コドモ巡査・カオルちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーンジェム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーンジェム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーンジェム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "どかぽか工務店" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "どかぽか工務店" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "RUN・RUN・RUN" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "RUN・RUN・RUN" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "RUN・RUN・RUN" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヌーヴェルヴァーグ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヌーヴェルヴァーグ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D.L.F.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャンディアイランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャンディアイランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャンディアイランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅風" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅風" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅風" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこにゅーいやー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこにゅーいやー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこにゅーいやー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネレーションオブサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネレーションオブサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドフライト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドフライト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "とも on ステージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "とも on ステージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "とも on ステージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "晴茶宗匠ハル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リヒト・ペンシール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リヒト・ペンシール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソルティオーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソルティオーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジョイメイカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジョイメイカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジョイメイカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドランカーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドランカーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドランカーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅のサーカス団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅のサーカス団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅のサーカス団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/一人ずつ消えていく" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Beit" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takajo_Kyoji" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Beit" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Pierre" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Beit" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Watanabe_Minori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナのご近所中学生" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナのご近所中学生" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナのご近所中学生" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "C5" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "C5" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "C5" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "C5" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "C5" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "演舞華撃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "演舞華撃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリチュアルプレイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリチュアルプレイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "毒舌執事・オトハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "福は内、鬼は外ガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "福は内、鬼は外ガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "福は内、鬼は外ガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "S.E.M" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hazama_Michio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "S.E.M" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maita_Rui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "S.E.M" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamashita_Jiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NiGHT ENCOUNTER" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NiGHT ENCOUNTER" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くノ一・お涼" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カラフルサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カラフルサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カラフルサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE NEXT STEP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE NEXT STEP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE NEXT STEP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE NEXT STEP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミックスナッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミックスナッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミックスナッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミックスナッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミックスナッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FleurS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FleurS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FleurS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー with 早苗お姉さん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー with 早苗お姉さん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー with 早苗お姉さん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライトブルー・ジャンクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライトブルー・ジャンクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライトブルー・ジャンクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "無慈悲な悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "無慈悲な悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ai's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ai's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ただ者ではない住人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストリームライナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストリームライナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワーガーデン's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワーガーデン's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いたずら★小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いたずら★小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いたずら★小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の女王アゲハと従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の女王アゲハと従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の女王アゲハと従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイレントウィンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイレントウィンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大魔女マキノと付き人オトハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大魔女マキノと付き人オトハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "演奏会ユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "演奏会ユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "演奏会ユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "逃がし屋一味" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "逃がし屋一味" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "逃がし屋一味" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大泥棒・ヒカル＆相棒・カンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大泥棒・ヒカル＆相棒・カンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カウガール＆牛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カウガール＆牛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレデリカとヘレンのフリートークタイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレデリカとヘレンのフリートークタイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "山登り探検隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "山登り探検隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "山登り探検隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "風来秘剣帖・タマミ見参！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリティッシュユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリティッシュユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリティッシュユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ショコラ・デモニカ2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ショコラ・デモニカ2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ショコラ・デモニカ2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GW・FUN・CIRCUITS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GW・FUN・CIRCUITS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GW・FUN・CIRCUITS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェブラリーグラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェブラリーグラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり温泉12'S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり温泉12'S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり温泉12'S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にゃんともラブリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にゃんともラブリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にゃんともラブリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアル功夫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアル功夫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームシープス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームシープス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマースイート娘々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマースイート娘々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマースイート娘々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お料理大好きーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お料理大好きーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お料理大好きーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラ・シンクロニシティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラ・シンクロニシティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラ・シンクロニシティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこフェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこフェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこフェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクロマンサーコウメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクロマンサーコウメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネクロマンサーコウメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜花道" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜花道" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜花道" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリソデフリル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリソデフリル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリソデフリル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンの大切な仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンの大切な仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンの大切な仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スケルツォ・プリマヴェーラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スケルツォ・プリマヴェーラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スケルツォ・プリマヴェーラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "三月ウサギ先生" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑美と鈴帆の爆笑エブリデイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑美と鈴帆の爆笑エブリデイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花色春模様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花色春模様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エージェント・コール・SKS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エージェント・コール・SKS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エージェント・コール・SKS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "隣店のエンターテイナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "隣店のエンターテイナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔猫とメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔猫とメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔猫とメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パラダイスリゾート 亜里沙・櫂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パラダイスリゾート 亜里沙・櫂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "WtFみりあ＆小梅＆莉嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "WtFみりあ＆小梅＆莉嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "WtFみりあ＆小梅＆莉嘉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギャルズパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギャルズパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギャルズパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北国の動物園" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北国の動物園" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート＆サイキック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート＆サイキック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "梅雨にNOといい隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "梅雨にNOといい隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "梅雨にNOといい隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CodeName A-K-I" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CodeName A-K-I" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CodeName A-K-I" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームLIVE・デュオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームLIVE・デュオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PONPON4U" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PONPON4U" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PONPON4U" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "舞千鳥" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "舞千鳥" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "舞千鳥" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あーにゃんみくにゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あーにゃんみくにゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンテージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンテージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンテージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーボンテージ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドパッション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドパッション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドパッション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Engage!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Engage!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Engage!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・アソート'17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・アソート'17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・アソート'17" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・ラブ・スウィート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・ラブ・スウィート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・ラブ・スウィート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・アソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・アソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン・アソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "しゅがしゅが☆み～ん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "しゅがしゅが☆み～ん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル ケイト＆久美子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル ケイト＆久美子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルティマドンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルティマドンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お騒がせデビルナホ＆ミサト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お騒がせデビルナホ＆ミサト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コメット・オーヴァーレヴ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コメット・オーヴァーレヴ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・花見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・花見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキノコ野球ゾンビどすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキノコ野球ゾンビどすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキノコ野球ゾンビどすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキノコ野球ゾンビどすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキノコ野球ゾンビどすえ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほら貝と拡声器" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほら貝と拡声器" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴねす☆とらんす" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴねす☆とらんす" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴねす☆とらんす" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セプテンバーリーブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セプテンバーリーブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブレイズ・プリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブレイズ・プリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Shusse-uo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Shusse-uo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "華・茶・書" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "華・茶・書" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "華・茶・書" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインパーティー'13" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインパーティー'13" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインパーティー'13" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コミカルニューイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コミカルニューイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コミカルニューイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カゲロウ奇譚" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カゲロウ奇譚" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カゲロウ奇譚" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔王軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "忍武☆繚乱" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "忍武☆繚乱" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "わんつ→ているず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "わんつ→ているず" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロッキングガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロッキングガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロッキングガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビッグ・ハッピー・ニューイヤー's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビッグ・ハッピー・ニューイヤー's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビッグ・ハッピー・ニューイヤー's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スポーツ祭'15 ～スイーツ＆ラン～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スポーツ祭'15 ～スイーツ＆ラン～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "織田信長" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トレボン！？クッキング☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トレボン！？クッキング☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春ゲスト 美穂＆菜々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春ゲスト 美穂＆菜々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダンサブルエナジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダンサブルエナジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うみのようせい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うみのようせい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うみのようせい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードコア☆ヘヴンズドア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードコア☆ヘヴンズドア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードコア☆ヘヴンズドア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月下氷姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月下氷姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガンスリンガー・キャシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミラージュフォレスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミラージュフォレスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミラージュフォレスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダーラブリーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダーラブリーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダーラブリーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "砂漠の三虎" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "砂漠の三虎" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "砂漠の三虎" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・クロニクル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・クロニクル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・クロニクル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Keepers of the Earth" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Keepers of the Earth" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Keepers of the Earth" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪の勝負師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪の勝負師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小さな赤ずきんちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "生徒会長と会計と書記" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "生徒会長と会計と書記" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "生徒会長と会計と書記" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢見る城主と用心棒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢見る城主と用心棒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "求めし狩人たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "求めし狩人たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "求めし狩人たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウサトラちゃんと節分日和" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウサトラちゃんと節分日和" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウサトラちゃんと節分日和" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の魔女と村人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の魔女と村人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森に住まう歌妖精" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森に住まう歌妖精" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いろどりファンタジア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いろどりファンタジア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エモーショナルパンキー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エモーショナルパンキー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エモーショナルパンキー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ms.ムーンライト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ms.ムーンライト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ms.ムーンライト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女ストーム！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女ストーム！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女ストーム！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女ストーム！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女ストーム！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯めぐり歌物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯めぐり歌物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯めぐり歌物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった隣国の王子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった隣国の王子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった隣国の王子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほら貝と前田慶次" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほら貝と前田慶次" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L.M.B.G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グラス・ニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グラス・ニューカマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホタル・シュバルツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マシュマロアスリート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マシュマロアスリート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマフェス2016!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマフェス2016!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマフェス2016!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "よいこの節分教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "よいこの節分教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "よいこの節分教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクヤヒメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクヤヒメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクヤヒメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクヤヒメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクヤヒメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界公爵四天王" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界公爵四天王" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界公爵四天王" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーモニクス・フレイバー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーモニクス・フレイバー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "つかさ＆風香fromぷちコレ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "つかさ＆風香fromぷちコレ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モロボシティの小さな希望" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モロボシティの小さな希望" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モロボシティの小さな希望" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "やりすぎ鈴帆と時子様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "やりすぎ鈴帆と時子様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あかいなべ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あかいなべ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あかいなべ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットサマーウインド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットサマーウインド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットサマーウインド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファミリアツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファミリアツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春色姫君" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春色姫君" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "案内人ヘレン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリードゥリー from イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリードゥリー from イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリードゥリー from イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・オブ・モーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・オブ・モーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・オブ・モーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・オブ・モーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・オブ・モーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋外運動部(？)連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋外運動部(？)連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "屋外運動部(？)連合" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "追われし動物たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "追われし動物たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "追われし動物たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jelly PoP Beans" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jelly PoP Beans" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jelly PoP Beans" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jelly PoP Beans" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765TheaterAllstars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハツラツスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハツラツスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハツラツスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春ユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春ユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春ユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファム・ファタール・トロワ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファム・ファタール・トロワ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファム・ファタール・トロワ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小学部のおともだち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小学部のおともだち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小学部のおともだち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "わん・わん・お～☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "わん・わん・お～☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルレディエイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルレディエイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "杏と紗南のごーるでんうぃーく☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "杏と紗南のごーるでんうぃーく☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グラスフルワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グラスフルワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グラスフルワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクール・スイマーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクール・スイマーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクール・スイマーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "彩" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nekoyanagi_Kirio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "彩" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hanamura_Shoma" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "彩" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiyosumi_Kuro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アインフェリア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アインフェリア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アインフェリア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アインフェリア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アインフェリア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Higuchi_Madoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukioka_Kogane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Amana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komiya_Kaho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sonoda_Chiyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuragi_Mano" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Stella" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Serizawa_Asahi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パタパタ☆鳥さん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パタパタ☆鳥さん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポプシクル・ポップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポプシクル・ポップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポプシクル・ポップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ポプシクル・ポップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "情熱のカーニバル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "情熱のカーニバル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "情熱のカーニバル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CDdebut奏＆フレデリカ＆文香" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CDdebut奏＆フレデリカ＆文香" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CDdebut奏＆フレデリカ＆文香" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イクサバオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イクサバオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イクサバオトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キノコ伝達師・ショウコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トークバトルチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トークバトルチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トークバトルチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トークバトルチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トークバトルチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トークバトルチアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "解説☆鮮魚コーナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "解説☆鮮魚コーナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン with 雪乃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン with 雪乃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン with 雪乃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スポーツ祭'15 ～ミラクルマンパワー～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スポーツ祭'15 ～ミラクルマンパワー～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゴスペルシスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゴスペルシスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゴスペルシスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットアスリーテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラビュー☆アイス☆マウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラビュー☆アイス☆マウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラビュー☆アイス☆マウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のフラワーガール feat.巴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のフラワーガール feat.巴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERICATHY with KATE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERICATHY with KATE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERICATHY with KATE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "猟師の仲間" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "猟師の仲間" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BREAD RICE SISTERS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BREAD RICE SISTERS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "復活者～コンティニューパーティー～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "復活者～コンティニューパーティー～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "復活者～コンティニューパーティー～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "復活者～コンティニューパーティー～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナの名所放浪記" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナの名所放浪記" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢幻泡影" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢幻泡影" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夢幻泡影" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サーチ＆ジャッジメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サーチ＆ジャッジメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅の教師と生徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅の教師と生徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドルEGG" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドルEGG" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルドサイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルドサイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルドサイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "詠月の花姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "詠月の花姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "詠月の花姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "りるきゃん 〜3 little candy〜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "りるきゃん 〜3 little candy〜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "りるきゃん 〜3 little candy〜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリミナルセクシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリミナルセクシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NH NETWORK" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NH NETWORK" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "よいこのキャンプ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "よいこのキャンプ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "よいこのキャンプ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナナ＆みく from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナナ＆みく from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーソング・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーソング・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーソング・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "敏腕刑事・チナツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストロベリーパニック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストロベリーパニック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストロベリーパニック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハプニングサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハプニングサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハプニングサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルトリオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルトリオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルトリオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TIntMe!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TIntMe!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TIntMe!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魚屋と花屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魚屋と花屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界武林三美傑" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界武林三美傑" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界武林三美傑" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "塾友3人娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "塾友3人娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "塾友3人娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼翼の乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Masque:Rade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Masque:Rade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Masque:Rade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Masque:Rade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Masque:Rade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディヴィニア・トリニターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディヴィニア・トリニターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディヴィニア・トリニターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレパ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "招き巫女三景" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "招き巫女三景" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "招き巫女三景" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春チアーズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春チアーズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春チアーズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "海辺の料理店員" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "海辺の料理店員" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートハーモナイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートハーモナイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！パンデモニウム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！パンデモニウム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！パンデモニウム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！パンデモニウム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！パンデモニウム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "StudyS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "StudyS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にゃん・にゃん・にゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にゃん・にゃん・にゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にゃん・にゃん・にゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スモールハート・トリックスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スモールハート・トリックスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "杏と紗南のごーるでんうぃーく☆ with 清美ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "杏と紗南のごーるでんうぃーく☆ with 清美ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "杏と紗南のごーるでんうぃーく☆ with 清美ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギルティーアダルト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギルティーアダルト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ギルティーアダルト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワーガーデン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワーガーデン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワーガーデン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヤングユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヤングユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヤングユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シルク・ドゥ・フラム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シルク・ドゥ・フラム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jumpin'Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jumpin'Joker" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "狼・アツミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "莉嘉・凛・みく(出張中)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "莉嘉・凛・みく(出張中)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "莉嘉・凛・みく(出張中)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Starlight Melody" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エントラップメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エントラップメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エントラップメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレートフルート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレートフルート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "貴族のお嬢様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "貴族のお嬢様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "貴族のお嬢様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "渚の乙姫\u2019s" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "渚の乙姫\u2019s" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学園自慢のJKアイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学園自慢のJKアイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CHEFFLE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CHEFFLE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CHEFFLE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "純情エール from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "純情エール from T.B.S" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バーニングサーキット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バーニングサーキット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "吸血貴族ERIKA＆小悪魔シホ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "吸血貴族ERIKA＆小悪魔シホ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミッシングムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミッシングムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミッシングムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋姿紅葉娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋姿紅葉娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋姿紅葉娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ms.バタフライ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ms.バタフライ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Ms.バタフライ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリーヒーロー・サクラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ななちゃんす" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ななちゃんす" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ななちゃんす" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー '15" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー '15" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー '15" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンダーザデスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンダーザデスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンダーザデスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "双演の蓮華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "双演の蓮華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オータムブックメイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オータムブックメイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オータムブックメイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーンライト・セレナーデ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーンライト・セレナーデ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーンライト・セレナーデ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーンライト・セレナーデ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーンライト・セレナーデ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パイレーツ・カンナ＆ミサキ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パイレーツ・カンナ＆ミサキ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリルドスクエア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリルドスクエア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリルドスクエア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリルドスクエア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かな☆かな☆ふぁんしー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かな☆かな☆ふぁんしー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "良家の子女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "良家の子女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "良家の子女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤント・ノワール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤント・ノワール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コスメティア偵察部隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コスメティア偵察部隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コスメティア偵察部隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "家事アンドロイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "家事アンドロイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "家事アンドロイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェル・クレイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェル・クレイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エンジェル・クレイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "完成!・スーパーシェフ!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "完成!・スーパーシェフ!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "完成!・スーパーシェフ!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Flowery" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Flowery" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリーム・フェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリーム・フェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリーム・フェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イエローリリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秘密を抱えた乗客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秘密を抱えた乗客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ツキシロノメガミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ツキシロノメガミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jupiter" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amagase_Toma" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jupiter" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Hokuto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jupiter" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitarai_Shota" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小悪魔バレンタイン's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小悪魔バレンタイン's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小悪魔バレンタイン's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファースト・ムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファースト・ムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファースト・ムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マチュア・マインド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マチュア・マインド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マチュア・マインド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浴衣祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "めりくり声援隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "めりくり声援隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "めりくり声援隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のうさぎさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のうさぎさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のうさぎさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チョコ作り応援隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チョコ作り応援隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チョコ作り応援隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学園の姉御" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学園の姉御" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴ☆☆☆ふら" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴ☆☆☆ふら" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はぴ☆☆☆ふら" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛の宣教師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛の宣教師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライラさんとアコさんの世界お宝発見！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライラさんとアコさんの世界お宝発見！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピロス・ビブロス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピロス・ビブロス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "謎の諜報員" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルビーカウンテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルビーカウンテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルビーカウンテス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "謎のふわもこ使い魔ヤスハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハピハピデーモンツイン＆堕天魔王ランコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハピハピデーモンツイン＆堕天魔王ランコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハピハピデーモンツイン＆堕天魔王ランコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アルティメットケイクス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アルティメットケイクス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アルティメットケイクス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラウドビーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラウドビーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "びしょ濡れサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "びしょ濡れサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "びしょ濡れサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プラネット☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プラネット☆スターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランクィル・ウィスパー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランクィル・ウィスパー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランクィル・ウィスパー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場の花・ユキノ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花盛りの彩りメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花盛りの彩りメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花盛りの彩りメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ときめきオーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ときめきオーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ときめきオーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン楽しみ隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン楽しみ隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン楽しみ隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L'Antica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitsumine_Yuika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L'Antica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Mamimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L'Antica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirase_Sakuya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L'Antica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yukoku_Kiriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "L'Antica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukioka_Kogane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナターリア・ローゼ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LoveLoveご奉仕大作戦！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LoveLoveご奉仕大作戦！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LoveLoveご奉仕大作戦！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LoveLoveご奉仕大作戦！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水精の語らい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水精の語らい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "猫目三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "猫目三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "猫目三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷるるん☆ウォーターメロロ～ン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷるるん☆ウォーターメロロ～ン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷるるん☆ウォーターメロロ～ン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バザールの商人たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バザールの商人たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バザールの商人たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーウェザー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーウェザー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イカバラピュアプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イカバラピュアプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イカバラピュアプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Honey Citrus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Honey Citrus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Honey Citrus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Honey Citrus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・トリオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・トリオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤル・トリオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "伝説の合唱部OG" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "伝説の合唱部OG" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "伝説の合唱部OG" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅籠の女将" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅籠の女将" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼ノ楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼ノ楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼ノ楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼ノ楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼ノ楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンフォニック・ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンフォニック・ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "貴族の三姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "貴族の三姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "貴族の三姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファニーデビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファニーデビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファニーデビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー with 拓海" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー with 拓海" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー with 拓海" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バニーガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バニーガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バニーガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バニーガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フルボッコちゃん＆アッキー(友情出演)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フルボッコちゃん＆アッキー(友情出演)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オンステージゴッデス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オンステージゴッデス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュ☆クレヨンフルーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュ☆クレヨンフルーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュ☆クレヨンフルーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミハンター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sherry 'n Cherry" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sherry 'n Cherry" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルドレディース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルドレディース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルドレディース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "肇と美紗希の女子力レッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "肇と美紗希の女子力レッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メガネユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メガネユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メガネユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リブラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リブラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リブラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "＊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "＊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浪速と淑女のマリアージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浪速と淑女のマリアージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浪速と淑女のマリアージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーアバンギャルド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーアバンギャルド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "羽衣小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "羽衣小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北の魔女シノブと使い魔たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北の魔女シノブと使い魔たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北の魔女シノブと使い魔たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷにぷにマウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷにぷにマウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅芸人一座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅芸人一座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅芸人一座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅芸人一座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅芸人一座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "旅芸人一座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しき理事長たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しき理事長たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学祭天国!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルNP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シグナル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シグナル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シグナル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホリーサーディン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホリーサーディン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞う花見祭り's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞う花見祭り's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞う花見祭り's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェリーチェ・チョコラータ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェリーチェ・チョコラータ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェリーチェ・チョコラータ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェリーチェ・チョコラータ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "赤ずきん公演団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "赤ずきん公演団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "赤ずきん公演団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "南南東" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "南南東" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "南南東" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女帝セツナ＆キラリ博士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女帝セツナ＆キラリ博士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "修行中の舞姉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "修行中の舞姉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "葵と椿の華二輪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "葵と椿の華二輪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダークケイブデビルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダークケイブデビルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダークケイブデビルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チェイス！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チェイス！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎陣" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎陣" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎陣" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎陣" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎陣" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魅惑のプールサイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魅惑のプールサイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魅惑のプールサイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プティ・パティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プティ・パティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プティ・パティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラブ・ロワイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラブ・ロワイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナターリアお嬢様ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナターリアお嬢様ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナターリアお嬢様ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーフェス・スプラッシュ！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーフェス・スプラッシュ！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヴィクトリープレイヤーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヴィクトリープレイヤーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヴィクトリープレイヤーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キラキラ☆OLランチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キラキラ☆OLランチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キラキラ☆OLランチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "峠の茶屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "峠の茶屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月虹の導き手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月虹の導き手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月虹の導き手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "戦国傾奇帖・ヒトミ推参！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらきらモデル from NSC" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらきらモデル from NSC" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらきらモデル from NSC" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "悪の科学者アキハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タナバタナイト・クライシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タナバタナイト・クライシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タナバタナイト・クライシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タナバタナイト・クライシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のサンタガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のサンタガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のサンタガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "めくるめく本屋ツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "めくるめく本屋ツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "めくるめく本屋ツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゲシュペンスト・ミレイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のゆき" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真夏のゆき" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ALSTROEMERIA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kuwayama_Chiyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ALSTROEMERIA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Tenka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ALSTROEMERIA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Amana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園水泳部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園水泳部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園水泳部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マシュマロハニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マシュマロハニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プレシャス☆FIVE!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プレシャス☆FIVE!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プレシャス☆FIVE!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プレシャス☆FIVE!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プレシャス☆FIVE!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイ・フィーリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイ・フィーリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイ・フィーリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異国の旅人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異国の旅人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャプテン・ユイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "霊幻ツインズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "霊幻ツインズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒロイックエンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒロイックエンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "街の保安官・ソラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パイレーツ・カンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリー♪マジカル♪ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリー♪マジカル♪ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラブリー♪マジカル♪ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春かくし芸リターンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春かくし芸リターンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春かくし芸リターンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～ミステリーラン～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～ミステリーラン～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～ミステリーラン～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B.B.ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B.B.ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B.B.ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーメイドパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゆきすべり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゆきすべり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゆきすべり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "城下町の奉行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "城下町の奉行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネバーギブアップス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネバーギブアップス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ネバーギブアップス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニーブルー・フェスティバル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニーブルー・フェスティバル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニーブルー・フェスティバル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "哀しき花嫁とネクロマンサー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "哀しき花嫁とネクロマンサー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "MYSTIQUES" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "MYSTIQUES" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ+YUKIMI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ+YUKIMI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ+YUKIMI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ+YUKIMI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フォーリンシーサイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フォーリンシーサイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "A-14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "A-14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "A-14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷるんぷるんプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷるんぷるんプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷるんぷるんプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクール・ロック・ギグ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクール・ロック・ギグ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクール・ロック・ギグ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "隣国の王族たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "隣国の王族たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "隣国の王族たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアルサマーノーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアルサマーノーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メモリアルサマーノーツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トライアングル・ドミネイション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トライアングル・ドミネイション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トライアングル・ドミネイション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャンサー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャンサー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャンサー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Yami-Yumeインスピレイションズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Yami-Yumeインスピレイションズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Yami-Yumeインスピレイションズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュア＆セクシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュア＆セクシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "山紫水明" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "山紫水明" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マフィアの代理人弁護士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マフィアの代理人弁護士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "司会進行のミズキです♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム名古屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム名古屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム名古屋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユア・フレンズ・アレンジメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユア・フレンズ・アレンジメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユア・フレンズ・アレンジメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイドコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LittlePOPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LittlePOPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LittlePOPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LittlePOPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LittlePOPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブエナ・スエルテ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブエナ・スエルテ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブエナ・スエルテ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファム・ファタール・デュオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファム・ファタール・デュオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリットガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリットガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリットガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オータムコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オータムコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オータムコレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！アナザープレーン・ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！アナザープレーン・ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！アナザープレーン・ヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィッシュパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィッシュパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィッシュパラダイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Heartful Bloom" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Heartful Bloom" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Heartful Bloom" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Heartful Bloom" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Heartful Bloom" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィッシュサマーガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィッシュサマーガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィッシュサマーガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園チア部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園チア部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カナリア学園チア部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "W.W.W" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "W.W.W" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふわもこ使い魔の企み" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふわもこ使い魔の企み" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "3年C組メイド喫茶" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "3年C組メイド喫茶" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "3年C組メイド喫茶" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歌姫眼鏡騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歌姫眼鏡騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルND" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン大好きこどもクラブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン大好きこどもクラブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン大好きこどもクラブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった乙女たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった乙女たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑宴☆官女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑宴☆官女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑宴☆官女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アグレッシブディーヴァ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アグレッシブディーヴァ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アグレッシブディーヴァ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美優おねえさんと薫ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美優おねえさんと薫ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "襲撃！デビルアツミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "襲撃！デビルアツミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスメモリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスメモリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスメモリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くるりんテーマパーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くるりんテーマパーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くるりんテーマパーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘン＆ゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘン＆ゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘン＆ゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マフィア・ミストレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のコダマたち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のコダマたち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のコダマたち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゼッケンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゼッケンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゼッケンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゼッケンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゼッケンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Shock'in Pink!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Shock'in Pink!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベースボールサポーターズ！！！！！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベースボールサポーターズ！！！！！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベースボールサポーターズ！！！！！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベースボールサポーターズ！！！！！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベースボールサポーターズ！！！！！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "禁じられた財宝" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "禁じられた財宝" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "禁じられた財宝" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏の海の思い出'15" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏の海の思い出'15" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏の海の思い出'15" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "開運暴走ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "開運暴走ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "開運暴走ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リリカル・ツーリズム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リリカル・ツーリズム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リリカル・ツーリズム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファインダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファインダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かしまし花娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かしまし花娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かしまし花娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒーローヴァーサス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒーローヴァーサス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリーナイトウィッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリーナイトウィッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホーリーナイトウィッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "闘劇の三女神" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "闘劇の三女神" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "闘劇の三女神" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花咲夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋風の姫達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋風の姫達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋風の姫達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティダンプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティダンプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティダンプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "番の巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "番の巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホット・マーメイド2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホット・マーメイド2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホット・マーメイド2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "組織のエージェント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "組織のエージェント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エキサイトダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エキサイトダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エキサイトダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファインストライカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファインストライカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャングル・ランブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャングル・ランブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャングル・ランブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キフジンキブン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キフジンキブン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キフジンキブン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "不幸な観光客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "不幸な観光客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "不幸な観光客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノーブルセレブリティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノーブルセレブリティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノーブルセレブリティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルセレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルセレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルセレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブライダルセレクション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Caskets" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Caskets" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Caskets" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Caskets" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Caskets" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー・マフィア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク☆ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク☆ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フルール・ド・ロゼ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フルール・ド・ロゼ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フルール・ド・ロゼ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARRIVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARRIVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARRIVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARRIVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARRIVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイキックエナジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイキックエナジー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーン・ブライトネス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリーン・ブライトネス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆周子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆周子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アーティスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アーティスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Rosenburg Engel" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CINDERELLA PROJECT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクールガールフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スクールガールフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トレジャーハンター・アコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エスピオナージ・ツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エスピオナージ・ツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりジャッパーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりジャッパーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりジャッパーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりジャッパーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりジャッパーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オマツリ・ツインズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オマツリ・ツインズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浜茶屋の看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浜茶屋の看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浜茶屋の看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さくらと桃華のさくらまつり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さくらと桃華のさくらまつり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンタクローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンタクローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クローバーをさがして..." } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クローバーをさがして..." } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クローバーをさがして..." } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レイニーデイ・ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レイニーデイ・ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レイニーデイ・ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にくきゅうアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にくきゅうアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "にくきゅうアニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイクアップ・アイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイクアップ・アイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイクアップ・アイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アミューズ・フラワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アミューズ・フラワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アミューズ・フラワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Altessimo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuzuki_Kei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Altessimo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kagura_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おしえて! ありさせんせー!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おしえて! ありさせんせー!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おしえて! ありさせんせー!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スコーピオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スコーピオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スコーピオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スコーピオ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "浅井長政" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紗枝＆まゆ from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紗枝＆まゆ from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "恋小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "恋小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "恋小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ティーンユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ティーンユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ティーンユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・破" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・破" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "奈緒＆加蓮 from ブライダル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "奈緒＆加蓮 from ブライダル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もちもちぺったん☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もちもちぺったん☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もちもちぺったん☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットアートジャンピン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットアートジャンピン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホットアートジャンピン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎の舞踏精霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "炎の舞踏精霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・序" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "乙女神楽・序" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりファイア＆アイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりファイア＆アイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーティー･ドランカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーティー･ドランカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーティー･ドランカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜花小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜花小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜花小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夜想令嬢 -GRAC&E NOCTURNE-" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夜想令嬢 -GRAC&E NOCTURNE-" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夜想令嬢 -GRAC&E NOCTURNE-" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夜想令嬢 -GRAC&E NOCTURNE-" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノーティギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノーティギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナーのセクシー講座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナーのセクシー講座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナーのセクシー講座" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンシーフリルス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンシーフリルス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キュート・ブライド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キュート・ブライド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キュート・ブライド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "式神ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "式神ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "式神ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーオーナメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーオーナメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーオーナメント" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "熱血漢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリーフェザー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリーフェザー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "温泉郷の使い" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "温泉郷の使い" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "温泉郷の使い" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春眠暁を覚えず in ワンダーランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春眠暁を覚えず in ワンダーランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春眠暁を覚えず in ワンダーランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキューティーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキューティーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクとキューティーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベター・グロウ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ベター・グロウ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウスウィンド・ダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウスウィンド・ダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウスウィンド・ダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウスウィンド・ダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウスウィンド・ダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロード・オブ・プリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロード・オブ・プリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロード・オブ・プリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファタ・モルガーナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファタ・モルガーナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファタ・モルガーナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "snow glasses" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "snow glasses" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンヴトンテレディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンヴトンテレディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンヴトンテレディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "落花流水" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "落花流水" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "落花流水" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルーナポレオン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルーナポレオン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルーナポレオン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルーナポレオン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルーナポレオン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いっしょに♪ふわもこフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いっしょに♪ふわもこフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いっしょに♪ふわもこフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "VelvetRose" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurosaki_Chitose" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "VelvetRose" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirayuki_Chiyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "RagnaroK" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "RagnaroK" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さわやかスポーツ娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さわやかスポーツ娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さわやかスポーツ娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARMooo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARMooo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARMooo" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダー・フル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダー・フル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダー・フル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダー・フル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダー・フル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダー・フル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヘルシーサバイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヘルシーサバイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヘルシーサバイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホームメイドハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホームメイドハート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルチェリーブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルチェリーブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルチェリーブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イートミーケーキの妖精・カナコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビヨンド・オーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビヨンド・オーシャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトシーカーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイトシーカーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "饗宴幻夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "饗宴幻夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "饗宴幻夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャーニースター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャーニースター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャーニースター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スズホ with ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スズホ with ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スズホ with ムーランルージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルーキースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルーキースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ルーキースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お月見バニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お月見バニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お月見バニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アモール・デル・ディアマンテ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アモール・デル・ディアマンテ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アモール・デル・ディアマンテ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Na・No・Ne" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Na・No・Ne" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Na・No・Ne" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーライブセーラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーライブセーラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーライブセーラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おくすりChu☆Nyu!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おくすりChu☆Nyu!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードコア☆アップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードコア☆アップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン妖精三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン妖精三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィン妖精三姉妹" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女王ルミ＆マミーレイコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女王ルミ＆マミーレイコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー？マーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー？マーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "インディゴ・ベル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "インディゴ・ベル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お月見団子座談会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お月見団子座談会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お月見団子座談会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地球防衛隊 地上軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地球防衛隊 地上軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おえかき☆あにまる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おえかき☆あにまる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おえかき☆あにまる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おえかき☆あにまる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おえかき☆あにまる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "聖靴学園・生徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "聖靴学園・生徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "聖靴学園・生徒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "瑞樹 from PM ＆幸子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "瑞樹 from PM ＆幸子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "和娘 from フリルドスクエア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "和娘 from フリルドスクエア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京のあやかし" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京のあやかし" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントフィーユ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異国のグルメ旅人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異国のグルメ旅人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異国のグルメ旅人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コズミック・シンフォニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コズミック・シンフォニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コズミック・シンフォニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コズミック・シンフォニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "百鬼夜行の戯れ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "百鬼夜行の戯れ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "百鬼夜行の戯れ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジューン・ミストレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジューン・ミストレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ようせいさんとおねえさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ようせいさんとおねえさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小さな音楽隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小さな音楽隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィーティー☆ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィーティー☆ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "錬金術師とラクガキノコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "錬金術師とラクガキノコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンキーノート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンキーノート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンキーノート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンキーノート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンキーノート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひつじさんとうさぎさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひつじさんとうさぎさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビートシューター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビートシューター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビューティーアリュール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビューティーアリュール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビューティーアリュール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "門の守り手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "門の守り手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SprouT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SprouT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SprouT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリッド・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリッド・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリッド・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり華姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり華姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり華姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルド・ヴァイブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルド・ヴァイブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルド・ヴァイブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワイルド・ヴァイブス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑う門には福来たる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑う門には福来たる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "笑う門には福来たる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "川の釣り人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "川の釣り人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "川の釣り人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アクティブ・グラウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アクティブ・グラウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アクティブ・グラウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブレイブパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブレイブパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブレイブパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地元の新米新聞記者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地元の新米新聞記者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界の女王ルミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "どうぶつ☆ふぇすた" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "どうぶつ☆ふぇすた" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "どうぶつ☆ふぇすた" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリー・リング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリー・リング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリー・リング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chrono-Lexica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chrono-Lexica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chrono-Lexica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chrono-Lexica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chrono-Lexica" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートウォーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートウォーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートウォーマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふるさと応援アイドル部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふるさと応援アイドル部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふるさと応援アイドル部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふるさと応援アイドル部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ふるさと応援アイドル部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリオ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミ家族の胸騒ぎ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミ家族の胸騒ぎ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オオカミ家族の胸騒ぎ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キラリ博士" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グロウハーヴェスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グロウハーヴェスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グロウハーヴェスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chorus of Chaos" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chorus of Chaos" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chorus of Chaos" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chorus of Chaos" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Chorus of Chaos" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ひな祭り12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スカイブルーサンシャイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スカイブルーサンシャイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あいぴーぷる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あいぴーぷる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あいぴーぷる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キバ先生とミサト先生" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キバ先生とミサト先生" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いい子とサンタの物語2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いい子とサンタの物語2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いい子とサンタの物語2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルシンジケート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルシンジケート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しのマドンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しのマドンナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チアフルボンバーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チアフルボンバーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チアフルボンバーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミスティックヴォイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミスティックヴォイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超常支配者同盟" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "超常支配者同盟" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイートフローズン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイートフローズン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイートフローズン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋色温泉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋色温泉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋色温泉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋色温泉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "並木芽衣子 with 眼鏡" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "並木芽衣子 with 眼鏡" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチエンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチエンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチエンジェル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンキーキュート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンキーキュート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンキーキュート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "長崎親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "長崎親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "長崎親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホワイトデー決起会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホワイトデー決起会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホワイトデー決起会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "colleague 70" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "colleague 70" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "colleague 70" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニー・アーリーデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニー・アーリーデイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "猫娘娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NOA-HAL" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NOA-HAL" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Perfect 5th" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Perfect 5th" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Perfect 5th" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Perfect 5th" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Perfect 5th" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム月見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム月見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム月見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりゆうれい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむりゆうれい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゴージャスロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゴージャスロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゴージャスロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カーニバルダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カーニバルダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "一角兎と獅子の宴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "一角兎と獅子の宴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水浴びする少女たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水浴びする少女たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水浴びする少女たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "双翼の導き手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "双翼の導き手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイドフェロモンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイドフェロモンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイドフェロモンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さやちん☆そらちん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さやちん☆そらちん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルスマイルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルスマイルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルスマイルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこ＆馬（友情出演）" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちびっこ＆馬（友情出演）" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Project:Krone" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エニウェアツーリスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エニウェアツーリスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "輝子＆裕子 from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "輝子＆裕子 from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちぇりー☆すぱ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ちぇりー☆すぱ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春舞佳人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春舞佳人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春モード '16" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春モード '16" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春モード '16" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春モード '16" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Fleuranges" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Fleuranges" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Fleuranges" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Fleuranges" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "織田の重鎮" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "織田の重鎮" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・お花見体験" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・お花見体験" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・お花見体験" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歓迎の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歓迎の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スカウトスリーズ in 長崎" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スカウトスリーズ in 長崎" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スカウトスリーズ in 長崎" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サディスト・マフィア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリフォンと亀モドキの語らい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グリフォンと亀モドキの語らい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FrenchKisS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FrenchKisS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あのカボチャから逃げてます\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あのカボチャから逃げてます\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あのカボチャから逃げてます\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "いたずら妖精レイナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/きっかけは肝試し" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/きっかけは肝試し" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/きっかけは肝試し" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "からぱれ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "からぱれ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "からぱれ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "からぱれ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "からぱれ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーリトルギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーリトルギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーリトルギャルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エルドリッチ・ロアテラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エルドリッチ・ロアテラー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムシバレイナと小春ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ムシバレイナと小春ちゃん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Violet Violence" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Violet Violence" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Violet Violence" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "日菜子と愛海の妄想ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "日菜子と愛海の妄想ワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歴戦の王宮近衛兵" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歴戦の王宮近衛兵" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "歴戦の王宮近衛兵" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナ女子、かく語りき" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オトナ女子、かく語りき" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キュートサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キュートサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キュートサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "3-9☆Days" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "3-9☆Days" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "3-9☆Days" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LOVE LAIKA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LOVE LAIKA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライバル校合唱部の偵察" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライバル校合唱部の偵察" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜朔夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜朔夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜朔夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノーフェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノーフェアリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーウェディング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーウェディング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハッピーウェディング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女王の同級生(花嫁)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女王の同級生(花嫁)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "女王の同級生(花嫁)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーパンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーパンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーパンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エスティバル・コール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エスティバル・コール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エスティバル・コール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピコピコプラネッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピコピコプラネッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピコピコプラネッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピコピコプラネッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュ☆チアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュ☆チアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーバニーメニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーバニーメニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーバニーメニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小春ちゃんと縄跳び教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小春ちゃんと縄跳び教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小春ちゃんと縄跳び教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり姉姐ズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり姉姐ズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SHHis" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanakusa_Nichika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "SHHis" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aketa_Mikoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム北の大地" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム北の大地" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム北の大地" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン with 肇" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン with 肇" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン with 肇" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぺあべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぺあべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "妖術師ELLIE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オリエンタルサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オリエンタルサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オリエンタルサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルヘンゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツファイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツファイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツファイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツファイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツファイブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サキュバスレディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サキュバスレディ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デーモン・パティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デーモン・パティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デーモン・パティシエール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントノワール+MIYUKI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントノワール+MIYUKI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリヤントノワール+MIYUKI" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイ・フェスティバル・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイ・フェスティバル・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メイ・フェスティバル・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "薔薇姫伝承" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "薔薇姫伝承" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "薔薇姫伝承" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシージューシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシージューシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシージューシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマプリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマプリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマプリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマプリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマプリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERICATHY" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ERICATHY" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブラックゴシックドレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブラックゴシックドレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーチング部(小中学部)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーチング部(小中学部)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マーチング部(小中学部)" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場のミューズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル 優＆唯" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル 優＆唯" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリンセススターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯巡り旅小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯巡り旅小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯巡り旅小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学ベヨ乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学ベヨ乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "学ベヨ乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "黒猫と白猫のワルツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "黒猫と白猫のワルツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらりんラボ・メイドさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらりんラボ・メイドさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大正ロマネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大正ロマネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンターストーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンターストーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンターストーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔法使いの妖精" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さえみさきらりん☆ハンサム教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さえみさきらりん☆ハンサム教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さえみさきらりん☆ハンサム教室" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真田幸村・武田信玄" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真田幸村・武田信玄" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酋長・コトカー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "侵略者レイナ＆宇宙科学者アキハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "侵略者レイナ＆宇宙科学者アキハ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レイニーナイト・チカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のどうぶつ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のどうぶつ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森のどうぶつ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地球防衛隊 砲撃軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地球防衛隊 砲撃軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "地球防衛隊 砲撃軍" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ル・リエーの呼び声" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ル・リエーの呼び声" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ル・リエーの呼び声" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ル・リエーの呼び声" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "車窓の令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "車窓の令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "人間界のオトモダチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "人間界のオトモダチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スターリット・アンサンブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スターリット・アンサンブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スターリット・アンサンブル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "世話好き少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "世話好き少女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルハーモニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルハーモニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルハーモニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルハーモニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エターナルハーモニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "illuminationSTARS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuragi_Mano" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "illuminationSTARS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hachimiya_Meguru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "illuminationSTARS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル・カマル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソル・カマル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "毘沙門天の化身" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フォーチュン・ドリーマーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kita_Hinako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フォーチュン・ドリーマーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "予言者フミカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルトスリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルトスリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルトスリーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビック・セパレート・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビック・セパレート・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビック・セパレート・スリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと犬飼いアイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと犬飼いアイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カワイイボクと犬飼いアイドル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンセット・ツインスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンセット・ツインスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おてんば姫・愛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hidaka_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "留美のフェアレディレッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "留美のフェアレディレッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "留美のフェアレディレッスン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "特殊鉱石を求めて♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "特殊鉱石を求めて♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィートティータイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィートティータイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィートティータイム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "喧嘩屋と鉄砲玉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "喧嘩屋と鉄砲玉" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "式神使いナナミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "式神使いナナミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "式神使いナナミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆愛梨" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆愛梨" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アクアリウス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アクアリウス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アクアリウス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "腕自慢の宮廷料理人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "腕自慢の宮廷料理人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "腕自慢の宮廷料理人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニューウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニューウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニューウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィオレンティナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィオレンティナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミス・フォーチュンfeat.朋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミス・フォーチュンfeat.朋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミス・フォーチュンfeat.朋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドイツスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドイツスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドイツスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソングヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ソングヒーローズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアス・スプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアス・スプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミステリアス・スプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーギルティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーギルティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーギルティ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "銀弾の射手・ノア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すまいる・りとる・もんすたー☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すまいる・りとる・もんすたー☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "すまいる・りとる・もんすたー☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Spiriter feat.未央" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Spiriter feat.未央" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Spiriter feat.未央" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "茶屋の看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "茶屋の看板娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "397cherry" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "397cherry" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "397cherry" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボール・フレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボール・フレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "読書家お姉さんと気まぐれ猫チャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "読書家お姉さんと気まぐれ猫チャン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しき祭り華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しき祭り華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "麗しき祭り華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チャレンジクッキング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チャレンジクッキング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チャレンジクッキング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "F-LAGS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_315" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "F-LAGS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukumo_Kazuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "F-LAGS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kabuto_Daigo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディヴァイニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディヴァイニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "年初め健康チェック！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "年初め健康チェック！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "年初め健康チェック！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "聖騎士団員" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "聖騎士団員" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スリーピングキノコ with 卯月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スリーピングキノコ with 卯月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スリーピングキノコ with 卯月" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NPロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NPロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "NPロワイヤルスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sena_Shiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーシー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "4Luxury" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "4Luxury" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "4Luxury" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "4Luxury" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "悠久の旅人・メグミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルソニック3" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルソニック3" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パワフルソニック3" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジュール・ドゥ・ノア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジュール・ドゥ・ノア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ExA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ExA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンステップス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンステップス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンステップス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "放課後クライマックスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Arisugawa_Natsuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "放課後クライマックスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saijo_Juri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "放課後クライマックスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sonoda_Chiyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "放課後クライマックスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komiya_Kaho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "放課後クライマックスガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morino_Rinze" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レディ・ビースト・シュプレム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レディ・ビースト・シュプレム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レディ・ビースト・シュプレム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レディ・ビースト・シュプレム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルティック・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アダルティック・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレシェンドブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレシェンドブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレシェンドブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレシェンドブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレシェンドブルー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "STAR ELEMENTS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "STAR ELEMENTS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "STAR ELEMENTS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京町乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京町乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "京町乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらりんラボ・技術チーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "きらりんラボ・技術チーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シガー・スウィート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シガー・スウィート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シガー・スウィート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼黒の美声楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼黒の美声楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼黒の美声楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蒼黒の美声楽団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユカタ★オトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユカタ★オトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユカタ★オトメ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "組織の狂犬" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "組織の狂犬" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "雷舞上等" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "雷舞上等" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "雷舞上等" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "迷子の酔っぱらい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "迷子の酔っぱらい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "迷子の酔っぱらい" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～マジカルホーム～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～マジカルホーム～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～マジカルホーム～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～マジカルホーム～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エイプリルドリーム ～マジカルホーム～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "理の守護者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "理の守護者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水彩のハルモニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水彩のハルモニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "水彩のハルモニア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷちコレ 2015 Summer" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷちコレ 2015 Summer" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ぷちコレ 2015 Summer" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィット＆ワイルド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィット＆ワイルド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かしまし筆娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "かしまし筆娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チームオータムモデル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チームオータムモデル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チームオータムモデル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "戦国武者の亡霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "戦国武者の亡霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "戦国武者の亡霊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エキサイトスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エキサイトスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Senzaki_Ema" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "戦国の華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネシス×ネメシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネシス×ネメシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネシス×ネメシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネシス×ネメシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェネシス×ネメシス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジカルテット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジカルテット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジカルテット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マジカルテット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランプ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランプ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランプ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トランプ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Kotoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiraishi_Tsumugi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitakami_Reika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "765MillionStars" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D/Zeal" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D/Zeal" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "毘沙門・弁天・大黒 from 七福神" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "毘沙門・弁天・大黒 from 七福神" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "毘沙門・弁天・大黒 from 七福神" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あそぼう♪夏休み" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あそぼう♪夏休み" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あそぼう♪夏休み" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "智絵里＆卯月 from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "智絵里＆卯月 from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート☆オペレーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート☆オペレーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーモンスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーモンスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーモンスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャポネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャポネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャポネスク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホルスの涙に魅入られた娘達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホルスの涙に魅入られた娘達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ホルスの涙に魅入られた娘達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜キラリ☆トリプルうさぎ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜キラリ☆トリプルうさぎ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜キラリ☆トリプルうさぎ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏音の紡ぎ手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏音の紡ぎ手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "夏音の紡ぎ手" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "竜宮小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "竜宮小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "竜宮小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春花魁" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春花魁" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "振袖の姫君" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "振袖の姫君" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "振袖の姫君" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もてなしめいどはん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もてなしめいどはん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美術館の客・ヨリコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エリカPとしゅがーはぁと" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エリカPとしゅがーはぁと" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "世界級の踊り子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "世界級の踊り子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "世界級の踊り子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "迫る怪鳥!・超☆実況レポ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "迫る怪鳥!・超☆実況レポ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "迫る怪鳥!・超☆実況レポ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハワイアンツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハワイアンツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファナティックバニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファナティックバニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファナティックバニーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛海の山岳救急隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛海の山岳救急隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛海の山岳救急隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "呉服屋の女将" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "呉服屋の女将" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バラエティ・マーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バラエティ・マーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バラエティ・マーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪の一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪の一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "流浪の一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "傘を掲げる二令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "傘を掲げる二令嬢" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハナコサン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy 7.27" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy 7.27" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy 7.27" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パイレーツ・ミサキ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "miraclesonic★expassion" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "miraclesonic★expassion" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "miraclesonic★expassion" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "miraclesonic★expassion" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドユニット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワンダークロックの精・ナツミ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンフラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンフラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンフラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンフラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サンフラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほのぼの？アニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほのぼの？アニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ほのぼの？アニマルズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オーシャン・レイダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オーシャン・レイダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オーシャン・レイダース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンブレイクタイム♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンブレイクタイム♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンブレイクタイム♪" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナツイチ・クノイチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナツイチ・クノイチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナツイチ・クノイチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり月夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり月夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "湯けむり月夜" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシープリズナーNo.1" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビートシューター with 光" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビートシューター with 光" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビートシューター with 光" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARCANA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARCANA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ARCANA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メロウ・イエロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メロウ・イエロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メロウ・イエロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デビリッシュゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デビリッシュゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デビリッシュゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デビリッシュゴシック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GIRLS BE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピスケス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinomiya_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピスケス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピスケス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "noctchill" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asakura_Toru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "noctchill" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Higuchi_Madoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "noctchill" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukumaru_Koito" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "noctchill" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichikawa_Hinana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "少女探偵・ミヤコ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "誘惑♪サキュバス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "誘惑♪サキュバス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トゥインクルリズム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トゥインクルリズム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トゥインクルリズム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーシーズン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーシーズン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サマーシーズン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "古の異国の令嬢と従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "古の異国の令嬢と従者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "わるい魔法少女隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "わるい魔法少女隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "商店街ハロウィン本部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "商店街ハロウィン本部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "商店街ハロウィン本部" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーバニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーバニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーバニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル海外協力隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル海外協力隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イカバラプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イカバラプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンク・ライツ・サーカス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンク・ライツ・サーカス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンク・ライツ・サーカス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティ・グールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティ・グールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プリティ・グールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プロジェクト・フェアリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プロジェクト・フェアリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プロジェクト・フェアリー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズネットワーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズネットワーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンヴァンパイア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンヴァンパイア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンヴァンパイア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitami_Yuzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お料理研究部～カフェオープン中～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お料理研究部～カフェオープン中～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お料理研究部～カフェオープン中～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆蘭子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆蘭子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マリンゴッデス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マリンゴッデス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愉快な魔界の仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愉快な魔界の仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愉快な魔界の仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北の魔女シノブ 危機一髪！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北の魔女シノブ 危機一髪！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "北の魔女シノブ 危機一髪！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドルミズキ with AS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドルミズキ with AS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドルミズキ with AS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・メモリアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・メモリアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・メモリアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スピリット・メモリアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "日本列島グルメぐり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "日本列島グルメぐり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "日本列島グルメぐり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紫陽京華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紫陽京華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紫陽京華" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春かくし芸" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春かくし芸" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春かくし芸" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドゥー・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドゥー・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェスタードール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akagi_Miria" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェスタードール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゲッサン_1" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゲッサン_1" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゲッサン_1" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゲッサン_1" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ゲッサン_1" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くるみちゃんを励ます会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くるみちゃんを励ます会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "くるみちゃんを励ます会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "飛翔伝説～第二章～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "飛翔伝説～第二章～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うぉーたーぱわー！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うぉーたーぱわー！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニュー・ワールド・オーダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニュー・ワールド・オーダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ニュー・ワールド・オーダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファイヤー☆ファイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファイヤー☆ファイヤー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美嘉と加蓮の卯月を可愛くし隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美嘉と加蓮の卯月を可愛くし隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "美嘉と加蓮の卯月を可愛くし隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "藍子＆未央 from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "藍子＆未央 from PM" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D・LOVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "D・LOVE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Minase_Iori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jus-2-Mint" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Jus-2-Mint" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "えもの狙いし同志" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "えもの狙いし同志" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "えもの狙いし同志" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "えもの狙いし同志" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシーサンタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Triad Primus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Triad Primus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Triad Primus" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートオブワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハートオブワールド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハロウィンウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダイヤ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダイヤ・ロワイヤル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もりさんくちゅあり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "もりさんくちゅあり" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuraba_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hachimiya_Meguru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuragi_Mano" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kashiwagi_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Honda_Mio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "THE IDOLM@STER FIVE STARS!!!!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tendo_Teru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クリスマスパーティー14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラベールツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クラベールツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スプリング・ピンクス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スプリング・ピンクス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スプリング・ピンクス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームホープスプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームホープスプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドリームホープスプリング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "JKと博士とフェニックス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "JKと博士とフェニックス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "JKと博士とフェニックス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒプノティックナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒプノティックナイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yagami_Makino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルームジャーニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルームジャーニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブルームジャーニー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロイヤル × ソーサレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロイヤル × ソーサレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロイヤル × ソーサレス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "とかちつくすZE☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Ami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "とかちつくすZE☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futami_Mami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋の大運動会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋の大運動会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋の大運動会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション13's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "神速一魂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akai_Suzaku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "神速一魂" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurono_Genbu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "動物さんチーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "動物さんチーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "動物さんチーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "動物さんチーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アップトゥデイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アップトゥデイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アップトゥデイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・うなどん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・うなどん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・うなどん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レジェンド・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ペットショップ・ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ペットショップ・ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ペットショップ・ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユイのゴーゴー☆盗賊団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユイのゴーゴー☆盗賊団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユイのゴーゴー☆盗賊団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜祭り's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜祭り's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momoi_Azuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜祭り's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "莉嘉と小梅のパーティーフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "莉嘉と小梅のパーティーフレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Charlotte・Charlotte" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Charlotte・Charlotte" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マグナウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マグナウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/不運なすれ違い\u2026?" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/不運なすれ違い\u2026?" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/不運なすれ違い\u2026?" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディナー＆イーター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディナー＆イーター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクドットバルーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクドットバルーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクドットバルーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピンクドットバルーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "壁サーの花" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "壁サーの花" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステキな商売人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステキな商売人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ステキな商売人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お屋敷の料理人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お屋敷の料理人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お屋敷の料理人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・スウィート・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・スウィート・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・スウィート・パーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリティッシュ・シノワズリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブリティッシュ・シノワズリ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スネーキーショーガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ganaha_Hibiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スネーキーショーガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スネーキーショーガール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ももべりー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カプリコーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カプリコーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カプリコーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シノヨシノ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シノヨシノ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュビーチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュビーチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フレッシュビーチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリルドスクエア 忍＆穂乃香" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フリルドスクエア 忍＆穂乃香" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kudo_Shinobu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリニティ・ボイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリニティ・ボイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリニティ・ボイス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "閃光☆HANABI団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "閃光☆HANABI団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "閃光☆HANABI団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "閃光☆HANABI団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "閃光☆HANABI団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絢爛優美" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絢爛優美" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "絢爛優美" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大宇宙の調停者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大宇宙の調停者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大宇宙の調停者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロマンティックツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロマンティックツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロマンティックツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namiki_Meiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロマンティックツアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルパーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルパーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アニマルパーク" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FRAME" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akuno_Hideo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FRAME" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Ryu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FRAME" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shingen_Seiji" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B.B" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "B.B" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnuma_Kurumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エレガントインモラリスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エレガントインモラリスト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミナヅキゴコロ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミナヅキゴコロ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミナヅキゴコロ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パラダイスリゾート 風香・礼子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パラダイスリゾート 風香・礼子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライトグリーンセーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライトグリーンセーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライトグリーンセーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ライトグリーンセーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あやかし絵巻" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あやかし絵巻" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Rosenburg Alptraum" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Rosenburg Alptraum" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hidaka_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ディアリースターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "崖っぷちな兵隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "崖っぷちな兵隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "崖っぷちな兵隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "楽園のマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "楽園のマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユッコのジャングル探検隊!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユッコのジャングル探検隊!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユッコのジャングル探検隊!!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった薬師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紺衣の乙姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紺衣の乙姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "紺衣の乙姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル決戦! ナターリアvs泉!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロピカル決戦! ナターリアvs泉!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "近所の仲良し娘たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "近所の仲良し娘たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "近所の仲良し娘たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "無邪気な座敷童" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "無邪気な座敷童" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "無邪気な座敷童" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "帰宅部の少女達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "帰宅部の少女達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "帰宅部の少女達" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロック・ザ・ビート with ウサミン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロック・ザ・ビート with ウサミン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロック・ザ・ビート with ウサミン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リコッタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リコッタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リコッタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リコッタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リコッタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アリス・パスト＆フューチャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はるのようせいさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はるのようせいさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "はるのようせいさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アトリエル・シエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アトリエル・シエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アトリエル・シエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokugawa_Matsuri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アトリエル・シエル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyao_Miya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクトメイド14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクトメイド14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクトメイド14's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レインドロップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レインドロップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レインドロップ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Age14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Age14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Age14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパニッシュスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパニッシュスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパニッシュスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパニッシュスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スパニッシュスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロストウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロストウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タイニーキメラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "タイニーキメラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイト・ディーヴァ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナイト・ディーヴァ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛の使者～ラヴ・エンジェルズ～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sato_Shin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "愛の使者～ラヴ・エンジェルズ～" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春天女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春天女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春天女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーチューン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーチューン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーチューン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルーヴィーチューン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "chicAAmor" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "chicAAmor" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "chicAAmor" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Julia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "chicAAmor" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワー・アソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワー・アソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワー・アソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストロベリーポップムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストロベリーポップムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mogami_Shizuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストロベリーポップムーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "桜舞隊" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーモニッククラウド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーモニッククラウド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハーモニッククラウド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー・ズーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー・ズーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セクシー・ズーパーティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "洞窟のガーディアン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "洞窟のガーディアン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "洞窟のガーディアン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "川辺の小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "川辺の小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "川辺の小悪魔" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・フラワーwithライラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・フラワーwithライラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・フラワーwithライラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リーフルダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リーフルダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラ☆サクラブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラ☆サクラブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラ☆サクラブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakano_Yuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イタリアンスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イタリアンスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "イタリアンスタイル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・月見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・月見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・月見酒" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "給仕係のポット＆クロック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "給仕係のポット＆クロック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋月涼＆水谷絵理" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ryo_876" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "秋月涼＆水谷絵理" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizutani_Eri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Reliable Lady" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Reliable Lady" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Reliable Lady" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウェービー・バケーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウェービー・バケーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウェービー・バケーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウェービー・バケーション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "飛翔伝説" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Helen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "飛翔伝説" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モリクボ家の人々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モリクボ家の人々" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LiPPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LiPPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LiPPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LiPPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "LiPPS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うさにゃん's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "うさにゃん's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガトリング☆ビーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガトリング☆ビーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "真の魔王・サナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マイーウ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マイーウ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マイーウ騎士団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・ポルカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・ポルカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・ポルカ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CDdebut仁奈友紀" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CDdebut仁奈友紀" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルヒーロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルヒーロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フライング♪ウェルカムサマー！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フライング♪ウェルカムサマー！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フライング♪ウェルカムサマー！" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お隣の学園からの使者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お隣の学園からの使者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お隣の学園からの使者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "☆スペーススターズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "☆スペーススターズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "☆スペーススターズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "☆スペーススターズ☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "祈りの乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クアドラ・パニッシャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クアドラ・パニッシャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クアドラ・パニッシャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クアドラ・パニッシャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クアドラ・パニッシャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界の予言者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界の予言者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界の予言者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "HappyHappyTwin" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "HappyHappyTwin" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "individuals" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morikubo_Nono" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "individuals" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "individuals" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レディビースト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レディビースト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユメミルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユメミルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユメミルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユメミルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yusa_Kozue" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユメミルガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界大幹部御一行様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akanishi_Erika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界大幹部御一行様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界大幹部御一行様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "魔界大幹部御一行様" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PRECIOUS*NIGHT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PRECIOUS*NIGHT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PRECIOUS*NIGHT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PRECIOUS*NIGHT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "PRECIOUS*NIGHT" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリック・オア・ショッピング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トリック・オア・ショッピング" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マハロ♪マハロ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マハロ♪マハロ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "マハロ♪マハロ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィートラヴァーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィートラヴァーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィルム・メモリアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フィルム・メモリアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ワールドダンサーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "雇われ傾奇者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "雇われ傾奇者" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタインデビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・レボリューション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スウィート・レボリューション" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハリキリ応援ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハリキリ応援ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハリキリ応援ガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "格上だわな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "格上だわな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "格上だわな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "手練れの剣客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "手練れの剣客" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアフルメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Seki_Hiromi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアフルメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuo_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ withほたる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ withほたる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ withほたる" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリーフィースト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリーフィースト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sajo_Yukimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フェアリーフィースト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アリエス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogami_Tamaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アリエス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonohara_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アリエス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵月花乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宵月花乙女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイカラサクラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイカラサクラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイカラサクラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハイカラサクラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トーキング・フラワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トーキング・フラワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トーキング・フラワーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルメファントム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルメファントム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あこ☆えみ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "あこ☆えみ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "越後小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "越後小町" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さつきの頃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さつきの頃" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Katagiri_Sanae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレラジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレラジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "デレラジ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スズホドラゴン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆凛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガール 卯月＆凛" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimamura_Uzuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Red-Solids" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Red-Solids" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サジタリアス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tokoro_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サジタリアス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maihama_Ayumu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サジタリアス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makabe_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツ☆マウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツ☆マウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スイーツ☆マウンテン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Munakata_Atsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プチ・シスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プチ・シスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "プチ・シスターズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ZWEIGLANZ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Leon" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ZWEIGLANZ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サクラブロッサム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パステル・カクテル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パステル・カクテル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パステル・カクテル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Souma_Natsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パステル・カクテル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manaka_Misato" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "誘惑イビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "誘惑イビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "誘惑イビル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティー・ビューティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティー・ビューティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーサウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーサウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーサウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Akizuki_Ritsuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハニーサウンド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ibuki_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nakatani_Iku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuramori_Kaori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Anna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shimabara_Elena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuda_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Satake_Minako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kinoshita_Hinata" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Momose_Rio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Sunshine Rhythm" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Nao" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンデッド × ソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンデッド × ソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takahashi_Reiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンデッド × ソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Namba_Emi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンデッド × ソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アンデッド × ソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小さな海賊団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "小さな海賊団" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "テンプテーション・アイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "テンプテーション・アイズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センシティブサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センシティブサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nitta_Minami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センシティブサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブラックソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ブラックソルジャー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！スペシャルフォース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！スペシャルフォース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ボスラッシュ！スペシャルフォース" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異郷の退魔師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異郷の退魔師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "異郷の退魔師" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シープガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シープガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シープガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koga_Koharu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "不気味空" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "不気味空" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanao_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "不気味空" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロワ・マキヤージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロワ・マキヤージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トロワ・マキヤージュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユニゾンデュエット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユニゾンデュエット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "梅雨のお掃除大作戦" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "梅雨のお掃除大作戦" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "梅雨のお掃除大作戦" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オマツリメイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オマツリメイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "オマツリメイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドBP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Araki_Hina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドBP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドBP" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TIP! TAP!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurihara_Nene" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TIP! TAP!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TIP! TAP!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダークイルミネイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ninomiya_Asuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ダークイルミネイト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった画家" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koseki_Reina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "時が止まった画家" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アナダルトレイティティド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Zaizen_Tokiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アナダルトレイティティド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamine_Noa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アナダルトレイティティド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルプレイヤーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "リトルプレイヤーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sasaki_Chie" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パープルプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kasuga_Mirai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パープルプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuda_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パープルプリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スプリング・スプラウト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スプリング・スプラウト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsuchiya_Ako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スプリング・スプラウト" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujii_Tomo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy Princess" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy Princess" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy Princess" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy Princess" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Happy Princess" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "DRAMATICSTARS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tendo_Teru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "DRAMATICSTARS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuraba_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "DRAMATICSTARS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kashiwagi_Tsubasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asano_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ピュアリーツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okuyama_Saori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "城のメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "城のメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "城のメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/そして誰もいなくなる\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Igarashi_Kyoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "GhostGame/そして誰もいなくなる\u2026" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichinose_Shiki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エクゼクティブクラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiryu_Tsukasa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エクゼクティブクラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "エクゼクティブクラス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・マニフィック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・マニフィック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サロン・マニフィック" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニーセレスティアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kobayakawa_Sae" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニーセレスティアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シャイニーセレスティアル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バンダースナッチさん" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トゥインクル☆トライスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トゥインクル☆トライスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トゥインクル☆トライスター" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さくらのぷに☆シェフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さくらのぷに☆シェフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Muramatsu_Sakura" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンクショナルビューティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンクショナルビューティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ファンクショナルビューティー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンター・F・ドライバーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンター・F・ドライバーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンター・F・ドライバーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Himekawa_Yuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルコマンダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルコマンダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルコマンダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aihara_Yukino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルコマンダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ロワイヤルコマンダー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitagawa_Mahiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BLACK PRINCESS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "BLACK PRINCESS" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miura_Azusa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お忍びの姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "お忍びの姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードメテオライツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードメテオライツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハードメテオライツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshii_Miki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takayama_Sayoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tenkubashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagayoshi_Subaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルキーウェイ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nikaido_Chizuru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トキメキバレンタイン'14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ijuin_Megumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トキメキバレンタイン'14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yao_Fueifuei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トキメキバレンタイン'14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yaguchi_Miu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "トキメキバレンタイン'14" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saionji_Kotoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "酒場の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohnishi_Yuriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メリクリ☆準備中!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukuyama_Mai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メリクリ☆準備中!" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大分スター☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "大分スター☆" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mimura_Kanako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochida_Arisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キューティーサマー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanase_Miyuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクテッド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクテッド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクテッド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セレクテッド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンが気がかりな仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komatsu_Ibuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンが気がかりな仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンが気がかりな仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kohinata_Miho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takagaki_Kaede" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kawashima_Mizuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Koshimizu_Sachiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "シンデレラガールズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズパワーツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Etou_Misaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ガールズパワーツイン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tsukimiya_Miyabi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルフィーユのキモチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルフィーユのキモチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミルフィーユのキモチ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kusakabe_Wakaba" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーフェクトサン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーフェクトサン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takatsuki_Yayoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パーフェクトサン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kikuchi_Makoto" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FOUR PIECE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FOUR PIECE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FOUR PIECE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saejima_Kiyomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "FOUR PIECE" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suzumiya_Seika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ペイパームーン・ラビット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ペイパームーン・ラビット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Rika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ペイパームーン・ラビット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルメ探検家ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルメ探検家ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グルメ探検家ご一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shibuya_Rin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "月夜の歌姫" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Togo_Ai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "新春コレクション12's" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ryuzaki_Kaoru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノープリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anastasia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノープリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Harada_Miyo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "スノープリンセス" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizumoto_Yukari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カラフルアソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カラフルアソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カラフルアソート" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アジイカコンブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asari_Nanami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アジイカコンブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ichihara_Nina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アジイカコンブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Eve_Santaclaus" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイドクイーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kiba_Manami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイドクイーンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おいしい秋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おいしい秋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "おいしい秋" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hoshi_Syoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレンジテイル2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレンジテイル2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ストレンジテイル2016" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyamoto_Frederica" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗魔術師・セツナ＆レナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imura_Setsuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "怪盗魔術師・セツナ＆レナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Clover" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kitazawa_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Clover" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kousaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Clover" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yabuki_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Clover" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hakozaki_Serika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンを助けたい仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アラジンを助けたい仲間たち" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "＊withなつなな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Maekawa_Miku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "＊withなつなな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tada_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "＊withなつなな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kimura_Natsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "＊withなつなな" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Abe_Nana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カフェ・ワンダーランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カフェ・ワンダーランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "カフェ・ワンダーランド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Makihara_Shiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒーロー＆ヒーロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nanjo_Hikaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヒーロー＆ヒーロー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル百物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル百物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル百物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Furusawa_Yoriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル百物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Manabe_Itsuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "アイドル百物語" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakabayashi_Tomoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "evergreen-festa" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "evergreen-festa" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "evergreen-festa" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sagisawa_Fumika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "evergreen-festa" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "evergreen-festa" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yoshioka_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花屋の花娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ebihara_Naho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "花屋の花娘" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takamori_Aiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "侍シューコ御一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "侍シューコ御一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiomi_Syuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "侍シューコ御一行" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamakawa_Ayuna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイド 翠・レナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hyodo_Rena" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ビーチサイド 翠・レナ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuno_Midori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレヨン☆バタフライ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kishibe_Ayaka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "クレヨン☆バタフライ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakakibara_Satomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナチュラル・リーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナチュラル・リーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Jougasaki_Mika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ナチュラル・リーフ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Narumiya_Yume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヴァイキングスター＆クイーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ariura_Kanna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ヴァイキングスター＆クイーン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パイレーツ・シノ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク☆華☆ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク☆華☆ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakiyama_Tamami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク☆華☆ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hamaguchi_Ayame" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "センゴク☆華☆ランブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shuto_Aoi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャプテン・ユイ＆パイレーツ・シノ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohtsuki_Yui" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "キャプテン・ユイ＆パイレーツ・シノ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hiiragi_Shino" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春のご飯パン祭り" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春のご飯パン祭り" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hino_Akane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パストデイズ・シンガーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nagatomi_Hasumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パストデイズ・シンガーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujiwara_Hajime" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "パストデイズ・シンガーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ with 晴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tachibana_Arisu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ with 晴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Murakami_Tomoe" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "レッドベリィズ with 晴" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yuuki_Haru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノール・ディ・ダーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aikawa_Chinatsu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ノール・ディ・ダーム" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kurokawa_Chiaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "厄祓いの巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamijo_Haruna" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "厄祓いの巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Domyoji_Karin" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "厄祓いの巫女" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mitsumine_Yuika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Izumi_Mei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fukumaru_Koito" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Morino_Rinze" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yukoku_Kiriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kazano_Hiori" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Tanaka_Mamimi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Team.Luna" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Osaki_Tenka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コーラルスターフィッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shijou_Takane" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コーラルスターフィッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Emily_Stewart" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コーラルスターフィッシュ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Handa_Roco" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミス・フォーチュン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiragiku_Hotaru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ミス・フォーチュン" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウンドウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Umeki_Otoha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウンドウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サウンドウィッチーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsunaga_Ryo" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Crystal Shadow" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Crystal Shadow" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Crystal Shadow" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン反省会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン反省会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hattori_Toko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "バレンタイン反省会" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mifune_Miyu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コットン・ラビッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コットン・ラビッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Totoki_Airi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "コットン・ラビッツ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TORICO" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Amami_Haruka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TORICO" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kisaragi_Chihaya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "TORICO" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hagiwara_Yukiho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドーリードール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Okazaki_Yasuha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドーリードール" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kirino_Aya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユア・フレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Natalia" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユア・フレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kate" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ユア・フレンズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の診療所" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "森の診療所" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yanagi_Kiyora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハンドレッドロア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinohara_Rei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ハンドレッドロア" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・フラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shiina_Noriko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "チーム・フラワー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohara_Michiru" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "華美人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohta_Yuu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "華美人" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Straylight" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mayuzumi_Fuyuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Straylight" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Serizawa_Asahi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "Straylight" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Izumi_Mei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さざ波の舞花" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Egami_Tsubaki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "さざ波の舞花" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishijima_Kai" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルト・チョコ・ポット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yokoyama_Chika" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルト・チョコ・ポット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Niwa_Hitomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルト・チョコ・ポット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Wakui_Rumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "メルト・チョコ・ポット" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "IZUMI feat.AKIHA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ikebukuro_Akiha" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "IZUMI feat.AKIHA" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ohishi_Izumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グロリアス・コード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "グロリアス・コード" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mochizuki_Hijiri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizuki_Seira" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "セーラーマリナー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsumoto_Sarina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "一杏二きらり三茄子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Takafuji_Kako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "一杏二きらり三茄子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Futaba_Anzu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "一杏二きらり三茄子" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Moroboshi_Kirari" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンド・アンド・ウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Saito_Yoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンド・アンド・ウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sawada_Marina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ウィンド・アンド・ウェーブ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sugisaka_Umi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドラゴンとマミー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ueda_Suzuho" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ドラゴンとマミー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nonomura_Sora" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CafeParade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kamiya_Yukihiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CafeParade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shinonome_Soichiro" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CafeParade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Asselin_BB_2" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CafeParade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Uzuki_Makio" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "CafeParade" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mizushima_Saki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェミニ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Suou_Momoko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェミニ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Toyokawa_Fuka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジェミニ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Baba_Konomi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宮城親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ayase_Honoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宮城親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakuma_Mayu" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "宮城親善大使" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モノクロームリリィ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayami_Kanade" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "モノクロームリリィ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hojo_Karen" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイキック収穫娘 with ユウキ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Otokura_Yuuki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "サイキック収穫娘 with ユウキ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hori_Yuko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "R・P・G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ujiie_Mutsumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "R・P・G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Miyoshi_Sana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "R・P・G" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yamato_Aki" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "島津義弘・浅井長政" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aino_Nagisa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "島津義弘・浅井長政" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Nishikawa_Honami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蘭子＆智絵里 from ブライダル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Ogata_Chieri" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "蘭子＆智絵里 from ブライダル" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Kanzaki_Ranko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワービーチマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Aiba_Yumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワービーチマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Fujimoto_Rina" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "フラワービーチマーメイド" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mukai_Takumi" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "まごころショコラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Oikawa_Shizuku" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "まごころショコラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Clarice" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "まごころショコラ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Sakurai_Momoka" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラフ＆フィアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matoba_Risa" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラフ＆フィアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Hayasaka_Mirei" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ラフ＆フィアーズ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Shirasaka_Koume" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャポネスク・フェスタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Cathy_Graham" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャポネスク・フェスタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Mary_Cochran" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "ジャポネスク・フェスタ" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Layla" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "りるすたー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Anzai_Miyako" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "りるすたー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Imai_Kana" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "りるすたー" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsubara_Saya" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春姫演舞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Komuro_Chinami" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春姫演舞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Matsuyama_Kumiko" }
		} ,
		{
		  "unit": { "type": "literal" , "value": "春姫演舞" } ,
		  "member": { "type": "uri" , "value": "https://sparql.crssnky.xyz/imasrdf/RDFs/detail/Yorita_Yoshino" }
		}
	  ]
	}
  };

/*
ユニット名→メンバーの変換辞書
{
	春姫演舞: [小室千奈美, 松山久美子, 依田芳乃],
	りるすたー: [安斎都, 今井加奈, 松原早耶],
}
*/
let unit2members = {};
for (let item of sparql_units.results.bindings){
	const unit_name = item.unit.value;
	const members = unit2members[unit_name];
	const idol = uri2idol[item.member.value];
	if(members){
		unit2members[unit_name].push(idol);
	} else {
		unit2members[unit_name] = [idol];
	}
}