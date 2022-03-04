import React,{useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //use state to render all the robots on to BOTCOLLECTION

  const [bots, setBots] = useState([])

  //uste state to render single bot in YOURBOTARMY

  const [singleBot, setSingleBot] = useState([])

  //fetch date from json
  useEffect(() =>{
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(botsArray => {
      console.log("Bots Here:", botsArray)
      setBots(botsArray)
  })
  },[])

  // use find to iterate and get bot
  
  function addBot(newBot) {
    const addingBot = singleBot.find(bot => bot.id === newBot.id)
    if (!addingBot) return setSingleBot([...singleBot, newBot])
    
  }


  //use filter to iterate and remove a bot from YourBotArmy
    
  function removeBot(newBot) {
      const removingBot = singleBot.filter(bot => bot.id !== newBot.id)
      setSingleBot(removingBot)
      
    }


    //  DELETE DATA FROM THE DBJSON
    function deleteBot(newBot) {
      //use fetch to delete data from DBJSON
      fetch(`http://localhost:8002/bots/${newBot.id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(() => {
        setBots(bots.filter(bot => bot.id !== newBot.id))
      })

      removeBot(newBot)
    }

  return (
    <div>
      <YourBotArmy singleBot={singleBot} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} addBot={addBot} deleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
