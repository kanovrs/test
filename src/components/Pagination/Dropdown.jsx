import { useState } from 'react';
import Icon from '../Icon';

import './Dropdown.scss';

export default function Dropdown ({ options, selectedOption, onSelectOption }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="custom-dropdown" onClick={handleToggle}>
            <p className="custom-dropdown__text">Показывать на странице:</p>
            <div className="custom-dropdown__selected">
                {selectedOption}
                <Icon name="arow-l" className={`icon ${isOpen ? 'open' : ''}`} />
                 {isOpen && (
                <div className="custom-dropdown__options">
                    {options.map(option => (
                        <div 
                            key={option}
                            className={`custom-dropdown__option ${option === selectedOption ? 'selected' : ''}`}
                            onClick={() => onSelectOption(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
            </div>
           
            
        </div>
    );
};


