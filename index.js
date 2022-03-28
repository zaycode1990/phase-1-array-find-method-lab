
  function superbowlWin(record) {
const win = record.find(function(game){
    return game.result === "W"
})
if (win){
    return win.year
}
else{
    return undefined
}
} 
  



