import React from 'react';


class Title extends React.Component {
    render() {
        return (
            <div className={style.appTitle}>
                <h1>TO DO LIST</h1>
                <p>number of things to do :</p>
            </div>
        );
    }
}

export default Title;