// NodeJs , TypeScript , TanStack-Query
// Git Action
import {Fragment} from "react";
import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import apiClient from "../../http-commons";
// VO
interface MainData {
    main:{
        title: string;
        hit: number;
        likecount: number;
        poster: string;
        no: number;
        chef: string;
        rownum: number;
    };
    fList:{
        name: string;
        type: string;
        fno: number;
        phone: string;
        poster: string;
        rownum: number;
    }[];
    list1:{
        title: string;
        hit: number;
        likecount: number;
        poster: string;
        no: number;
        chef: string;
        rownum: number;
    }[];
    list2:{
        title: string;
        hit: number;
        likecount: number;
        poster: string;
        no: number;
        chef: string;
        rownum: number;
    }[];
}
// VO => type / interface (함수 추가)
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
            <section className="categories_area clearfix" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src="img/catagory-img/1.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>맛집</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                <img src="img/catagory-img/2.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>동영상</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                <img src="img/catagory-img/3.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>레시피</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_area section_padding_0_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".2s">

                                        <div className="post-thumb">
                                            <img src={data?.data.main.poster} alt="" style={{"width":"600px","height":"300px"}} />
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">
                                                        <a href="#">{data?.data.main.chef}</a>
                                                    </div>

                                                    <div className="post-date">
                                                        <a href="#"></a>
                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i> {data?.data.main.likecount}</a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i> {data?.data.main.hit}</a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h3 className="post-headline">{data?.data.main.title}</h3>
                                            </a>
                                            <p></p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>


                                {
                                    data?.data.list1.map((recipe:{title: string,
                                        hit: number,
                                        likecount: number,
                                        poster: string,
                                        no: number,
                                        chef: string,
                                        rownum: number},index:number)=>

                                        <div className="col-12 col-md-6" key={index}>

                                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                                <div className="post-thumb">
                                                    <img src={recipe.poster} alt=""/>
                                                </div>

                                                <div className="post-content">
                                                    <div className="post-meta d-flex">
                                                        <div className="post-author-date-area d-flex">

                                                            <div className="post-author">
                                                                <Link to={"#"}>{recipe.chef}</Link>
                                                            </div>

                                                            <div className="post-date">
                                                                <a href="#"></a>
                                                            </div>
                                                        </div>

                                                        <div className="post-comment-share-area d-flex">

                                                            <div className="post-favourite">
                                                                <a href="#"><i className="fa fa-heart-o"
                                                                               aria-hidden="true"></i>{recipe.likecount} </a>
                                                            </div>

                                                            <div className="post-comments">
                                                                <a href="#"><i className="fa fa-comment-o"
                                                                               aria-hidden="true"></i> {recipe.hit}</a>
                                                            </div>

                                                            <div className="post-share">
                                                                <a href="#"><i className="fa fa-share-alt"
                                                                               aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#">
                                                        <h4 className="post-headline">{recipe.title}</h4>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                {

                                    data?.data.list2.map((recipe:{title: string,
                                        hit: number,
                                        likecount: number,
                                        poster: string,
                                        no: number,
                                        chef: string,
                                        rownum: number},index:number)=>
                                        <div className="col-12" key={index}>
                                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig"
                                                 data-wow-delay=".2s">

                                                <div className="post-thumb">
                                                    <img src={recipe.poster} alt=""/>
                                                </div>

                                                <div className="post-content">
                                                    <div className="post-meta d-flex">
                                                        <div className="post-author-date-area d-flex">

                                                            <div className="post-author">
                                                                <a href="#">{recipe.chef}</a>
                                                            </div>

                                                            <div className="post-date">
                                                                <a href="#"></a>
                                                            </div>
                                                        </div>

                                                        <div className="post-comment-share-area d-flex">

                                                            <div className="post-favourite">
                                                                <a href="#"><i className="fa fa-heart-o"
                                                                               aria-hidden="true"></i> {recipe.likecount}</a>
                                                            </div>

                                                            <div className="post-comments">
                                                                <a href="#"><i className="fa fa-comment-o"
                                                                               aria-hidden="true"></i> {recipe.hit}</a>
                                                            </div>

                                                            <div className="post-share">
                                                                <a href="#"><i className="fa fa-share-alt"
                                                                               aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#">
                                                        <h4 className="post-headline">{recipe.title}</h4>
                                                    </a>
                                                    <p></p>
                                                    <a href="#" className="read-more">Continue Reading..</a>
                                                </div>
                                            </div>
                                        </div>

                                    )}
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="blog-sidebar mt-5 mt-lg-0">

                                <div className="single-widget-area about-me-widget text-center">
                                    <div className="widget-title">
                                        <h6>About Me</h6>
                                    </div>
                                    <div className="about-me-widget-thumb">
                                        <img src="img/about-img/1.jpg" alt=""/>
                                    </div>
                                    <h4 className="font-shadow-into-light">Shopia Bernard</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                                </div>




                                <div className="single-widget-area popular-post-widget">
                                    <div className="widget-title text-center">
                                        <h6>추천 맛집</h6>
                                    </div>

                                    {
                                        data?.data.fList.map((food:{
                                                name: string,
                                                type: string,
                                                phone: string,
                                                poster: string
                                            },index:number)=>
                                                <div className="single-populer-post d-flex">
                                                    <img src={"https://www.menupan.com"+food.poster} alt=""/>
                                                    <div className="post-content">
                                                        <a href="#">
                                                            <h6>{food.name}</h6>
                                                        </a>
                                                        <p>{food.type}</p>
                                                    </div>
                                                </div>

                                        )}


                                </div>


                                <div className="single-widget-area add-widget text-center">
                                    <div className="add-widget-area">
                                        <img src="img/sidebar-img/6.jpg" alt=""/>
                                        <div className="add-text">
                                            <div className="yummy-table">
                                                <div className="yummy-table-cell">
                                                    <h2>Cooking Book</h2>
                                                    <p>Buy Book Online Now!</p>
                                                    <a href="#" className="add-btn">Buy Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="single-widget-area newsletter-widget">
                                    <div className="widget-title text-center">
                                        <h6>Newsletter</h6>
                                    </div>
                                    <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                                    <div className="newsletter-form">
                                        <form action="#" method="post">
                                            <input type="email" name="newsletter-email" id="email" placeholder="Your email"/>
                                            <button type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default Home;