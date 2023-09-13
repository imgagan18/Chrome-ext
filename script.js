async function getMatchData(){
  return await fetch ("https://api.cricapi.com/v1/currentMatches?apikey=f744375b-684a-4906-8b89-a7eb8609eebc&offset=0")
  .then(data =>data.json())
  .then(data => {
    if(data.status !="success")return;
      })
}
getMatchData();