import React from 'react';

const Image = ({
    src = '',
    alt = '',
    ...props
}) => {
    const query = src.indexOf('?') !== -1 ? '&' : '?';

    return (
        <picture>
            <source srcSet={`${src}${query}fm=webp`} type="image/webp" />
            <img src={`${src}${query}`} alt={alt} {...props} />
        </picture>
    );
}

export default Image;
