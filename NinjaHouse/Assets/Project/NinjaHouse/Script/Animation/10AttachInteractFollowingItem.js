// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("e8d8b43c-7c24-4cdd-8bc4-ef4ea8c8f5cd");

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

