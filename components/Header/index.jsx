import React from 'react';
import Link from 'next/link';

import css from './header.scss';

const Header = () => (
    <header className={css.header}>
        <div className={css.content}>
            <div className={css.lockup}>
                <div className={css.lockupBlock}>
                    <h2 className={css.name}>Andrew Hipp</h2>
                    <h3 className={css.role}>Front End Developer</h3>
                </div>
            </div>
        </div>
    </header>
);


export default Header;
