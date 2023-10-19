import CSS from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return (
    <section>
      <div className={CSS.container}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
