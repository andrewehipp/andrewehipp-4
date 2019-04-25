import React from 'react';
import Link from 'next/link';

import Canvas from '../Canvas';
import Container from '../Container';
import Layer from '../Layer';

import css from './header.scss';

const Header = React.memo(function Header() {
    return (
        <header className={css.header}>
            <Canvas className={css.canvas} key="header-canvas"/>

            <Container>
                <Layer>
                    <div className={css.content}>
                        <div className={css.lockup}>
                            <div className={css.lockupBlock}>
                                <Link href="/" as="/" prefetch>
                                    <a>
                                        <svg className={css.logo} width="69" height="109" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.8 102.8">
                                            <path fill="#ffffff" d="M50.8 58.7c2.1 1.1 5.1 1.1 6.9 0 1.4-.9 2.2-2.5 3.2-4 1.6-2.5 3.5-5.8 3.9-9.3v-1.8c-.5-2.5-1.7-4.3-2.7-6.3-.9-1.6-1.7-3.1-2.6-4.5-1.5-2.3-3.4-5.1-5.5-6.8-.4-.3-.9-.5-1-.8-.1-.2-.1-.6-.2-1-.1-.8-.3-1.4-.4-2.1-.1-.4-.2-1-.2-1.1 0-.3.4-.5.7-.9 1.2-1.4 2-3.8 1.5-6.3-.1-.4-.5-1.2-.5-1.5 0-.4.6-1.1.8-1.5.8-1.5 1.6-3.5 1.4-5.7C55.9 2 53.6.4 50.8-.1h-1.5C46.6.4 45 2 44.2 4.4 41 3.2 36.9 2.3 32.5 2.3h-.4c-4.3 0-8.4.9-11.5 2.1C19.8 2 18.2.5 15.5-.1H14c-2.7.6-5 2.2-5.2 5.3-.2 2.1.6 4.1 1.4 5.7.2.5.8 1.1.8 1.5 0 .3-.4 1.1-.5 1.5-.6 2.5.3 4.9 1.5 6.3.3.3.6.6.7.9 0 .1-.1.7-.2 1.1-.1.7-.3 1.3-.4 2.1-.1.4-.1.8-.2 1-.1.3-.6.5-1 .8-2.1 1.7-4 4.5-5.5 6.8-.9 1.3-1.7 2.9-2.6 4.5-1.1 2-2.2 3.8-2.7 6.3v1.8C.6 49 2.4 52.2 4 54.8c1 1.5 1.8 3.1 3.2 4 1.8 1.1 4.8 1.1 6.8 0 1.1 3.2 3.1 7.8 2.8 12.1 0 .3-.1.9-.2 1.1-.3 1-1 2-1.6 3-.6 1.1-1.1 2.1-1.7 3.1-1.3-2.4-2-5.4-4.8-6.2-.8-.2-1.5-.2-2.1 0C3.5 73 3.1 79 4.6 82c-1 1.3-2 2.4-1.8 4.7.1.7.3 1.5.5 2.2 2.5 10.8 14.3 13.4 26.7 13.9h4.8c12.4-.6 24.2-3.2 26.7-13.9.2-.7.4-1.5.5-2.2.2-2.3-.9-3.4-1.8-4.7 1.5-3 1.2-9-1.9-10.1-.6-.2-1.3-.2-2.1 0-2.8.8-3.5 3.8-4.8 6.2-.6-1-1.1-2.1-1.7-3.1-.5-1-1.3-2-1.6-3.1-.1-.2-.2-.7-.2-1.1-.3-4.2 1.8-8.8 2.9-12.1z" />
                                            <path fill="#333935" d="M24 26.3c-.1-2.6-5-2.1-4.9.3 1.2 1.1 4.1.9 4.9-.3z" />
                                            <path fill="#333935" d="M25.6 27.6c-.8-.3-1.1.4-1.7.7-1.3.7-3.3.7-4.8.1-.3-.1-1.4-1-1.6-.3-.1.5.9.9 1.5 1.1 1.9.7 3.7.5 5.2-.2.5-.3 1.6-.6 1.4-1.4zM17.4 8.1c.1-.1.1-.2.2-.3-.1.1-.2.2-.2.3z" />
                                            <path fill="#333935" d="M50.8 58.7c2.1 1.1 5.1 1.1 6.9 0 1.4-.9 2.2-2.5 3.2-4 1.6-2.5 3.5-5.8 3.9-9.3v-1.8c-.5-2.5-1.7-4.3-2.7-6.3-.9-1.6-1.7-3.1-2.6-4.5-1.5-2.3-3.4-5.1-5.5-6.8-.4-.3-.9-.5-1-.8-.1-.2-.1-.6-.2-1-.1-.8-.3-1.4-.4-2.1-.1-.4-.2-1-.2-1.1 0-.3.4-.5.7-.9 1.2-1.4 2-3.8 1.5-6.3-.1-.4-.5-1.2-.5-1.5 0-.4.6-1.1.8-1.5.8-1.5 1.6-3.5 1.4-5.7C55.9 2 53.6.4 50.8-.1h-1.5C46.6.4 45 2 44.2 4.4 41 3.2 36.9 2.3 32.5 2.3h-.4c-4.3 0-8.4.9-11.5 2.1C19.8 2 18.2.5 15.5-.1H14c-2.7.6-5 2.2-5.2 5.3-.2 2.1.6 4.1 1.4 5.7.2.5.8 1.1.8 1.5 0 .3-.4 1.1-.5 1.5-.6 2.5.3 4.9 1.5 6.3.3.3.6.6.7.9 0 .1-.1.7-.2 1.1-.1.7-.3 1.3-.4 2.1-.1.4-.1.8-.2 1-.1.3-.6.5-1 .8-2.1 1.7-4 4.5-5.5 6.8-.9 1.3-1.7 2.9-2.6 4.5-1.1 2-2.2 3.8-2.7 6.3v1.8C.6 49 2.4 52.2 4 54.8c1 1.5 1.8 3.1 3.2 4 1.8 1.1 4.8 1.1 6.8 0 1.1 3.2 3.1 7.8 2.8 12.1 0 .3-.1.9-.2 1.1-.3 1-1 2-1.6 3-.6 1.1-1.1 2.1-1.7 3.1-1.3-2.4-2-5.4-4.8-6.2-.8-.2-1.5-.2-2.1 0C3.5 73 3.1 79 4.6 82c-1 1.3-2 2.4-1.8 4.7.1.7.3 1.5.5 2.2 2.5 10.8 14.3 13.4 26.7 13.9h4.8c12.4-.6 24.2-3.2 26.7-13.9.2-.7.4-1.5.5-2.2.2-2.3-.9-3.4-1.8-4.7 1.5-3 1.2-9-1.9-10.1-.6-.2-1.3-.2-2.1 0-2.8.8-3.5 3.8-4.8 6.2-.6-1-1.1-2.1-1.7-3.1-.5-1-1.3-2-1.6-3.1-.1-.2-.2-.7-.2-1.1-.3-4.2 1.8-8.8 2.9-12.1zm2.7-6.8c-1.2 1.3-2.2 3.2-4.7 2.4-.7-.2-1.7-.8-2.5-1.3s-1.6-1.1-1.8-1.9c-.4-1.6.5-3 1.1-3.9.8-1.2 1.5-1.9 3.4-1.7 1.9.2 3.8 1.5 5.3 2.4.5.3 1.2.7 1.3 1.3.1 1-1.6 2.1-2.1 2.7zM22 77c.6-.4 1.4-.8 1.7-1.5.2-.6.1-1.2.1-1.7.4-4.2 2.6-6.6 7.1-7 .5 0 1-.1 1.5-.1s1 0 1.5.1c4.5.4 6.7 2.8 7.1 7 0 .5 0 1.1.1 1.7.2.7 1.1 1.2 1.7 1.5.7.4 1.6.9 1.7 1.6 0 .9-1 1.9-1.7 2.4-.9.7-1.8 1.1-2.7 1.5-2.2.9-4.9 1.3-7.7 1.4-2.8 0-5.5-.5-7.7-1.4-.8-.3-1.7-.8-2.7-1.5-.6-.5-1.7-1.5-1.7-2.4.1-.7 1.1-1.2 1.7-1.6zm10.4-24h-.1-.1H32.4zm20-34.2c-.5-.9-1.4-1.6-2.3-2.1 1-2.8-3.7-3.2-3.3-.4-.5.1-.9.3-1.4.4.1-3.1 1.8-5.7 3.8-6.8.9-.1 1.5.3 2 .7 1.7 1.5 2.9 6 1.2 8.2zM15.3 2.1c2.6.2 3.8 3 3.8 5.7 3-2 7.9-3.3 13.1-3.3h.4c5.2 0 10.1 1.3 13.1 3.3 0-2.7 1.2-5.4 3.8-5.7 1.8-.2 3.8.9 4.2 2.4-1.4-.7-3.6-1.2-4.9-.1-.9.8-1.3 2.1-1.6 3.4.1.1.1.2.2.3.3.4.5.4.8 1-3.8 1.9-4.3 7.6-4.3 10.7 0 0-7-1.7-11.4-1.7h-.1-.1c-4.4 0-11.4 1.7-11.4 1.7 0-3.1-.5-8.8-4.3-10.7.3-.6.5-.6.8-1 .1-.1.1-.2.2-.3-.3-1.3-.7-2.6-1.6-3.4-1.2-1-3.5-.6-4.9.1.4-1.4 2.4-2.5 4.2-2.4zm-2.9 16.7c-1.7-2.1-.5-6.7 1.1-8.3.4-.4 1.1-.8 2-.7 2 1.2 3.7 3.7 3.8 6.8-.5-.1-.9-.3-1.4-.4.5-2.8-4.3-2.4-3.3.4-.8.6-1.6 1.2-2.2 2.2zm-1.1 33.1c-.5-.5-2.2-1.7-2.1-2.7 0-.6.8-1 1.3-1.3 1.5-.9 3.4-2.2 5.3-2.4 1.9-.3 2.6.4 3.4 1.7.6 1 1.5 2.3 1.1 3.9-.2.8-1 1.4-1.8 1.9s-1.8 1.1-2.5 1.3c-2.5.7-3.6-1.2-4.7-2.4zM7.3 74c1.1-.3 2.1 1 2.5 1.7.5.8.8 1.7 1.3 2.8.6 1.2 1 1.7 1.6 2.6.5.8 1.2 2.2.9 3.1-.2.8-1.5 1.3-2.8 1.1-.8-.1-1.9-.9-2.5-1.6-1.2-1.3-2.5-3-2.5-5.7.1-1.3.4-3.7 1.5-4zM52 81.2c.6-.9 1-1.4 1.6-2.6.6-1.1.9-2 1.3-2.8.5-.8 1.4-2 2.5-1.7 1.1.3 1.4 2.7 1.4 4 0 2.7-1.2 4.4-2.5 5.7-.7.7-1.8 1.5-2.5 1.6-1.3.2-2.6-.3-2.8-1.1-.2-1 .6-2.4 1-3.1zm-1.8 4.2c.7.6 1.8 1.3 3.1 1.3 2.4 0 4-2 5.1-3.3.6.5 1.7 1.4 1.5 2.7-.1.6-1.1 1.3-2.1 1.6-1 .3-2.2.4-3.2.5-2.5.1-5.1 0-7.3 0H17.7c-2.3 0-4.9.1-7.3 0-1 0-2.2-.1-3.2-.5-1-.3-2-1-2.1-1.6-.2-1.3.9-2.2 1.5-2.7 1.1 1.3 2.6 3.3 5.1 3.3 1.2 0 2.4-.7 3.1-1.3 1.7.6 3.6.5 5.9.5h23.8c2.1 0 4.1.1 5.7-.5zM7 45.3c-1.6 1.1-3.2 2-3.5 4.1-.7-1.7-1.7-3.5-1.3-5.9.3-1.5 1.3-3.2 2.1-4.6 1.5-2.9 3.1-5.6 5.1-8.2 1.3-1.6 2.7-3.3 4.5-4 1-.4 2.6-.6 3.5-.3 0-2.2 1.6-3.6 3.7-3.8 2.5-.2 4.4.7 4.3 3.3H39c-.1-2.6 1.8-3.6 4.3-3.3 2.1.2 3.7 1.6 3.7 3.8 1-.2 2.6 0 3.5.3 1.9.7 3.3 2.4 4.5 4 2 2.6 3.6 5.4 5.1 8.2.8 1.4 1.8 3.1 2.1 4.6.4 2.4-.6 4.1-1.3 5.9-.4-2.2-2-3-3.5-4.1-2.8-2-5.3-3.6-8.7-4.7-4.7-1.5-10.8-2-16.6-2-5.9 0-11.9.5-16.6 2-3.2 1.1-5.7 2.8-8.5 4.7z" />
                                            <path fill="#333935" d="M40.8 26.3c.1-2.6 5-2.1 4.9.3-1.2 1.1-4.1.9-4.9-.3z" />
                                            <path fill="#333935" d="M39.2 27.6c.8-.3 1.1.4 1.7.7 1.3.7 3.3.7 4.8.1.3-.1 1.4-1 1.6-.3.1.5-.9.9-1.5 1.1-1.9.7-3.7.5-5.2-.2-.5-.3-1.6-.6-1.4-1.4zM47.4 8.1c-.1-.1-.1-.2-.2-.3.1.1.1.2.2.3z" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className={css.lockupBlock}>
                                <h2 className={css.name}>Andrew Hipp</h2>
                                <h3 className={css.role}>Front End Developer</h3>
                            </div>
                        </div>
                    </div>
                </Layer>
            </Container>
        </header>
    );
});


export default Header;
