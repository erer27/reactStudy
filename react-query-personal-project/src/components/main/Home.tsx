import {Fragment,useState,useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import apiClient from "../../http-commons";
import {Product} from "../../types";
interface MainData {
    SC:Product[];
    CL:Product[];
    MU:Product[];
}
function Home(){
    const {isLoading,isError,error,data}=useQuery<{data:MainData},Error>({
        queryKey:["main-data"],
        queryFn:async () => await apiClient.get("/main")
    })
    if(isLoading)
        return <h1 className="text-center">서버에서 데이터 전송 지연....</h1>;
    if(isError)
        return <h1 className={"text-center"}>{error?.message}</h1>

    console.log(data?.data); //undefined가 아니면 data.data && => data가 null이 아니면
    return (
        <Fragment>
            <div style={{"display":"flex",
                "flexDirection": "column",
                "justifyContent": "center", /* 수평 정렬 */
                "alignItems": "center"     /* 수직 정렬 */}}>
            <div
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL}/img/banner.jpg)`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat",
                     width: "100%",
                     height: "800px", // 원하는 높이로 조절
                     color: "white",  // 필요 시 텍스트 색 변경
                     position:"relative"
                 }}>
                <div
                    className={"br"}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "64px", // 대문짝만하게
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                    }}
                >
                    Pure Heals
                    <div
                        className={"br"}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, 90%)",
                            color: "white",
                            fontSize: "24px", // 대문짝만하게
                            whiteSpace: "nowrap",
                        }}
                    >
                        by nature village
                    </div>
                </div>
            </div>
            <div className="container h-100">
                <div className="row h-100 align-items-center align-justify-center">
                    <div className="col-12">
                        <div className="text-center p-5">
                            <h1 className={"fw-light ol"} style={{"fontWeight":"100","fontSize":"60px"}}>
                                Make UP
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <section className="categories_area clearfix" id="about" style={{"margin":"0px",padding:"0px", width:"60%"}}>
                {data && data.data.MU.map((product)=>{
                    return (
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src={product.product_poster} alt=""
                                     style={{"borderRadius": "0"}}
                                />
                                <div className={"text-center multiline-ellipsis"}
                                     style={{"fontSize":"20px"}}>
                                    {product.product_name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
            <div className="container h-100">
                <div className="row h-100 align-items-center align-justify-center">
                    <div className="col-12">
                        <div className="text-center p-5">
                            <h1 className={"fw-light ol"} style={{"fontWeight":"100","fontSize":"60px"}}>
                                Skin care
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="categories_area clearfix" id="about" style={{"margin":"0px",padding:"0px", width:"60%"}}>
                {data && data.data.SC.map((product)=>{
                    return (
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src={product.product_poster} alt=""
                                     style={{"borderRadius": "0"}}
                                />
                                <div className={"text-center multiline-ellipsis"}
                                     style={{"fontSize":"20px"}}>
                                    {product.product_name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
            <div className="container h-100">
                <div className="row h-100 align-items-center align-justify-center">
                    <div className="col-12">
                        <div className="text-center p-5">
                            <h1 className={"fw-light ol"} style={{"fontWeight":"100","fontSize":"60px"}}>
                                Cleansing
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <section className="categories_area clearfix" id="about" style={{"margin":"0px",padding:"0px", width:"60%"}}>
                {data && data.data.CL.map((product)=>{
                    return (
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src={product.product_poster} alt=""
                                     style={{"borderRadius": "0"}}
                                />
                                <div className={"text-center multiline-ellipsis"}
                                     style={{"fontSize":"20px"}}>
                                    {product.product_name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            </div>
        </Fragment>
    )
}

export default Home;