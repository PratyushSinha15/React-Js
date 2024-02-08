 const currYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Hemant</strong>
      </p>
    </footer>
  );
};