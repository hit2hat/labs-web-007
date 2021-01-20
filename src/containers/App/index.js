import React, { useState, useEffect } from 'react';
import API from '../../networking/api';
import { useDispatch, useSelector } from 'react-redux';
import { PanelSpinner } from '@vkontakte/vkui';
import './index.scss';

import Header from '../../components/Header';
import GuideCard from '../../components/GuideCard';
import CreateBox from '../CreateBox';

import { loadGuides, selectGuide, deleteGuide } from '../../store/guides/actions';

const App = () => {
    const dispatch = useDispatch();
    const [ modalOpen, setModalOpen ] = useState(false);

    const guides = useSelector((store) => store.guides.list);
    const isGuidesLoaded = useSelector((store) => store.guides.loaded);

    useEffect(() => {
        if (!isGuidesLoaded) {
            API.getAllGuides()
                .then((guides) => dispatch(loadGuides(guides)));
        }
    }, [dispatch, isGuidesLoaded]);

    return (
        <div className="app">
            <Header
                onCreate={() => {
                    dispatch(selectGuide(null));
                    setModalOpen(true);
                }}
            />
            <div className="app__content">
                {isGuidesLoaded ? (
                    <div className="app__cards">
                        {guides.map((guide) => (
                            <GuideCard
                                key={guide.id}
                                name={guide.name}
                                phone={Number(guide.phone)}
                                age={Number(guide.age)}
                                onEdit={() => {
                                    dispatch(selectGuide(guide));
                                    setModalOpen(true);
                                }}
                                onDelete={() => {
                                    if (window.confirm('Вы действительно хотите удалить элемент?')) {
                                        API.deleteGuideById(guide.id)
                                            .then(() => dispatch(deleteGuide(guide.id)))
                                            .catch(() => alert('Произошла ошибка, попробуйте позже!'))
                                    }
                                }}
                            />
                        ))}
                    </div>
                ) : <PanelSpinner />}
            </div>
            {modalOpen && <CreateBox onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default App;