import {Link} from "react-router-dom";
import {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../../http-commons";
import {Product} from "../../types";

interface CosmeticsResponse{
    data:{
        cosmetics:Product
    }
}

function MovieList(){
    const {id}=useParams<{id:string}>()
    const nav = useNavigate();

    // 서버 연결
    const {isLoading,isError,error,data,refetch:cosmeticsDetailData}=useQuery<CosmeticsResponse,Error>({
        queryKey:['cosmetics-detail',id],
        queryFn: async () => await apiClient.get(`/cosmetics/detail/${id}`)
    })

    const cosmetics:Product|undefined=data?.data.cosmetics
    console.log(cosmetics)


    return (
        <Fragment>
            <div className="breadcumb-area" style={{
                "backgroundImage": `url(${process.env.PUBLIC_URL}/img/banner.jpg)`}}>
                <div className="container h-100 br">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Cosmetics Detail</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data &&
                <section className="archive-area section_padding_80">
                    <div className="container p-0">
                        <div className="row col-12 ">
                            <div className={"col-6 "}>
                                <img src={data.data.cosmetics.product_poster}></img>
                            </div>
                            <div className="col-6">
                                <h1 style={{fontSize:"30px","fontWeight":"500"}}>
                                    {data.data.cosmetics.product_name}
                                </h1>
                                <div style={{fontSize:"25px"}}>
                                    <span style={{ textDecoration: "line-through","fontSize":"18px","marginRight":"5px" }}>{data.data.cosmetics.price}</span>
                                    <span>{data.data.cosmetics.sale}</span>
                                </div>
                                <div className={"mt-5 "}>
                                    <div className={"mb-3"} style={{fontSize:"22px"}} >
                                        <div className={"col-3 p-0"} style={{fontWeight:"500"}}>일반배송</div>
                                        <span className={"col-9 p-0"} style={{width:"80%","fontSize":"20px"}}>{data.data.cosmetics.deliver}</span>
                                    </div>
                                    <div className={"mb-3"} style={{fontSize:"22px"}}>
                                        <div className={"col-3 p-0"} style={{fontWeight:"500"}}>픽업</div>
                                        <span className={"col-9 p-0"} style={{width:"80%","fontSize":"20px"}}>배송비 조건 없음</span>
                                    </div>
                                    <div className={"mb-4"} style={{fontSize:"22px"}}>
                                        <div className={"col-3 p-0"} style={{fontWeight:"500"}}>카테고리</div>
                                        <span className={"col-9 p-0"} style={{width:"80%","fontSize":"20px"}}>{data.data.cosmetics.category}</span>
                                    </div>

                                    <div className={"d-flex "} style={{fontSize:"18px"}}>
                                        <button className={"quantity-button quantity-button-left"}>-</button>
                                        <span><input className={"quantity"} type={'text'} /></span>
                                        <button className={"quantity-button quantity-button-right"}>+</button>
                                        <span className={"cart-button"}>장바구니 담기</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            }

        </Fragment>
    )
}

export default MovieList;