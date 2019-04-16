import React from 'react';

import Tools from '../Tools';

import css from './project-header.scss';

const ProjectHeader = ({
    fields: {
        name,
        client,
        builtWith,
    } = {},
}) => (
    <header className={css.projectHeader}>
        <h1 className={css.title}>{name}</h1>
        <h3 className={css.client}>{client}</h3>

        <Tools tools={builtWith} />
    </header>
);

export default ProjectHeader;
