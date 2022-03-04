import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBot, deleteBot}) {
  //use map to display all the bots information
  const botsDisplay= bots.map(bot =>{
    return <BotCard key={bot.id} bot={bot} onClick={addBot} deleteBot={deleteBot} /> 
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botsDisplay}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
