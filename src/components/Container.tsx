import React from 'react';
import '../styles.scss'
import { ChildrenProps } from '../types/types';

const Container = (props: ChildrenProps) => {
    return <div className={'container'} {...props}/>
}
export default Container;