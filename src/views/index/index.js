import React, {useEffect, useRef} from 'react';
import BScroll from 'better-scroll';
import Banner from '../../common/component/Banner';
import Course from './Course';
import Vip from './Vip';
import Intro from './Intro';
import '../../common/css/index.css';

const bannerImgs = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
];

function Index(){
    const pageWrap = useRef(null);
    useEffect(()=>{
        const bScroll = new BScroll(pageWrap.current);
    }, []);
    return(
        <div className="pageWrap" ref={pageWrap}>
            <div>
                <Banner data={bannerImgs} content={data=>{ return <img src={data} alt="" />}}/>
                <section className="index_content">
                    <Course />
                    <Vip />
                    <Intro />
                </section>
            </div>
        </div>
    )
}

export default Index;