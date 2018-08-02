import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
    static defaultProps = {
        colors: '#343a40'
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.colors !== nextProps.colors;
    }

    render() {
        const { colors, onClick } = this.props;

        const palette = colors.map(
            (color) => {
                return (<div className="color" style={{ background:color }} onClick={ onClick }></div>);
            }
        );

        return (
            <div className="palette">
                { palette }
            </div>
        );
    }
}

export default Palette;