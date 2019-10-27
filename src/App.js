import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import list from './router/config';
import Frame from './common/component/Frame';
import './common/css/reset.css';
import './common/css/common.css';


function App() {
    return (
        <BrowserRouter>
            <Frame>
                <Switch>
                    {
                        list.map((item, index)=>{
                            return <Route exact={item.exact}
                                          path={item.path}
                                          key={index}
                                          render={item.render}
                            />
                        })
                    }
                </Switch>
            </Frame>
        </BrowserRouter>
    );
}

export default App;
