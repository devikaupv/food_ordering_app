export const Footer = () => {
    return (
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'black',
          color: '#fff',
          padding: '10px',
          fontSize: '12px',
          textAlign: 'center',
          zIndex: 9999
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ marginBottom: '6px', textTransform: 'uppercase' }}>Team</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '4px' }}>
                <a href="#" className="hover:underline">Menu</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 style={{ marginBottom: '6px', textTransform: 'uppercase' }}>Legal</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {/* <li style={{ marginBottom: '4px' }}>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li> */}
              <li style={{ marginBottom: '4px' }}>
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              {/* <li style={{ marginBottom: '4px' }}>
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div>
          Food ordering app
        </div>
      </footer>
    );
  };
  