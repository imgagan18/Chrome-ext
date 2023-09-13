async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=f744375b-684a-4906-8b89-a7eb8609eebc&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;
      const matchlist = data.data;
      if (!matchlist) return [];

      const releventdata = matchlist.map(
        (match) => `${match.name} , ${match.status}`
      );
      console.log({ releventdata });

      document.getElementById("matches").innerHTML = releventdata
        .map((match) => `<li>${match} </li>`)
        .join("");
      return releventdata();
    })

    .catch((e) => console.log(e));
}
getMatchData();
