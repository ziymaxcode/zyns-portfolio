import React from 'react'
import useWindowStore from "#store/Window.js";
import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
const Text = () => {
    const {window}=useWindowStore();
    const data=window.txtfile?.data;
    if(!data) return null;
    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile"/>
                <h2>{name}</h2>
            </div>
            <div className="p-5 space-y-6 bg-white">
                {image ? (
                    <div className="w-full">
                        <img src={image} alt={name} className="w-full h-auto rounded"/>
                    </div>
                ):null}
                {Array.isArray(description)&&description.length>0 ? (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx)=>(
                            <p key={idx}>{idx}</p>
                        ))}
                    </div>
                ):null}
            </div>

        </>
    )
}
const TextWindow=WindowWrapper(Text,"txtfile");
export default TextWindow
