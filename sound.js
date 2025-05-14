const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  Drowning: { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  Whiplash: { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  HOT: { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};

const listEl = document.getElementById("list");

function list () {
  for (let i = 0; i < songList.length; i++) {
    
    const listitem = document.createElement('li');
    listitem.classList.add("list-group-item");
    console.log(songList[i]);
    listitem.textContent = `${songList[i]}`

    listEl.appendChild(listitem);
  }
}

function infoList() {
  console.log(songDetails.property);

  for (let i = 0; i < songDetails.length; i++) {
    console.log(songDetails[i]);
    for(let j = 0; i < songDetails.length; i++){
      console.log(songDetails[Drowning][j]);
    }
    // console.log(i);
    // const list = document.getElementById("infoList");
    // console.log(list);
    
    // const listItem = document.createElement('li');
    // console.log(listItem);
    // listItem.classList.add("list-group-item");
    // listItem.innerHTML = `${songDetails[i]}`

    // console.log(listItem);

    // list.appendChild(listItem);
  }
}