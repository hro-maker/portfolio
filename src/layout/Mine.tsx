import {Children, ReactChildren, ReactChild, FC } from "react";

interface MainLayoutProps{
    children: ReactChild | ReactChildren;
}
 const  MainLayout:FC<MainLayoutProps>=(props:MainLayoutProps)=> {
    return <div className="container  flex-center">
        {
            Children.map(props.children, (el) => el)
        }
    </div>
}
export default MainLayout