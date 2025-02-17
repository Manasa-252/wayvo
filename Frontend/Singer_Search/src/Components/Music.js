import React, {useState} from 'react';
function Music(){
    let [Artist, setArtist] = useState("");
    let [Name, setName] = useState("");
    let [img, setImg] = useState("");
    let [followers, setFollowers] = useState("");

    const submitHandler = (event)=>{
        event.preventDefault();
        fetchArtist(Artist);

    }    
    async function fetchArtist(Artist){
        try{
            const res = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${Artist}`);
            const data = await res.json();
            console.log(data.artists.items[0].name);
            setName(data.artists.items[0].name);
            setImg(data.artists.items[0].images[1].url);
            setFollowers(data.artists.items[0].followers.total);
        }
        catch(err){
            console.log("Error occured: "+err);
        }
    }
    const output = ()=>{
        if(Name){
            return(
                <div className='output'>
                <h1>{Name}</h1>
                <img src={img} alt='Artist img' />
                <p>Followers: {followers}</p>
                </div>
            )
        }
    }
    return(
        <>
        <div className='music'>
            <form onSubmit={submitHandler} id='form'>
                <h1>Music Player</h1>
                <div class='input'>
                    <input type="text" placeholder="Enter Name of the Artist" value={Artist} onChange={(event)=>setArtist(event.target.value)}/>
                    <button type="submit">Search</button>
                </div>
            </form>
            
        </div>
        {output()}
        </>
    );
}

export default Music;