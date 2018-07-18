import React from 'react';

const Myname2 = ({name}) => {
    return (
        <div>
            안녕하세요 제이름은 {name}입니다.
        </div>
    );
}

Myname2.defaultProps = {
    name: '함수형 컴포넌트'
};

export default Myname2;