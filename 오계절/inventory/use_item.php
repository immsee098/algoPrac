<?php
include_once('./_common.php');

if($url) { 
	$return_url = urldecode($url);
} else {
	$return_url = "./viewer.php?ch_id=".$ch_id;
}

$in = sql_fetch("select * from {$g5['inventory_table']} inven, {$g5['item_table']} item where inven.in_id = '{$in_id}' and inven.it_id = item.it_id");

if($in['ch_id'] == $character['ch_id']) {
	$ch = $character;
} else {
	$ch = get_character($in['ch_id']);
}

if(!$in['in_id']) { 
	echo "<p>아이템 보유 정보를 확인할 수 없습니다.</p>";
} else {
	switch($in['it_type']) {
		case "프로필수정" :
			echo "LOCATIONURL||||".G5_URL."/mypage/character/character_form.php?w=u&ch_id=".$in['ch_id']."&in_id=".$in['in_id']."&url=".$url;
		break;
		
		case "아이템추가" :
			// 개인 아이템 추가
			include('./inc/add_item_form.php');
		break;

		case "스탯회복" :
			set_status($ch['ch_id'], $in['st_id'], ($in['it_value'] * -1));
			delete_inventory($in['in_id'], $in['it_use_ever']);
			echo "LOCATIONURL||||".$return_url;
		break;

		case "뽑기" : 
			$result = get_item_explo($in['ch_id'], $in['it_id']);
			delete_inventory($in['in_id'], $in['it_use_ever']);

			if($result['it_name']) {
				alert("『{$result['it_name']}』 획득 성공!");
			} else {
				alert("아무것도 획득하지 못했습니다.", $return_url."&amp;tabs=i");
			}
		break;

		default:
			delete_inventory($in['in_id'], $in['it_use_ever']);
			echo "LOCATIONURL||||".$return_url;
		break;
	}
} ?>