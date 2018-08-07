import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
    static defaultProps = {
        colors: '#343a40'
    }

    render() {
        const { colors, selectedColor, onClick } = this.props;

        const colorList = colors.map(
            (color) => {
                return (<div className={`color ${selectedColor === color && 'active'}`} 
                            style={{ background:color }} onClick={ () => onClick(color) }>
                        </div>);
            }
        );

        return (
            <div className="palette">
                { colorList }
            </div>
        );
    }
}

export default Palette;