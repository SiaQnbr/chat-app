import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MailNavigation } from './MailNavigation'
import { userActions } from '../_actions';

class Inbox extends React.Component {

    render(){
        return (
            <div className="row">                                        
                    <div className="col-md-9 text-center">
                    <br /><br /><br /><br />
                    <div className="panel">
                    <br /><br />
                            <h1>
                                صندوق پیام
                            </h1>
                            <br /><br /><br /><br /><br /><br />
                            <br /><br /><br /><br />
                    </div>
                        
                    </div>
                    <div className="col-md-3">
                        <MailNavigation history={this.history} location={this.location} />                        
                    </div>                    
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedInbox = connect(mapStateToProps)(Inbox);
export { connectedInbox as Inbox };