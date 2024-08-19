import React, {useEffect, useState} from "react"

export default function LoaderIOS(){
    const [text, setText] = useState('')
    const [showImg, setShowImg] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setText('Cargando ...')
        }, 3000);
    },[])

    return (
        <>
            <div id="loaderIOS">
                {
                    showImg ? (
                        <img src="./appleLogo.png"/>
                    ):(
                        ""
                    )
                }
            </div>
        </>
    )
}