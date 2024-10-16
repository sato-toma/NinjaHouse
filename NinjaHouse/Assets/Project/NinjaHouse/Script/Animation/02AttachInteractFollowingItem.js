// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("fccf7ba4-bccc-488e-ab46-e31c57fa347d");

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

