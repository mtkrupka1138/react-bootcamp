import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

        render(campsite) {
            if (campsite) {
                return (
                    <div className="row"></div>
                );
            }
            return <div></div>;
        };


        renderCampsite() {

        }
        renderComments() {

        }
};

export default CampsiteInfo;