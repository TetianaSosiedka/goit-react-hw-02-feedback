import PropTyprs from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTyprs.string.isRequired,
  children: PropTyprs.func.isRequired,
};
