for (let letter = 'A'.charCodeAt(0); letter <= 'Z'.charCodeAt(0); letter++) {
    let letterChar = String.fromCharCode(letter);
    document.write(`
        <li>
            <a href="#letter${letterChar}">${letterChar}</a>
        </li>
    `);
}