import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MailNavigation } from './MailNavigation'
import { messageActions } from '../_actions';

class Compose extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            message: {
                to: '',
                title: '',
                content: ''
            },
            submitted: false            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { message } = this.state;
        this.setState({
            message: {
                ...message,
                [name]: value
            }
        });
    }


    handleSubmit(event) {
        
        event.preventDefault();

        this.setState({ submitted: true });
        const { message } = this.state;
        const { dispatch } = this.props;
        
        if (message.title && message.content && message.to) {
            dispatch(messageActions.save(message));
        }
    }


    render(){
            const { saving  } = this.props;
            const { message, submitted } = this.state;

        return (
            

            <div className="row">     
                    <form name="form" onSubmit={this.handleSubmit}>
                                  
                    <div className="col-md-9 text-center">
                        <br /><br /><br /><br />
                        <div>

                        <br /><br />
                        <div className="form-group text-right">
                            <label className="">ارسال به</label>
                            <input className="form-control" value={message.to} onChange={this.handleChange} name="to" placeholder="Receiver email address..." ></input>
                        </div>
                        <div className="form-group text-right">
                            <label className="">عنوان</label>
                            <input className="form-control text-right"  value={message.title}  onChange={this.handleChange} name="title"  placeholder="عنوان پیام" ></input>
                        </div>
                        <textarea className="btn-block" name="content"  value={message.content}  onChange={this.handleChange} rows="8">

                        </textarea>
                        <br />
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">ارسال پیام</button>
                            &nbsp;
                            <button className="btn btn-info">ذخیره پیش نویس</button>
                        </div>
                    </div>
                        
                    </div>
                    <div className="col-md-3">
                        <MailNavigation history={this.history} location={this.location} />                        
                    </div>  
                </form>                  
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

const connectedCompose = connect(mapStateToProps)(Compose);
export { connectedCompose as Compose };