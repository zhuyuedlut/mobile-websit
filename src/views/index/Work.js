import React from 'react';
import {Link} from "react-router-dom";

function Work(props){
    const {loading, loadAll, works} = props;
    return(
        <div className="works">
            <h3>学员作品</h3>
            <ul className="works_list clearfix">
                {
                    works.map(work =>{
                        return (
                            <li key={work.id}>
                                <Link to={"/work/" + work.id}>
                                    <img src={work.icon} className="work_a" alt="" />
                                    <span className="wrork_txt clearfix work_a">
                                        <strong className="work_a" >{work.title}</strong>
                                        <span className="work_a">
                                            <em className="work_a">{work.message}</em>
                                            <em className="work_a">{work.good}</em>
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <a className="more">{loadAll ? '已经没有啦' : (loading ? '正在加载' : '上滑加载更多')}</a>
        </div>
    )
}

export default Work;