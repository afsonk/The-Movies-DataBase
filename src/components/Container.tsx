import React from 'react';
import '../styles.scss'

type Props = {
    children: JSX.Element
}

const Container = (props: Props) => {
    console.log('render');
    return <div className={'container'}>{props.children}</div>
}
export default Container;