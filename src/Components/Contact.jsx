import github from '../assets/github_black.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.webp';

const Contact = () => {
  const styles = {
    picholder: {
      margin: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'fit-content', // Full page height
      flexDirection: 'row',
    },
    pic: {
      margin: '20px',
    },
    image: {
      width: '70px', // You can adjust this size based on your requirements
      height: '70px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.picholder}>
      <div style={styles.pic}>
        <a href="https://www.linkedin.com/in/youssef-fathi-a443b318a/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" style={styles.image} />
        </a>
      </div>
      <div style={styles.pic}>
        <a href="https://github.com/InterVam" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" style={styles.image} />
        </a>
      </div>
      <div style={styles.pic}>
        <a href="mailto:yfathi2008@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="GitHub" style={styles.image} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
