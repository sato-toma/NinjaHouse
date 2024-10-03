// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("9f88e66b-3835-4bf3-81fa-e984bdc9c7e9");

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

