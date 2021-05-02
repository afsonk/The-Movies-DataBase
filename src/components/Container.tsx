import React from 'react';
import '../styles.scss'
import { ChildrenProps } from '../types/types';

const Container = (props: ChildrenProps) => {
    console.log('render');
    return <div className={'container'}>{props.children}</div>
}
export default Container;