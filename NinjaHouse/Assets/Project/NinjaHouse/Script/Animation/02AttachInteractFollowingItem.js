// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("2f2485c7-8d84-43d6-b70a-e497719edbbe");

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

