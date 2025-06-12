import {Fragment,useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMainData} from "../../actions/mainActions";
function Home(){
    // action연결 = reducer = store
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchMainData());
    },[]) // vue => mounted()
    const mainData=useSelector(state=>state.mains.main_data);
    console.log(mainData && mainData);
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
                                        <h5>부산 맛집</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                <img src="img/catagory-img/2.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>부산 동영상</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                <img src="img/catagory-img/3.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>부산 명소</h5>
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
                                            <img src={mainData.mp && "https://www.menupan.com"+mainData.mp.poster} alt=""/>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">
                                                        <a href="#">{mainData.mp && mainData.mp.type}</a>
                                                    </div>

                                                    <div className="post-date">
                                                        <a href="#">{mainData.mp && mainData.mp.score}</a>
                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i> {mainData.mp && mainData.mp.likecount}</a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i> {mainData.mp && mainData.mp.hit}</a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h2 className="post-headline">{mainData.mp && mainData.mp.name}</h2>
                                            </a>
                                            <p>{mainData.mp && mainData.mp.theme}</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                                {
                                    mainData.mList && mainData.mList.map((food) =>
                                        <div className="col-12 col-md-6">
                                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                                <div className="post-thumb">
                                                    <img src={"http://www.menupan.com"+food.poster}/>
                                                </div>

                                                <div className="post-content">
                                                    <div className="post-meta d-flex">
                                                        <div className="post-author-date-area d-flex">

                                                            <div className="post-author">
                                                                <a href="#">{food.type}</a>
                                                            </div>

                                                            <div className="post-date">
                                                                <a href="#">{food.score}</a>
                                                            </div>
                                                        </div>

                                                        <div className="post-comment-share-area d-flex">

                                                            <div className="post-favourite">
                                                                <a href="#"><i className="fa fa-heart-o"
                                                                               aria-hidden="true"></i> {food.likecount}</a>
                                                            </div>

                                                            <div className="post-comments">
                                                                <a href="#"><i className="fa fa-comment-o"
                                                                               aria-hidden="true"></i> {food.hit}</a>
                                                            </div>

                                                            <div className="post-share">
                                                                <a href="#"><i className="fa fa-share-alt"
                                                                               aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#">
                                                        <h4 className="post-headline">{food.name}</h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    mainData.lList && mainData.lList.map((food) =>
                                        <div className="col-12">
                                            <div className="list-blog single-post d-sm-flex wow fadeInUpBig"
                                                 data-wow-delay=".2s">

                                                <div className="post-thumb">
                                                    <img src={"http://www.menupan.com"+food.poster}/>
                                                </div>

                                                <div className="post-content">
                                                    <div className="post-meta d-flex">
                                                        <div className="post-author-date-area d-flex">

                                                            <div className="post-author">
                                                                <a href="#">{food.type}</a>
                                                            </div>

                                                            <div className="post-date">
                                                                <a href="#">{food.score}</a>
                                                            </div>
                                                        </div>

                                                        <div className="post-comment-share-area d-flex">

                                                            <div className="post-favourite">
                                                                <a href="#"><i className="fa fa-heart-o"
                                                                               aria-hidden="true"></i> {food.likecount}</a>
                                                            </div>

                                                            <div className="post-comments">
                                                                <a href="#"><i className="fa fa-comment-o"
                                                                               aria-hidden="true"></i> {food.hit}</a>
                                                            </div>

                                                            <div className="post-share">
                                                                <a href="#"><i className="fa fa-share-alt"
                                                                               aria-hidden="true"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="#">
                                                        <h4 className="post-headline">{food.name}</h4>
                                                    </a>
                                                    <p>{food.content}</p>
                                                    <a href="#" className="read-more">Continue Reading..</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
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


                                <div className="single-widget-area subscribe_widget text-center">
                                    <div className="widget-title">
                                        <h6>Subscribe &amp; Follow</h6>
                                    </div>
                                    <div className="subscribe-link">
                                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fa fa-google" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a>
                                    </div>
                                </div>


                                <div className="single-widget-area popular-post-widget">
                                    <div className="widget-title text-center">
                                        <h6>부산에 가면</h6>
                                    </div>

                                    {
                                        mainData.iList && mainData.iList.map((loc) =>
                                            <div className="single-populer-post d-flex">
                                                <img src={loc.poster}/>
                                                <div className="post-content">
                                                    <a href="#">
                                                        <h6>{loc.title}</h6>
                                                    </a>
                                                    <p>{loc.address}</p>
                                                </div>
                                            </div>
                                        )
                                    }



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