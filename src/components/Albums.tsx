import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {album} from "../../index";


export default function Albums() {
    const [albums, setAlbums] = useState<album[]>()
    const [newNumber, setNumber] = useState();

    function getAlbums() {
        axios.get('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=9')
            .then(response => setAlbums(response.data))
    }

    useEffect(() => {
        localStorage.setItem("albums", JSON.stringify(albums))
    }, [albums]);

    useQuery({
        queryKey: ["album"],
        queryFn: getAlbums
    })
    const deleteAlbum = (albumId: number) =>{
        setAlbums(albums?.filter(album => album.id !== albumId))
    }
    const saveOrder = () => {
        localStorage.setItem("albums", JSON.stringify(setNumber))
    }
    return (
        <div>{albums?.map(album =>
            <div key={album.id}
                 className="text-lg md:text-xl lg:text-2xl flex flex-col justify-center items-center m-5 border-double border-black border-4 w-[25%] h-[45%]">
                <form>
                    <input className="border-solid border-black border-2"></input>
                </form>
                <br/>
                <p> User ID: {album.userId} </p>
                <p>ID: {album.id} </p>
                <p> Title: {album.title} </p>
                <br/>
                <button className="bg-gray-300 border-solid border-black border-2"
                        onClick={() => deleteAlbum(album.id)}>DELETE
                </button>
            </div>)}
            <div className="flex justify-center items-center">
                <button className="bg-gray-300 border-solid border-black border-2 h-10 px-20" onClick={saveOrder}>Save Order</button>
            </div>
        </div>
    )
}
