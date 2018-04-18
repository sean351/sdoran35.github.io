
function startStream(playerWidth, playerHeigth, channelName)
{
    var options = {
        width: playerWidth,
        height: playerHeigth,
        channel: channelName,
    };
    var player = new Twitch.Player("SamplePlayerDivID", options);
    player.setVolume(0.5);
}

