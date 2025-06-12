const PagePrint = ({data,setCurpage}) => {
    let totalpage=data.totalpage
    let startPage=data.startPage
    let endPage=data.endPage

    const prev=()=>{
        setCurpage(startPage-1)
    }
    const next=()=>{
        setCurpage(endPage+1)
    }

    const pageChange=(page)=>{
        setCurpage(page)
    }

    // 페이지 작업
    let arr=[]
    if(startPage>1)
    {
        arr.push(<li><a className={"nav-link"} onClick={prev}>&lt;</a></li> )
    }
    for(let i=startPage;i<=endPage;i++){
        if(i==data.curpage)
        {
            arr.push(<li className={"active"}><a className={"nav-link"} onClick={()=>pageChange(i)}>{i}</a></li> )
        }
        else
        {
            arr.push(<li><a className={"nav-link"} onClick={()=>pageChange(i)}>{i}</a></li> )
        }

    }
    if(endPage<totalpage)
    {
        arr.push(<li><a className={"nav-link"} onClick={next}>&gt;</a></li> )
    }

    return (
        <ul className={"pagination"}>
            {arr}
        </ul>
    )

}

export default PagePrint;