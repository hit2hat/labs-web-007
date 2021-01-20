import React, { useState } from 'react';
import API from '../../networking/api';
import { useDispatch, useSelector } from 'react-redux';
import { PanelSpinner } from '@vkontakte/vkui';
import './index.scss';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { createGuide, editGuide } from '../../store/guides/actions';

const CreateBox = ({ onClose }) => {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState({});
    const selectedGuide = useSelector((store) => store.guides.selected);

    const update = (name, value) => {
        setData((p) => ({
            ...p,
            [name]: value
        }));
    };

    return (
        <Modal
            title={selectedGuide !== null ? 'Изменение справочника' : 'Создание справочника'}
            onClose={onClose}
        >
            {loading ? (
                <div className="form">
                    <PanelSpinner />
                </div>
            ) : (
                <div className="form">
                    <Input
                        name="name"
                        placeholder="Иван"
                        label="Имя"
                        defaultValue={selectedGuide !== null ? selectedGuide.name : ''}
                        onChange={update}
                    />
                    <Input
                        name="age"
                        type="number"
                        placeholder="17"
                        label="Возраст"
                        defaultValue={selectedGuide !== null ? selectedGuide.age : ''}
                        onChange={update}
                    />
                    <Input
                        name="phone"
                        type="number"
                        placeholder="88005553535"
                        label="Телефон"
                        defaultValue={selectedGuide !== null ? selectedGuide.phone : ''}
                        onChange={update}
                    />
                    <div className="form__submit">
                        <Button
                            onClick={async () => {
                                setLoading(true);

                                if (selectedGuide !== null) {
                                    API.editGuideById(selectedGuide.id, data)
                                        .then(() => {
                                            dispatch(editGuide(selectedGuide.id, {
                                                id: Number(selectedGuide.id),
                                                ...data
                                            }));
                                            onClose();
                                        })
                                        .catch(() => alert('Поля заполнены неправильно'))
                                        .finally(() => setLoading(false));
                                } else{
                                    API.createGuideById(data)
                                        .then((id) => {
                                            dispatch(createGuide({ id: Number(id), ...data }));
                                            onClose();
                                        })
                                        .catch(() => alert('Поля заполнены неправильно'))
                                        .finally(() => setLoading(false));
                                }
                            }}
                        >
                            {selectedGuide !== null ? 'Сохранить' : 'Создать'}
                        </Button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default CreateBox;