import React from 'react'
import useWindowStore from "#store/Window.js";
import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Images = () => {
    const {window}=useWindowStore();
    const data=window.imgfile?.data;
    if(!data) return null;
    const {name, imageUrl} = data;
    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2>{name}</h2>
            </div>
            <div className="p-5 bg-white">
                {imageUrl ?(
                    <div className="w-full">
                        <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded"/>

                    </div>
                ):null}
            </div>
        </>
    )
}
const ImageWindow=WindowWrapper(Images,"imgfile");
export default ImageWindow;
