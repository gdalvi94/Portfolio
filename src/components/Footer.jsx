import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
          style = {{textDecoration:'none'}}
        > <span style={{color: 'black'}}>
            © 2021 hashirshoaeb
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
