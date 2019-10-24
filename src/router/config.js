import React from 'react';
import Index from '../views/index/index';
import Course from '../views/course/index';
import Lecturer from '../views/lecturer/index';
import Login from '../views/login/index';

const list = [
    {
        name : '首页',
        path : '/',
        exact : true,
        render(props){
            return <Index {...props} />
        }
    },
    {
        name : '课程',
        path : '/course',
        exact : true,
        render(props){
            return <Course {...props} />
        }
    },
    {
        name : '讲师',
        path : '/lecturer',
        exact : true,
        render(props){
            return <Lecturer {...props} />
        }
    },
    {
        name : '登录',
        path : '/login',
        exact : true,
        render(props){
            return <Login {...props} />
        }
    }
];

export default list;