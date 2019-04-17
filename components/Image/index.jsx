import React from 'react';

const Image = ({
    src = '',
    alt = '',
    query,
    ...props
}) => {
    return (
        <picture>
            <source srcSet={`${src}?fm=webp${query ? `&${query}` : ''}`} type="image/webp" />
            <img src={`${src}${query ? `?${query}` : ''}`} alt={alt} {...props} />
        </picture>
    );
}

export default Image;
