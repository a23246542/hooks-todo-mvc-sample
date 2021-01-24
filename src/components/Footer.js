import React from 'react';

function Footer({ numOfTodos }) {
    return (
        <footer>
            <p>剩餘數目:{numOfTodos}</p>
        </footer>
    );
}

export default Footer;
