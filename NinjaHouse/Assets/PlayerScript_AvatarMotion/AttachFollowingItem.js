// 各プレイヤーに追従するアイテムのID
const followingItemId = new ItemTemplateId("9040d8d2-d534-480f-8f49-d883fd2ca5f5");

$.onStart(() => {
    $.state.attachedPlayers = [];
});

$.onUpdate((deltaTime) => {
    // 適用済みプレイヤーの一覧
    // 居なくなったプレイヤーをfilterで除外
    let attachedPlayers = $.state.attachedPlayers.filter(player => player.exists());

    // ワールド内の全プレイヤーのうち、適用済み一覧に入っていないプレイヤーを取得
    let players = $.getPlayersNear($.getPosition(), Infinity);
    let playersToAttach = players.filter(player => !attachedPlayers.some(attachedPlayer => attachedPlayer.id === player.id));

    playersToAttach.forEach(player => {
        // 各プレイヤーに追従するアイテムを生成
        let followingItem = $.createItem(followingItemId, player.getPosition(), player.getRotation());

        // 生成したアイテムに追従対象プレイヤーを登録
        followingItem.send("RegisterPlayer", player);

        // 適用済みプレイヤーに追加
        attachedPlayers.push(player);
    });

    $.state.attachedPlayers = attachedPlayers;
});