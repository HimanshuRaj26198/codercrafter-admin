"use client"
import Color from "@tiptap/extension-color";
import "./style.css";
import { useRef, useState } from "react";
import axios from "axios";
const MetaData = ({ addMetaData, closeMetaData }) => {
    const ogTitle = useRef(null);
    const ogDesc = useRef(null);

    const [ogImg, setOgImg] = useState("");
    const [ogFileName, setOgFilename] = useState("Click to upload a file!")

    const twitterTitle = useRef(null);
    const twitterDesc = useRef(null);

    const [twitterImg, setTwitterImg] = useState("");
    const [twitterFileName, setTwitterFilename] = useState("Click to upload a file!")

    const handleImageUpload = async (event, setImg, setFileName) => {
        try {
            const file = event.target.files[0]
            const formData = new FormData();
            formData.append("image", file);
            let response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/image/upload`, formData);
            setImg(response.data.imgUrl);
            setFileName(file.name);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { ogTitle: ogTitle.current.value, ogDesc: ogDesc.current.value, ogImg, twitterTitle: twitterTitle.current.value, twitterDesc: twitterDesc.current.value, twitterImg };
        addMetaData(obj);
        handleClose();
    }

    const handleClose = () => {
        closeMetaData(false);
    }

    return <>
        <section className="popup_container" >
            <div className="metadata_popup" >
                <span style={{ textAlign: "right" }} >< p style={{ color: "red", cursor: "pointer" }} onClick={handleClose} >Close</p></span>

                <h2>Additional MetaData</h2>
                <div>
                    <form onSubmit={handleSubmit} className="metadata_form" >
                        <div className="input_container" >
                            <label>Opengraph Title</label>
                            <input ref={ogTitle} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Opengraph Description</label>
                            <input ref={ogDesc} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Opengraph Image</label>
                            <label className="file_input">
                                <span className="file_label">{ogFileName}</span>
                                <input type="file" onChange={(event) => handleImageUpload(event, setOgImg, setOgFilename)} />
                            </label>
                        </div>
                        <div className="input_container" >
                            <label>Twitter Title</label>
                            <input ref={twitterTitle} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Twitter Description</label>
                            <input ref={twitterDesc} type="text" />
                        </div>
                        <div className="input_container" >
                            <label>Twitter Image</label>
                            <label className="file_input">
                                <span className="file_label">{twitterFileName}</span>
                                <input type="file" onChange={(event) => handleImageUpload(event, setTwitterImg, setTwitterFilename)} />
                            </label>
                        </div>
                        <div className="action_container" >
                            <button type="submit" >Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}


export default MetaData;