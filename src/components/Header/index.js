import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Button from '../Button';

const Header = ({ onCreate }) => {
    return (
        <div className="header">
            <div className="header__brand">Справочник</div>
            <div className="header__right">
                <Button onClick={onCreate}>Создать</Button>
            </div>
        </div>
    );
};

Header.propTypes = {
    onCreate: PropTypes.func,
};

Header.defaultProps = {
    onCreate: () => null,
};

export default Header;