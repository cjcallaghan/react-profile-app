import PropTypes from "prop-types";

const Wrapper = ({ children }) => {

    return(
        <div className="section">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

Wrapper.propTypes = {children: PropTypes.node};

export default Wrapper;