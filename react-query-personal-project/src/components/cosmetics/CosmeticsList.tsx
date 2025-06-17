import {Link} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {Product} from "../../types";
import apiClient from "../../http-commons";
import PagePrint from "../commons/PagePrint";
interface ProductListProps {
    list: Product[];
    totalpage:number;
    curpage:number;
    startPage:number;
    endPage:number;
}
const linkStyle = {
    color:"black",
    textDecoration: "none",
    fontSize: "15px",
    display: "block",
};

function CosmeticsList(){
    const [curpage, setCurpage] = useState<number>(1);
    const [category, setCategory] = useState<string>("스킨케어");
    const {isLoading,isError,error,data}=useQuery<AxiosResponse<ProductListProps>,Error>({
        queryKey:["cosmetics-list",curpage,category],
        queryFn: async ()=>{
            return await apiClient.get(`/cosmetics/list/${curpage}/${category}`);
        }
    })
    if(isLoading){
        return <h3 className={"text-center"}>Loading...</h3>
    }
    if(isError)
        return <h3 className={"text-center"}>{error?.message}</h3>;

    console.log(data?.data)

    return (
        <Fragment>
            <div
                className="breadcumb-area br "
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/banner.jpg)`,
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>Cosmetics List</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="d-flex justify-content-center"
                style={{ marginTop: "3rem", gap: "2rem" }}
            >
                <div
                    className="d-none d-lg-block"
                    style={{
                        width: "300px",
                        backgroundColor: "#f2f6f7",
                        borderRadius: "12px",
                        padding: "2rem",
                        height: "fit-content",
                        "marginTop":"50px"
                    }}
                >
                    <h6 className={"ol"} style={{ fontWeight: "", marginBottom: "1rem","fontSize":"50px" }}>Categories</h6>
                    <ul className="list-unstyled mt-5" style={{ lineHeight: "2" }}>
                        {[
                            "스킨케어",
                            "마스크팩",
                            "클렌징",
                            "선케어",
                            "메이크업",
                            "네일",
                            "뷰티소품",
                            "맨즈케어",
                            "향수",
                            "헤어케어",
                        ].map((item) => (
                            <li key={item}>
                              <span
                                  onClick={() => setCategory(item)}
                                  style={{
                                      ...linkStyle,
                                      fontWeight: category === item ? "bold" : "normal", // ✅ 볼드 처리
                                  }}
                              >
                                {item}
                              </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ✅ 중앙 콘텐츠 영역 */}
                <div style={{ maxWidth: "1000px", flex: 1,"marginTop":"50px" }}>
                    <section
                        className="categories_area clearfix"
                        id="about"
                        style={{ margin: "0px", padding: "0px" }}
                    >
                        <div className="row">
                            {data?.data.list.map((data) => (
                                <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={data.id}>
                                    <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                        <Link
                                            to={`/cosmetics/detail/${data.id}`}
                                            style={{ color: "inherit", textDecoration: "none" }}
                                        >
                                            <img
                                                src={data.product_poster}
                                                alt=""
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "0",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <div
                                                className="text-center multiline-ellipsis mt-2"
                                                style={{ fontSize: "18px", fontWeight: "400" }}
                                            >
                                                {data.product_name}
                                            </div>
                                            <div
                                                className="text-center mt-2"
                                                style={{ fontSize: "18px", fontWeight: "400", "color":"#fc6a60" }}
                                            >
                                                {data.price}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-12">
                            <div className="pagination-area d-flex justify-content-center mt-4">
                                <nav aria-label="#">
                                    {data?.data && <PagePrint data={data.data} setCurpage={setCurpage} />}
                                </nav>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}

export default CosmeticsList;