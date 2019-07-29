import React from 'react';

import './app-footer.css';

const AppFooter = () => {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className="columns">
                        <div className="column">1</div>
                        <div className="column">2</div>
                        <div className="column">3</div>
                        <div className="column">4</div>
                    </div>
                </div>
            </div>
            <div className='footer-footer'>
                <div className='container'>
                    Roomie (c) 2019 All right
                </div>
            </div>
        </div>
    );
};

export default AppFooter;