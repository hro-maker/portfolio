import React, { FC } from 'react'

interface IProps { url: string, show: boolean, setShow: any, [prop: string]: any }
export const ImageModal: FC<IProps> = ({ url, show, setShow, ...props }) => {
    return (
        <>
            {show && <div onClick={() => setShow(false)} className="image-modal flex-center">
                    <div className="close">
                        &times;
                    </div>
                <img
                    {...props}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    src={url}
                    alt={url}
                />
            </div>
            }
        </>

    )
}
