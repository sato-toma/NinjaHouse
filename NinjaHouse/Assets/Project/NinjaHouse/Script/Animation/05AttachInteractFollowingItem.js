// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("608dded6-b79a-4969-88d0-d309fdb4b764");

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

