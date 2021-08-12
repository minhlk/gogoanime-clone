import {useLocation} from "react-router-dom";
import {getDetailPlayer} from '../Api/fetchGogo'
import React, { useState, useEffect } from 'react';

function Detail() {
    let url = useLocation()?.state?.url
    const [videoUrl, setVideoUrl] = useState([]);
    useEffect(() => {
        (async () => {
            let videoUrl = await getDetailPlayer(url)
            setVideoUrl(videoUrl);
        })();
    }, [url]);

    //TODO: handle cors here
    return (
        <div>
            {/* <video width="1280" height="720" controls> */}
                {/* <source src={videoUrl} type="video/mp4"/> */}
            {/* </video> */}
            <iframe src={videoUrl} height="1280" width="720" title="Iframe Example"></iframe>
        </div>
    )
}

export default Detail;