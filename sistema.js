const os = require('os');

function getOperatingSystem() {
    const platform = os.platform();
    let osName = 'Unknown OS';

    switch (platform) {
        case 'aix':
            osName = 'AIX';
            break;
        case 'darwin':
            osName = 'macOS';
            break;
        case 'freebsd':
            osName = 'FreeBSD';
            break;
        case 'linux':
            osName = 'Linux';
            break;
        case 'openbsd':
            osName = 'OpenBSD';
            break;
        case 'sunos':
            osName = 'SunOS';
            break;
        case 'win32':
            osName = 'Windows';
            break;
        case 'android':
            osName = 'Android';
            break;
        default:
            osName = 'Unknown OS';
    }

    return osName;
}

console.log(`El sistema operativo actual es: ${getOperatingSystem()}`);
