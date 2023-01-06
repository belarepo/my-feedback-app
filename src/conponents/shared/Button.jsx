import propTypes from 'prop-types'

export default function Button({ children, version, type, isDisable }) {
    return (
        <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisable: false
}

Button.prototype = {
    children: propTypes.node.isRequired,
    version: propTypes.string,
    type: propTypes.string,
    isDisable: propTypes.bool
}