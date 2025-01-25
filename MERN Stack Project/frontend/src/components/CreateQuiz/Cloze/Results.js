import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ data }) => {
    const getResults = () => {
        return data.reduce((acc, cur) => {
            if (cur.type === 'answer') {
                let s = `word [${cur.text}] `;
                if (!cur.placed) {
                    s += 'has not been placed';
                } else {
                    s += cur.text === cur.displayed
                        ? 'correct!'
                        : 'has not been placed correctly';
                }
                return acc.concat(s);
            }
            return acc;
        }, []);
    };

    const renderResult = (result) => {
        return result.map((s, i) => <p key={i}>{s}</p>);
    };

    const results = getResults();

    return (
        <div>
            {renderResult(results)}
        </div>
    );
};

Results.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Results;
