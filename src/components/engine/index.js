import React, { Component } from 'react';
class Engine extends Component {
    render() {
        return (
            <header id="sm-engine" className="sm-engine sm-section">
                <div className="container">
                    <div className="col-md-12">
                        <div className="sm-module">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#raw-data">Raw Data</a></li>
                                <li><a data-toggle="tab" href="#url-crawl">Url Crawl</a></li>
                            </ul>

                            <div className="tab-content">
                                <div id="raw-data" className="tab-pane fade in active raw-data">
                                    <textarea id="raw-data-input" className="raw-data-input" name="raw-data-input"  cols="30" rows="10" placeholder="Please write your text here">
                                    </textarea>
                                </div>
                                <div id="url-crawl" className="tab-pane fade url-crawl">
                                    <input id="url-crawl-input" className="url-crawl-input" name="url-crawl-input" type="text" placeholder="Only url please"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Engine;
