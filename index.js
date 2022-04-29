
const setPopular = async ()=>{
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyC5DixyDAL98Xsix1FLTkYXuvGemoafyMk`);
    let data = await res.json();
    showData(data.items);
}

const search = async (e)=>{
    if(e.key==="Enter"){
        let query = document.getElementById("search").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&maxResults=20&key=AIzaSyC5DixyDAL98Xsix1FLTkYXuvGemoafyMk`);
        let data = await res.json();
        console.log(data.items);
        showData(data.items);
        return data.items;
    }
}


const showData = (data)=>{
    let div_p = document.getElementById('content');
    div_p.innerHTML = '';
    for (video of data) {
        let div = document.createElement("div");
        div.className = `video`;
        div.setAttribute(`data.video`,video.id.videoId);
        let title = document.createElement("p");
        title.innerText = video.snippet.title;
        let channel = document.createElement("small");
        channel.innerText = video.snippet.channelTitle;
        let img = document.createElement("img");
        img.src = video.snippet.thumbnails.medium.url;
        div.append(img, title, channel);
        div_p.append(div);
    }
    playVideo();
}

const playVideo = ()=>{
    let divs = document.getElementsByClassName("video");
    for(let i=0;i<divs.length;i++){
        let div = divs[i];
        div.addEventListener("click", ()=>{
            let video_id = div.getAttribute("data.video");
            localStorage.setItem('video_id', video_id);
            window.location.href = './player.html';
        })
    }
}

setPopular();
