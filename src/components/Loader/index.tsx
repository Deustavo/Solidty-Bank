import React, { HTMLAttributes } from 'react';

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode
}

const Loader: React.FC<LoaderProps> = (props) => <span { ...props } className="loader" />;

export default Loader;