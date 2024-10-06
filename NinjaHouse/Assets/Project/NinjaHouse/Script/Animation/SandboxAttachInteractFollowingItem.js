// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("fd2a88f1-d613-4430-9df4-3cbc1ade9095");

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

