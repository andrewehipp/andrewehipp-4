import React from 'react';

import css from './projectHeader.scss';

const ProjectHeader = ({ name, client }) => (
    <header className={css.projectHeader}>
        <h1 className={css.title}>{name}</h1>
        <h3 className={css.client}>{client}</h3>
    </header>
);

export default ProjectHeader;
