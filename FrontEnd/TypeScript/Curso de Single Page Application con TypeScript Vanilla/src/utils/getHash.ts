// Obtenemos el hash de la url
const getHash = () => {
    const hash = location.hash.slice(1).toLocaleLowerCase();
    const separateHash = hash.split("/");
    const currentLocation = separateHash[1] || "/";
    return currentLocation;
};

export { getHash };
