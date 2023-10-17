module.exports = {
    '*.{js,jsx,ts,tsx}': (filename) => [
        `prettier --write ${filenames.join(' ')}`
        `npm run lint --fix . ${filenames.join(' --file')}`,
    ]
}
