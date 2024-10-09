// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("a1346146-1701-4b89-95f4-260d6bac843e");

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

