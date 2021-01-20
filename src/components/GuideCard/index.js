import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Button from '../Button';

const GuideCard = ({ name, age, phone, onDelete, onEdit }) => {
    return (
        <div className="guide-card">
            <div className="guide-card__name">{name}</div>
            <div className="guide-card__info">{age} лет・{phone}</div>
            <div className="guide-card__actions">
                <Button onClick={onEdit}>
                    Изменить
                </Button>
                <Button
                    mode="dangerous"
                    onClick={onDelete}
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
};

GuideCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    phone: PropTypes.number.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};

GuideCard.defaultProps = {
    onDelete: () => null,
    onEdit: () => null,
};

export default GuideCard;