// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("4e428a83-47d5-42b7-892d-1447000a8e39");

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

