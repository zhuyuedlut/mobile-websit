import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'
import BScroll from 'better-scroll';
import Banner from '../../common/component/Banner';
import Course from './Course';
import Vip from './Vip';
import Intro from './Intro';
import Work from './Work';
import {loadWorks} from '../../store/action/getWorks';
import '../../common/css/index.css';

const bannerImgs = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
];

function Index(props){
    const {dispatch, loading, loadAll, works} = props;
    const pageWrap = useRef(null);
    useEffect(()=>{
        setTimeout(()=>{
            const bScroll = new BScroll(pageWrap.current, {
                preventDefaultException:{
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                    className: /(^|\s)work_a(\s|$)/
                },
                pullUpLoad : true
            });
            bScroll.on("pullingUp", ()=>{
                dispatch(loadWorks()).then((res)=>{
                    if(res){
                        bScroll.finishPullUp();
                        bScroll.refresh();
                    }else{
                        bScroll.closePullDown();
                    }
                })
            });
        })
    }, []);
    return(
        <div className="pageWrap" ref={pageWrap}>
            <div>
                <Banner data={bannerImgs} content={data=>{ return <img src={data} alt="" />}}/>
                <section className="index_content">
                    <Course />
                    <Vip />
                    <Intro />
                    <Work loading = {loading} loadAll={loadAll} works={works} />
                </section>
            </div>
        </div>
    )
}

export default connect((state)=>{
    return {...state.works};
})(Index);