// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("c2f9262d-5ba7-4a4f-821c-d6214c765159");

$.onInteract(player => {
    try {
        // 各プレイヤーに追従するアイテムを生成
        let followingItem = $.createItem(followingItemId, player.getPosition(), player.getRotation());

        // 生成したアイテムに追従対象プレイヤーを登録
        followingItem.send("RegisterPlayer", player);
    } catch (e) {
        // 例外処理
        $.log(e);
    }
})

