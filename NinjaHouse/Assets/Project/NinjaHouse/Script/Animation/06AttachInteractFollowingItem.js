// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("ce2064f5-b4af-4f02-8054-0486c23f35b5");

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

