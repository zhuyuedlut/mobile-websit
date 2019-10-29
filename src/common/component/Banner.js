import React , {useState, useEffect, useRef} from 'react'
import BScroll from 'better-scroll';

function Banner(props){
    const {content, data} = props;
    const bannerWrap = useRef(null);
    const [pageIndex, setPageIndex] = useState(0);
    useEffect(()=>{
        let timer = 0;
        const bScroll = new BScroll(bannerWrap.current, {
            scrollX : true,
            scrollY : false,
            momentum : false,
            eventPassthrough : 'vertical',
            snap : {
                loop : true
            }
        });
        bScroll.on("scrollEnd", ()=>{
            setPageIndex(bScroll.getCurrentPage().pageX)
        })
        timer = setInterval(()=>{
            bScroll.next(200);
        }, 2000);
        bannerWrap.current.addEventListener('touchstart', ()=>{clearInterval(timer)});
        bannerWrap.current.addEventListener('touchend', ()=>{timer = setInterval(()=>{bScroll.next(200)}, 2000)});
        return ()=>{
            clearInterval(timer);
        }
    }, []);
    return(
        <section className="banner">
            <div className="banner_img" ref={bannerWrap}>
                <ul className="banner_list clearfix">
                    {
                        data.map((item, index)=><li key={index}>{content(item)}</li>)
                    }
                </ul>
            </div>
            {
                data.length > 0 ?
                    (
                        <ul className="banner_nav">
                            {data.map((item, index)=><li className={index === pageIndex ? 'active' : ''} key={index}></li>)}
                        </ul>
                    )
                    : ''
            }
        </section>
    )
}

export default Banner;