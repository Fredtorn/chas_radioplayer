// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>


const mainContainerEl = document.getElementById("mainContainer");

fetch("https://api.sr.se/api/v2/channels/?format=json")
    .then((response) => {
        return response.json();
    })

    .then((data) => {

        console.log(data)

        const myData = data;  // Samlar all data från json i en variabel.

        myData.channels.forEach((channel) => {  //Skapar en funktion som hämtar

            const bodyEl = document.createElement("div")
            const imgEl = document.createElement("img")
            const titleEl = document.createElement("h2")
            const audioEl = document.createElement("audio")
            const audioSourceEl = document.createElement("source")

            bodyEl.setAttribute("class", "mainBody")
            imgEl.setAttribute("src", `${channel.image}`)
            imgEl.setAttribute("alt", `${channel.name}`)
            titleEl.setAttribute("class", "title")
            audioEl.setAttribute("class", "audioEl")
            audioSourceEl.setAttribute("src", `${channel.liveaudio.url}`)
            audioSourceEl.setAttribute("type", "audio/mpeg")
            audioSourceEl.setAttribute("type", "audio/ogg")


            audioEl.controls = true;

            titleEl.textContent = channel.name;
            bodyEl.style.backgroundColor = `#${channel.color}`

            mainContainerEl.appendChild(bodyEl);
            bodyEl.appendChild(imgEl);
            bodyEl.appendChild(titleEl)
            bodyEl.appendChild(audioEl)
            audioEl.appendChild(audioSourceEl)

        })
    })