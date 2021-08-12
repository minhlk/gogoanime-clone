import axios from 'axios';
import cheerio from 'cheerio';
const HOME_URL = 'https://gogoanime.pe';

const getHomeData = async () => {
    let html = await axios.get(HOME_URL)
    const $ = await cheerio.load(html.data);
    const data = [];    
    $(".items > li .img a").each((i,elem) => {
        data.push({
            image: $(elem).find("img").attr('src'),
            title: $(elem).attr('title'),
            link: HOME_URL + $(elem).attr('href')
        })
    })
    return data;
}

const getDetailPlayer = async (url) => {
    let html = await axios.get(url)
    let $ = await cheerio.load(html.data);

    let playerUrl = $('.play-video iframe').attr('src')
    playerUrl = playerUrl.replace('streaming.php', 'loadserver.php')
    return playerUrl;
    //TODO: By pass cors here
    html = await axios.request(
        {
            url: playerUrl,
            method: 'get',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
        })
        console.log(html)
    $ = await cheerio.load(html.data);
    let videoUrl = $('video')?.attr('src');
    return videoUrl;
}

export {
    getHomeData,
    getDetailPlayer
};