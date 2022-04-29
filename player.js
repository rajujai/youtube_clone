
const showData = ()=>{
    let videoId = localStorage.getItem('video_id');
    let video = document.createElement('div');
    video.innerHTML = `<iframe id="ytplayer" type="text/html" width="720" height="405"
    src="https://www.youtube.com/embed/${videoId}?autoplay=1"
    frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">`
    document.getElementById('content').append(video);
}

showData();
