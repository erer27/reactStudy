import {Fragment, useState} from "react";

function App2()
{
    return (
        <Fragment> {/*임시 루트 역할 수행*/}
            <Header/>
            <h1>Hello React</h1>
            <Footer/>
        </Fragment>
    )
}
function Header()
{
    return (
        <h1>Header(메뉴)</h1>
    )
}
function Footer()
{
    return (
        <h1>Footer</h1>
    )
}
export default App2;