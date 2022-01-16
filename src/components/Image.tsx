import { Tooltip } from '@mui/material';
import  { FC, useEffect, useState } from 'react'
import { ImageModal } from './Imagemodal';
interface IProps {
    url: string,
    alt: string,
    [prop: string]: any
}
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}
export const Image: FC<IProps> = ({ url, alt, className, stopAnimation, ...props }) => {
    const [shouModal, setShowModal] = useState<boolean>(false)
    useEffect(()=>{
        enableScrolling()
        return ()=>{
            disableScrolling()
        }
    },[])
    return (
        <>
            <ImageModal {...props} url={url} show={shouModal} setShow={(b: boolean) => {
                setShowModal(b)
                stopAnimation(true)
            }} />
            <Tooltip placement="top" title="Click for zoom">
            <img
                style={{cursor:'pointer'}}
                onClick={() => {
                    stopAnimation(false)
                    setShowModal(true)
                }} className={className} {...props} alt={alt} src={url} />
            </Tooltip>
            
        </>
    )
}
