import React from 'react';

const Image = ({
    src = '',
    alt = '',
    query,
    ...props
}) => {
    return (
        <picture>
            <source srcSet={`${src}?q=70&fm=webp${query ? `&${query}` : ''}`} type="image/webp" />
            <img src={`${src}?q=70${query ? `&${query}` : ''}`} alt={alt} {...props} />
        </picture>
    );
}

export default Image;
