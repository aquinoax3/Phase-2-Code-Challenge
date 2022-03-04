import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({singleBot, removeBot, deleteBot}) {
  //use map to display single bot information

  const botArmy = singleBot.map(bot =>{
    return <BotCard key={bot.id} bot={bot} onClick={removeBot} deleteBot={deleteBot} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
