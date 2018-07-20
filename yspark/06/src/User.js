import React, {Component} from 'react';

class User extends Component {
    render() {
        const { username } = this.props.user.toJS();
        console.log('%s가 랜더링 되고 있어요', username)

        return (
            <div>
                {username}
            </div>
        );
    }
}

export default User;