import React, {Component} from 'react';

class MyName extends Component {
    static defaultProps  = {
        name: '기본 컴포넌트'
    }

    state = {
        foo: {
            bar: '1',
            foobar: '2'
        }
    }

    stateHandler = () => {
        this.setState(
            ({foo}) => ({
                foo: {
                    ...this.state.foo,
                    foobar: '3'
                }
            })
        )
    }

    render() {
        return (
            <div>
                안녕하세요 제이름은 <b>{this.props.name}</b>입니다.
                {this.state.foo.foobar}
                <button onClick={this.stateHandler}>+</button> 
            </div>
        );
    }
}

export default MyName;