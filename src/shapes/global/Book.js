import { PropTypes } from 'prop-types';

export const bookShape = PropTypes.shape({
    'title': PropTypes.string,
    'pages': PropTypes.number,
    'genre': PropTypes.string,
    'cover': PropTypes.string,
    'synopsis': PropTypes.string,
    'year': PropTypes.number,
    'ISBN': PropTypes.string,
    'author': PropTypes.shape({
        'name': PropTypes.string,
        'otherBooks': PropTypes.arrayOf(PropTypes.string),
    }),
});